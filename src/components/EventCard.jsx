import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  const { id, name, thumbnail, category, date, location, entry_fee } = event;

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <figure>
        <img src={thumbnail} alt={name} className="w-full h-48 object-cover" />
      </figure>
      <div className="card-body">
        <div className="badge badge-primary">{category}</div>
        <h2 className="card-title mt-2">{name}</h2>
        <div className="flex flex-col gap-1 text-sm text-gray-500">
          <p>📅 {date}</p>
          <p>📍 {location}</p>
          <p>🎟️ Entry Fee: ৳{entry_fee}</p>
        </div>
        <div className="card-actions justify-end mt-4">
          <Link to={`/events/${id}`} className="btn btn-primary btn-sm">
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;