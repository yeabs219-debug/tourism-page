import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar({ isLoggedIn, setShowLogin }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
     <div className="backdrop-blur-md bg-black/30 border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">

          <h1 className="text-xl font-bold">
            Ethiopia Travel
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-sm">
            <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link to="/destinations" className="hover:text-yellow-400">Destinations</Link></li>
            <li><Link to="/whyvisit" className="hover:text-yellow-400">Culture</Link></li>
          </ul>

          {/* Desktop Button */}
          <div className="hidden md:block">
            {isLoggedIn ? (
              <Button className="text-green-600">Profile</Button>
            ) : (
              <Button
                className="bg-yellow-500 text-black hover:bg-yellow-600"
                onClick={() => setShowLogin(true)}
              >
                Login
              </Button>
            )}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 pb-4 flex flex-col gap-4 text-white">

            <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">
              Home
            </Link>

            <Link to="/destinations" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">
              Destinations
            </Link>

            <Link to="/whyvisit" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">
              Culture
            </Link>

            {/* Mobile Button */}
            {isLoggedIn ? (
              <Button className="text-green-600 w-full">{localStorage.getItem}</Button>
            ) : (
              <Button
                className="bg-yellow-500 text-black hover:bg-yellow-600 w-full"
                onClick={() => {
                  setShowLogin(true);
                  setIsOpen(false);
                }}
              >
                Login
              </Button>
            )}
          </div>
        </div>

      </div>
    </nav>
  );
}