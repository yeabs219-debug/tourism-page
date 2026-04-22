import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

function PlaceCard({ place }) {
  const navigate = useNavigate();

  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition duration-500">

      <img
        src={`http://localhost:5000/images/${place.image}`} 
        className="h-72 w-full object-cover group-hover:scale-110 transition duration-500"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

      <div className="absolute bottom-0 p-5 text-white w-full">

        <p className="text-xs text-gray-300">
          {place.location}
        </p>

        <div className="flex justify-between items-center mt-1">
          <h3 className="text-xl font-semibold">
            {place.name}
          </h3>

          <span className="flex items-center gap-1 text-yellow-400 text-sm">
            <Star size={14} fill="currentColor" />
            {place.rating}
          </span>
        </div>

        <p className="text-sm text-gray-200 mt-2">
          {place.desc}
        </p>

        <button
          onClick={() => navigate(`/destination/${place.id}`)}
          className="mt-4 text-sm bg-white text-black px-4 py-2 rounded-lg hover:bg-yellow-500 transition"
        >
          Explore →
        </button>

      </div>
    </div>
  );
}

export default PlaceCard;