import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Navbar({ isLoggedIn, setShowLogin }) {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Glass effect background */}
      <div className="backdrop-blur-md bg-black/30 border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">

          {/* Logo */}
          <h1 className="text-xl font-bold">
            Ethiopia Travel
          </h1>

          {/* Menu */}
          <ul className="hidden md:flex gap-8 text-sm">
            <li className="hover:text-yellow-400 cursor-pointer">
              <Link to= "/">Home</Link></li>
            <li className="hover:text-yellow-400 cursor-pointer">
              <Link to= "/destinations">Destinations</Link>
            </li>
            <li className="hover:text-yellow-400 cursor-pointer">
              <Link to= "/whyvisit">Culture</Link>              
            </li>
            <li className="hover:text-yellow-400 cursor-pointer">
              <Link to= "/destinations">Destinations</Link>            
            </li>
          </ul>

          {/* Button */}

        {isLoggedIn ? (
        <Button className="text-green-600">Profile</Button>
      ) : (
        <Button className="bg-yellow-500 text-black hover:bg-yellow-600" onClick={() => setShowLogin(true)}>Login</Button>
      )}
        </div>
      </div>

    </nav>
  );
}