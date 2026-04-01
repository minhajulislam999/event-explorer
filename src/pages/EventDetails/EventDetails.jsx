import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";
import useTitle from "../../hooks/useTitle";

const EventDetails = () => {
  useTitle("Event Details");
  const { id } = useParams();
  const { user } = useAuth();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetch("/events.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((e) => e.id === parseInt(id));
        setEvent(found);
      });
  }, [id]);

  const handleReserve = (e) => {
    e.preventDefault();
    toast.success("Seat reserved successfully!");
    e.target.reset();
  };

  if (!event) return <div className="flex justify-center items-center min-h-screen">
    <span className="loading loading-spinner loading-lg"></span>
  </div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <img src={event.thumbnail} alt={event.name} className="w-full h-72 object-cover rounded-xl mb-8" />
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="badge badge-primary">{event.category}</span>
      </div>
      <h1 className="text-4xl font-bold mb-4">{event.name}</h1>
      <div className="flex flex-col gap-2 text-gray-500 mb-6">
        <p>📅 {event.date}</p>
        <p>📍 {event.location}</p>
        <p>🎟️ Entry Fee: ৳{event.entry_fee}</p>
      </div>
      <p className="text-lg mb-10">{event.description}</p>

      <div className="card bg-base-200 shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6">Reserve a Seat</h2>
        <form onSubmit={handleReserve} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            defaultValue={user?.displayName}
            className="input input-bordered w-full"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            defaultValue={user?.email}
            className="input input-bordered w-full"
            required
          />
          <button type="submit" className="btn btn-primary w-full">
            Reserve Seat
          </button>
        </form>
      </div>
    </div>
  );
};

export default EventDetails;