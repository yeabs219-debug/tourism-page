import { useState } from "react";
import axios from "axios";

function LoginModal({ show, onClose, setIsLoggedIn }) {
  const [isSignup, setIsSignup] = useState(false);
  const [error , setError] = useState()
  const [form, setForm] = useState({
  fullName: "",
  username: "",
  PhoneNumber: "",
  email: "",
  password: "", 
  gender: "",
  location: "",
  dob: "",
});

  if (!show) return null;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = isSignup
      ? "http://localhost:5000/api/auth/signup"
      : "http://localhost:5000/api/auth/login";

    try {
      const res = await axios.post(url, form);
      if (!isSignup) {
        localStorage.setItem("token", res.data.token);
        setIsLoggedIn(true);
        onClose();
      } else {
        alert("Account created! Now login.");
        setIsSignup(false);
        console.log(data)
      }
    } catch (err) {
      setError(err.response?.data?.message||
       err.response?.data?.errors?.[0]?.msg ||
      "Something went wrong")
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl w-[380px] shadow-2xl border border-gray-200">


        <h2 className="text-2xl font-semibold text-center mb-6">
          {isSignup ? "Create Account" : "Welcome Back"}
        </h2>


        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

{!isSignup && (
  <>
    <input
      type="text"
      name="username"
      placeholder="Username"
      onChange={handleChange}
      className="border p-3 rounded-xl w-full"
    />

    <input
      type="password"
      name="password"
      placeholder="Password"
      onChange={handleChange}
      className="border p-3 rounded-xl w-full"
    />
  </>
)}


{isSignup && (
  <>
    <input
      type="text"
      name="fullName"
      placeholder="Full Name"
      onChange={handleChange}
      className="border p-3 rounded-xl w-full"
    />
    <input
      type="text"
      name="username"
      placeholder="user name"
      onChange={handleChange}
      className="border p-3 rounded-xl w-full"
    />

    <input
      type="email"
      name="email"
      placeholder="Email"
      onChange={handleChange}
      className="border p-3 rounded-xl w-full"
    />

    <input
      type="tel"
      name="PhoneNumber"
      placeholder="Phone Number"
      onChange={handleChange}
      className="border p-3 rounded-xl w-full"
    />

    <select
      name="gender"
      onChange={handleChange}
      className="border p-3 rounded-xl w-full"
    >
      <option value="">Select Gender</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>

    <input
      type="text"
      name="location"
      placeholder="Country"
      onChange={handleChange}
      className="border p-3 rounded-xl w-full"
    />

    <input
      type="date"
      name="dob"
      placeholder="Age"
      onChange={handleChange}
      className="border p-3 rounded-xl w-full"
    />

    <input
      type="password"
      name="password"
      placeholder="Password"
      onChange={handleChange}
      className="border p-3 rounded-xl w-full"
    />

  </>
)}

          <button className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl transition">
            {isSignup ? "Sign Up" : "Login"}
          </button>
         {error && (
            <p className="bg-red-100 text-red-700 text-sm px-3 py-2 rounded mt-2">
              {error}
            </p>
          )}
                  
        </form>


        <p className="text-sm text-center mt-4">
          {isSignup ? "Already have an account?" : "Don't have an account?"}
          <span
            onClick={() => setIsSignup(!isSignup)}
            className="text-green-600 cursor-pointer ml-1"
          >
            {isSignup ? "Login" : "Sign up"}
          </span>
        </p>


        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-gray-500 text-lg"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default LoginModal;