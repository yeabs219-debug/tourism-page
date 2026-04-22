import { useState } from "react";
import axios from "axios";

function BookingModal({ open, onClose, place }) {
  const [form, setForm] = useState({
    date: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
const handleBook = async () => {
  setLoading(true);
  setMessage("");

  if (!form.date) {
    setMessage("Please select a date");
    setLoading(false);
    return;
  }

  if (!place?.id) {
    setMessage("Invalid place selected");
    setLoading(false);
    return;
  }

  try {
    await axios.post(
      "http://localhost:5000/bookings",
      {
        trip_id: place.id,
        booking_date: form.date,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    setMessage("Booking successful 🎉");
    setForm({ date: "" });

  } catch (err) {
    console.error(err.response?.data || err.message);
    setMessage("Booking failed ❌");
  } finally {
    setLoading(false);
  }
};

  
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">

      {/* Modal box */}
      <div className="bg-white w-[90%] max-w-md rounded-2xl p-6 shadow-2xl relative">

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-2">
          Book {place.name}
        </h2>

        <p className="text-sm text-gray-500 mb-4">
          Fill in your details to confirm your trip
        </p>

        {/* Inputs */}


        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="w-full px-4 py-3 mb-3 rounded-xl border border-gray-200 bg-gray-50 
  focus:bg-white focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 
  outline-none transition shadow-sm text-gray-800" 
        />

        {/* Button */}
        <button
          onClick={handleBook}
          disabled={loading}
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition disabled:opacity-50"
        >
          {loading ? "Booking..." : "Confirm Booking"}
        </button>

        {/* Message */}
        {message && (
          <p className="text-center text-sm mt-3 text-gray-600">
            {message}
          </p>
        )}

      </div>
    </div>
  );
}

export default BookingModal;