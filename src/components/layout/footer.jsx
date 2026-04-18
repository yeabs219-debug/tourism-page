import { Globe, Mail, Phone } from "lucide-react";
import { FaFacebook , FaInstagram ,FaTwitter} from 'react-icons/fa6';
export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6">

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold">Ethiopia Travel</h2>
          <p className="text-gray-400 mt-3 text-sm">
            Discover the beauty, culture, and history of Ethiopia.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Destinations</li>
            <li className="hover:text-white cursor-pointer">Culture</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-gray-400">

            <FaFacebook className="cursor-pointer hover:text-white" />
            <FaInstagram className="cursor-pointer hover:text-white" />
            <FaTwitter className="cursor-pointer hover:text-white" />
           
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 text-sm mt-10">
        © 2026 Ethiopia Travel. All rights reserved.
      </div>

    </footer>
  );
}