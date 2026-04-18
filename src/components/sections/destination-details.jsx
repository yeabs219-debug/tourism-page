import { useParams,useNavigate } from "react-router-dom";
import { places } from "@/data/places";
import { FcPrevious } from "react-icons/fc";
import { useState } from "react";
import BookingModal from "@/bookingmodal/bookingmodal";
export default function DestinationDetails() {
  const [open ,setOpen] = useState(false)
  const navigate =useNavigate()
  const { id } = useParams();

  const place = places.find(p => p.id === Number(id));

  if (!place) return <p>Place not found</p>;

  return (
    
    <div className="max-w-5xl mx-auto p-6 pt-24">
        <button
    onClick={() => navigate("/destinations")}
    className="flex items-center gap-2 text-gray-700 hover:text-black transition font-medium pb-5"
  >
    <FcPrevious className="text-xl" />
    <span>Back</span>
  </button>
      <img
        src={place.image}
        className="w-full h-[400px] object-cover rounded-xl"
      />

      <h1 className="text-3xl font-bold mt-4">
        {place.name}
      </h1>

      <p className="text-gray-500">{place.location}</p>

      <div className="mt-6 p-6 border-l-4 border-yellow-500 bg-yellow-50/50 rounded-r-xl max-w-3xl">
        <p className="text-gray-800 leading-relaxed text-base md:text-lg">
          {place.longDesc}
        </p>
    </div>
    <div className="mt-10 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-black to-gray-800 text-white shadow-xl">

  {/* Title */}
  <h2 className="text-2xl md:text-3xl font-bold">
    Ready to experience {place.name}?
  </h2>

  {/* Subtitle */}
  <p className="text-gray-300 mt-2 text-sm md:text-base leading-relaxed">
    Book your visit now and explore one of Ethiopia’s most beautiful destinations.
    Enjoy guided tours, local experiences, and unforgettable memories.
  </p>

  {/* Features */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 text-sm text-gray-200">
    <div>✔ Guided Tours Available</div>
    <div>✔ Best Price Guarantee</div>
    <div>✔ Instant Confirmation</div>
  </div>

  {/* Button */}
  <button
    onClick={() => setOpen(true)}
    className="mt-6 w-full md:w-auto px-6 py-3 bg-yellow-500 text-black font-semibold rounded-xl hover:bg-yellow-400 transition"
  >
    Book Now →
  </button>
  <BookingModal
        open={open}
        onClose={() => setOpen(false)}
        place={place}
      />
</div>
    </div>
  );
}