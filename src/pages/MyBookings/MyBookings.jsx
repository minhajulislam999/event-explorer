import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import useTitle from "../../hooks/useTitle";

const MyBookings = () => {
  useTitle("My Bookings");
  const { user } = useAuth();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/events.json")
      .then((res) => res.json())
      .then((data) => setEvents(data.slice(0, 3)));
  }, []);

  return (
    <div className="min-h-screen bg-base-200 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">My Bookings</h2>
        {events.length === 0 ? (
          <p className="text-center text-gray-500">No bookings yet!</p>
        ) : (
          <div className="flex flex-col gap-4">
            {events.map((event) => (
              <div key={event.id} className="card bg-base-100 shadow-md">
                <div className="card-body flex flex-row items-center gap-6">
                  <img
                    src={event.thumbnail}
                    alt={event.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{event.name}</h3>
                    <p className="text-gray-500 text-sm">📅 {event.date}</p>
                    <p className="text-gray-500 text-sm">📍 {event.location}</p>
                  </div>
                  <div className="badge badge-success">Confirmed</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBookings;