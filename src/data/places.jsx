 import hallalaKella from '../assets/hallala-kella.jpg'
import gorgora from '../assets/hero3.jpg'
import { Star } from "lucide-react";

 
export const places = [
  {
    name: "Halala Kella",
    location: "Oromia, Ethiopia",
    image: hallalaKella,
    rating: 4.8,
    desc: "A luxury eco resort surrounded by breathtaking mountains."
  },
  {
    name: "Gorgora",
    location: "Amhara, Ethiopia",
    image: gorgora,
    rating: 4.7,
    desc: "A peaceful lakeside destination on Lake Tana."
  },
  {
    name: "Entoto Park",
    location: "Addis Ababa, Ethiopia",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    rating: 4.6,
    desc: "Nature, adventure, and city escape in one place."
  },
   { 
    name: "Elephant Paw Lodge", 
    location: "Chebera Churchura, Ethiopia", 
    image: 'elephantpaw', 
    rating: 4.9, 
    desc: "An eco-lodge at the gateway of Chebera Churchura National Park, famous for elephant sightings." 
  },
  { 
    name: "Wonchi Eco Lodge", 
    location: "Wonchi Crater Lake, Oromia", 
    image: 'wonchi', 
    rating: 4.6, 
    desc: "A stunning retreat set in a volcanic crater, managed by Ethiopian Skylight Hotel." 
  },
  { 
    name: "Denbi Eco Lodge", 
    location: "Bonga, South West Ethiopia", 
    image: 'denbi', 
    rating: 4.7, 
    desc: "The first 'Dine for Generations' project, nestled in a pristine forest near the birthplace of coffee." 
  },
  { 
    name: "Shabeely Resort", 
    location: "Somali Region, Ethiopia", 
    image: 'shabeely', 
    rating: 4.5, 
    desc: "A modern milestone in the Somali region designed to highlight the area's unique landscapes." 
  }
];

function placesCard (places){
  return(
          <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3">

        {places.map((place, i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition duration-500"
          >

            {/* Image */}
            <img
              src={place.image}
              className="h-72 w-full object-cover group-hover:scale-110 transition duration-500"
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

            {/* Content */}
            <div className="absolute bottom-0 p-5 text-white w-full">

              {/* Location */}
              <p className="text-xs text-gray-300">
                {place.location}
              </p>

              {/* Name + Rating */}
              <div className="flex justify-between items-center mt-1">
                <h3 className="text-xl font-semibold">
                  {place.name}
                </h3>

                <span className="flex items-center gap-1 text-yellow-400 text-sm">
                  <Star size={14} fill="currentColor" />
                  {place.rating}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-200 mt-2">
                {place.desc}
              </p>

              {/* Button */}
              <button className="mt-4 text-sm bg-white text-black px-4 py-2 rounded-lg hover:bg-yellow-500 transition">
                Explore →
              </button>

            </div>

          </div>
        ))}

      </div>
  )
}
export default placesCard