import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200/70 bg-white/70 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 py-8 grid gap-4 sm:grid-cols-2 items-center">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} RecurringEase. All rights reserved.</p>
        <nav className="flex justify-start sm:justify-end gap-6 text-sm">
          <Link to="/privacy" className="text-gray-600 hover:text-indigo-600">Privacy</Link>
          <Link to="/terms" className="text-gray-600 hover:text-indigo-600">Terms</Link>
          <Link to="/contact" className="text-gray-600 hover:text-indigo-600">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}