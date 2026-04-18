import hero1 from '../../assets/hero.jpg'
import { Button } from "@/components/ui/button";
import WhyVisit from './whyvisit';
import { Link } from 'react-router-dom';
import {places} from '@/data/places';
import PlacesGrid from '../ui/placesGrid';

export default function Hero({ isLoggedIn, setShowLogin }) {
  const topDestinations = places.slice(0,3);
  const handleBookNow = () => {
    if (!isLoggedIn) {
      setShowLogin(true);
    } else {
      alert("Proceed to booking");
    }
  }
  return (
    <div>
    <section className="relative h-screen overflow-hidden">

      {/* Background Image */}
      <img
        src={hero1}
        className="absolute h-full w-full object-cover object-center"
        alt="Hero"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-white">
          Explore Ethiopia’s New Destinations
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl">
          Discover ancient history decorated with modern architecture  and rich culture across Ethiopia.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-4">
          <Button className="bg-yellow-500 text-black hover:bg-yellow-600">
            <Link to= "/destinations">Explore Destinations</Link>
            
          </Button>

          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black" onClick ={handleBookNow}>
            Plan Your Trip
          </Button>
        </div>
      </div>
    </section>;
    <section>
       <div className="text-center mb-14">
        <h2 className="text-4xl font-bold">
          Premium Destinations
        </h2>
        <p className="text-gray-600 mt-2">
          Discover Ethiopia’s most beautiful modern travel spots
        </p>
      </div>
      <PlacesGrid places = {topDestinations}/>

    </section>
    <WhyVisit/>
    </div>
  );
}