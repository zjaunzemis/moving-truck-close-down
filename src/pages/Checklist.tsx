import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

type ChecklistSection = {
  title: string;
  items: string[];
};

const checklist: ChecklistSection[] = [
  {
    title: 'Interior tidy-up',
    items: ['Remove trash and personal items', 'Disinfect touch points', 'Secure moving blankets and straps'],
  },
  {
    title: 'Equipment check',
    items: ['Count dollies, straps, and pads', 'Inspect ramp + liftgate', 'Store leftover packing materials'],
  },
  {
    title: 'Vehicle status',
    items: ['Log ending mileage + fuel level', 'Note any dashboard alerts', 'Confirm lights are off and doors locked'],
  },
];

const STORAGE_KEY = 'truckCloseDown.completedItems';

export function Checklist() {
  const navigate = useNavigate();

  // Load checklist state from localStorage
  const [completedItems, setCompletedItems] = useState<Record<string, boolean>>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as Record<string, boolean>) : {};
    } catch {
      return {};
    }
  });

  // Guard: must have selected a truck
  useEffect(() => {
    const truckId = localStorage.getItem('truckCloseDown.selectedTruckId');
    if (!truckId) {
      navigate('/select-truck');
    }
  }, [navigate]);

  // Persist checklist changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(completedItems));
    } catch {
      // ignore storage errors
    }
  }, [completedItems]);

  // Toggle checkbox state
  const toggleItem = (id: string) => {
    setCompletedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const completedCount = Object.values(completedItems).filter(Boolean).length;
  const totalCount = checklist.reduce((total, section) => total + section.items.length, 0);

  return (
    <section className="space-y-6">
      {checklist.map((section) => (
        <article key={section.title} className="card space-y-4">
          <header>
            <h3 className="text-xl font-semibold text-brand-dark">{section.title}</h3>
          </header>

          <ul className="space-y-3">
            {section.items.map((item) => {
              const id = `${section.title}-${item}`;
              const checked = completedItems[id] ?? false;

              return (
                <li key={id} className="flex items-start gap-3 rounded-xl bg-brand-light/60 p-4">
                  <label className="flex items-start gap-3">
                    <input
                      id={id}
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleItem(id)}
                      className="mt-1 h-5 w-5 rounded border-brand-dark text-brand-accent focus:ring-brand-accent"
                    />
                    <span className="text-brand-dark/90">{item}</span>
                  </label>
                </li>
              );
            })}
          </ul>
        </article>
      ))}

      <div className="card flex flex-col gap-4 bg-brand-dark text-white md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-widest text-brand-light">Progress</p>
          <p className="text-2xl font-semibold">
            {completedCount} of {totalCount} tasks complete
          </p>
        </div>

        <Link
          to="/review-submit"
          className={`button-primary bg-white text-brand-dark hover:bg-brand-light ${
            completedCount === totalCount ? '' : 'pointer-events-none opacity-50'
          }`}
        >
          Review and submit
        </Link>
      </div>
    </section>
  );
}
