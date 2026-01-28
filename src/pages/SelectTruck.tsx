import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const STORAGE_KEY = 'truckCloseDown.selectedTruckId';

const trucks = [
  { id: 'sos-21', label: 'SOS-21 • 20ft Box Truck' },
  { id: 'sos-08', label: 'SOS-08 • 26ft Liftgate' },
  { id: 'sos-17', label: 'SOS-17 • Sprinter Van' },
];

export function SelectTruck() {
  const navigate = useNavigate();
  const [selectedTruck, setSelectedTruck] = useState<string>('');

  // Driver-safe: require explicit selection every time you enter this page
useEffect(() => {
  try {
    localStorage.removeItem('truckCloseDown.selectedTruckId');
    localStorage.removeItem('truckCloseDown.completedItems');
    localStorage.removeItem('truckCloseDown.driverName');
    localStorage.removeItem('truckCloseDown.notes');
  } catch {
    // ignore storage errors
  }
}, []);


  return (
    <section className="card space-y-6">
      <header className="space-y-2">
        <h2 className="text-2xl font-semibold text-brand-dark">Select Vehicle</h2>
        <p className="text-sm text-brand-dark/70">
          Choose the vehicle you just returned. This ties your close-down report to the correct asset.
        </p>
      </header>

      <div className="space-y-3">
        {trucks.map((truck) => (
          <button
            key={truck.id}
            type="button"
            onClick={() => {
              setSelectedTruck(truck.id);
              try {
                localStorage.setItem(STORAGE_KEY, truck.id);
              } catch {
                // ignore storage errors
              }
            }}
            className={`w-full rounded-xl border p-4 text-left transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent ${
              selectedTruck === truck.id
                ? 'border-brand-accent bg-brand-accent/10'
                : 'border-white/0 bg-white hover:border-brand-accent/40 hover:bg-brand-light'
            }`}
          >
            <p className="font-semibold text-brand-dark">{truck.label}</p>
            <p className="text-xs uppercase tracking-widest text-brand-dark/60">ID: {truck.id}</p>
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-brand-dark/70">Not seeing your truck? Contact fleet support.</p>

        <button
          type="button"
          className={`button-primary ${selectedTruck ? '' : 'opacity-50'}`}
          disabled={!selectedTruck}
          onClick={() => {
            if (!selectedTruck) return;
            navigate('/checklist');
          }}
        >
          Continue to checklist
        </button>
      </div>
    </section>
  );
}
