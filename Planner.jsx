import React, { useState, useEffect } from "react";
import "./styles.css";

const TravelPlanner = () => {
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    description: "",
  });

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(storedEvents);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedEvents = [...events, formData];
    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
    setFormData({ name: "", date: "", time: "", description: "" });
  };

  return (
    <div>
      <header>
        <a href="/">Travel Adventure</a>
      </header>

      <section>
        <form onSubmit={handleSubmit}>
          <label htmlFor="event">Event:</label>
          <input
            type="text"
            id="event"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />

          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            required
          />

          <button type="submit">Add Event</button>
        </form>

        <ul id="event-list">
          {events.map((event, index) => (
            <li key={index}>
              <strong>{event.name}</strong><br />
              <span>Date: {event.date}</span><br />
              <span>Time: {event.time}</span><br />
              <span>Description: {event.description}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default TravelPlanner;
