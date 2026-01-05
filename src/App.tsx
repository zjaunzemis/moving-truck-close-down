import { NavLink, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home.tsx';
import { SelectTruck } from './pages/SelectTruck.tsx';
import { Checklist } from './pages/Checklist.tsx';
import { ReviewSubmit } from './pages/ReviewSubmit.tsx';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/select-truck', label: 'Select Truck' },
  { to: '/checklist', label: 'Checklist' },
  { to: '/review-submit', label: 'Review & Submit' },
];

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-brand-light text-brand-dark">
      <header className="bg-brand-dark py-4 text-white shadow-md">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-2 px-4 sm:flex-row sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-widest text-brand-accent">SOS Logistics</p>
            <h1 className="text-2xl font-semibold">Moving Truck Close-Down Checklist</h1>
          </div>
          <nav className="flex flex-wrap justify-center gap-2 text-sm font-medium">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 transition-colors ${
                    isActive
                      ? 'bg-brand-accent text-white shadow'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`
                }
                end={item.to === '/'}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-6 px-4 py-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/select-truck" element={<SelectTruck />} />
          <Route path="/checklist" element={<Checklist />} />
          <Route path="/review-submit" element={<ReviewSubmit />} />
        </Routes>
      </main>

      <footer className="bg-brand-dark py-6 text-sm text-white/80">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-2 px-4 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} SOS Logistics. All rights reserved.</p>
          <p className="text-xs">Built with care for closing down days.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
