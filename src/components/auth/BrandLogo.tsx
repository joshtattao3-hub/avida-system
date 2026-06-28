import { Link } from "react-router-dom";

export function BrandLogo() {
  return (
    <Link to="/" className="focus-ring inline-flex items-center gap-3 rounded-full" aria-label="Avida home">
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-base font-extrabold text-white shadow-lift">
        AV
      </span>
      <span className="leading-tight">
        <span className="block text-sm font-extrabold uppercase text-secondary">Avida</span>
        <span className="block text-xs font-semibold text-secondary/60">Management System</span>
      </span>
    </Link>
  );
}
