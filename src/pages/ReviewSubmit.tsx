import { Link } from 'react-router-dom';

export function ReviewSubmit() {
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
          <span className="text-sm font-medium text-brand-dark">Final notes</span>
          <textarea
            placeholder="Anything to report? (dings, low fuel, missing gear, etc.)"
            className="h-32 w-full resize-y rounded-xl border border-brand-dark/20 bg-brand-light/60 p-3 text-sm text-brand-dark shadow-inner focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/40"
          />
        </label>

        <label className="flex items-center gap-3 text-sm text-brand-dark/80">
          <input type="checkbox" className="h-5 w-5 rounded border-brand-dark text-brand-accent focus:ring-brand-accent" />
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
          onClick={() => alert('Submission coming soon!')}
        >
          Submit checklist
        </button>
      </div>
    </section>
  );
}
