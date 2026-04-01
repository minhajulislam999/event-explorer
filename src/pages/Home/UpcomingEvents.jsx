import React, { useEffect, useState } from 'react'
import EventCard from '../../components/EventCard';
// import EventCard from "../../components/EventCard";
const UpcomingEvents = () => {
    const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/events.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEvents(data)
      }
    );
      
  }, []);
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
    </div>
  )
}

export default UpcomingEvents
