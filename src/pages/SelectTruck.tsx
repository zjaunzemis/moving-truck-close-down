import { useState } from 'react';
import { Link } from 'react-router-dom';

const trucks = [
  { id: 'sos-21', label: 'SOS-21 • 20ft Box Truck' },
  { id: 'sos-08', label: 'SOS-08 • 26ft Liftgate' },
  { id: 'sos-17', label: 'SOS-17 • Sprinter Van' },
];

export function SelectTruck() {
  const [selectedTruck, setSelectedTruck] = useState<string>('');

  return (
    <section className="card space-y-6">
      <header className="space-y-2">
        <h2 className="text-2xl font-semibold text-brand-dark">Select your truck</h2>
        <p className="text-sm text-brand-dark/70">
          Choose the vehicle you just returned. This helps us tie your checklist to the right asset.
        </p>
      </header>

      <div className="space-y-3">
        {trucks.map((truck) => (
          <button
            key={truck.id}
            type="button"
            onClick={() => setSelectedTruck(truck.id)}
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
        <p className="text-sm text-brand-dark/70">
          Not seeing your truck? Tap support in the footer.
        </p>
        <Link to="/checklist" className={`button-primary ${selectedTruck ? '' : 'pointer-events-none opacity-50'}`}>
          Continue to checklist
        </Link>
      </div>
    </section>
  );
}
