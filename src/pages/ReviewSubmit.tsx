import { useState } from 'react';
import { Link } from 'react-router-dom';

import { supabase } from '../lib/supabaseClient';

const CHECKLIST_KEY = 'truckCloseDown.completedItems';
const TRUCK_KEY = 'truckCloseDown.selectedTruckId';

export function ReviewSubmit() {
  const [notes, setNotes] = useState('');
  const [driverName, setDriverName] = useState('');

  return (
    <section className="card space-y-6">
      <header className="space-y-2">
        <h2 className="text-2xl font-semibold text-brand-dark">Review &amp; submit</h2>
        <p className="text-sm text-brand-dark/70">
          Confirm everything looks good and leave any notes for the operations team.
        </p>
      </header>

      <div className="space-y-4">
        <label className="block space-y-2">
          <span className="text-sm font-medium text-brand-dark">Driver name</span>
          <input
            value={driverName}
            onChange={(e) => setDriverName(e.target.value)}
            placeholder="e.g., Zack"
            className="w-full rounded-xl border border-brand-dark/20 bg-brand-light/60 p-3 text-sm text-brand-dark shadow-inner focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/40"
          />
        </label>

        <label className="block space-y-2">
          <span className="text-sm font-medium text-brand-dark">Final notes</span>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Anything to report? (dings, low fuel, missing gear, etc.)"
            className="h-32 w-full resize-y rounded-xl border border-brand-dark/20 bg-brand-light/60 p-3 text-sm text-brand-dark shadow-inner focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/40"
          />
        </label>

        <label className="flex items-center gap-3 text-sm text-brand-dark/80">
          <input
            type="checkbox"
            className="h-5 w-5 rounded border-brand-dark text-brand-accent focus:ring-brand-accent"
          />
          I confirm the truck has been locked, lights off, and keys returned to the drop box.
        </label>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link to="/checklist" className="button-primary bg-white text-brand-dark hover:bg-brand-light">
          Back to checklist
        </Link>

        <button
          type="button"
          className="button-primary"
          onClick={async () => {
            const truckId = localStorage.getItem(TRUCK_KEY);
            if (!truckId) {
              alert('No truck selected. Please go back and select a truck.');
              return;
            }

            let completedItems: Record<string, boolean> = {};
            try {
              const rawItems = localStorage.getItem(CHECKLIST_KEY);
              completedItems = rawItems ? (JSON.parse(rawItems) as Record<string, boolean>) : {};
            } catch {
              alert('Checklist data was corrupted. Please re-check items and try again.');
              return;
            }

            const { error } = await supabase.from('truck_close_down_submissions').insert({
              truck_id: truckId,
              completed_items: completedItems,
              notes,
              driver_name: driverName || null,
            });

            if (error) {
              console.error('Supabase insert error:', error);
              alert('Submission failed. See console.');
              return;
            }

            alert('Checklist submitted successfully!');
            localStorage.removeItem(CHECKLIST_KEY);
            localStorage.removeItem(TRUCK_KEY);
            setNotes('');
            setDriverName('');
          }}
        >
          Submit checklist
        </button>
      </div>
    </section>
  );
}

