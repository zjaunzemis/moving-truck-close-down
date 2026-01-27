import { Link } from 'react-router-dom';

export function Home() {
  return (
    <section className="card space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-brand-dark">Truck Close-Down Checklist</h2>

        <p className="text-brand-dark/80">
          Complete this end-of-day close-down report before leaving the vehicle. This process ensures trucks are ready for the next service day and records compliance activity.

        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl bg-brand-light/60 p-4">
          <h3 className="text-lg font-semibold text-brand-dark">What you&apos;ll need</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-brand-dark/80">
            <li>Phone or tablet with this checklist open</li>
<li>Inspection notes for cleanliness, damage, or missing equipment</li>
<li>Any relevant end-of-day observations</li>

          </ul>
        </div>
        <div className="rounded-xl bg-brand-light/60 p-4">
          <h3 className="text-lg font-semibold text-brand-dark">How it works</h3>
          <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-brand-dark/80">
            <li>Select your assigned truck.</li>
            <li>Walk through the checklist sections.</li>
            <li>Review your summary and submit for records.</li>
          </ol>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-brand-dark/70">
          Questions or issues should be reported to management.

        </p>
        <Link to="/select-truck" className="button-primary">
          Get started
        </Link>
      </div>
    </section>
  );
}
