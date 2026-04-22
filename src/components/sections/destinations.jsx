import { useEffect, useState } from "react";
import PlacesGrid from "../ui/placesGrid";

export default function Destinations() {
    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(true);
    const handleBooking = async (tripId) => {
    const token = localStorage.getItem("token");

    const res = await fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        trip_id: tripId,
        booking_date: new Date().toISOString().split("T")[0],
      }),
    });

    const data = await res.json();
    console.log(data);
  };

  useEffect(() => {
    fetch("http://localhost:5000/trips")
      .then((res) => res.json())
      .then((data) => {
        setPlaces(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching trips:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading destinations...</p>;
  }
  return (
    <section className="py-24 px-6 bg-[#F7F3EC]">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold">Premium Destinations</h2>
      <p className="text-gray-600 mt-2">
          Discover Ethiopia’s most beautiful modern travel spots
       </p>
      </div>

      <PlacesGrid places={places} onBook={handleBooking} />
    </section>
  );
}