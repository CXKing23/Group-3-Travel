// TravelCommunity.jsx
import React, { useState, useEffect } from "react";

const TravelCommunity = () => {
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({
    user: "",
    destination: "",
    message: "",
  });

  useEffect(() => {
    fetch("http://localhost:3001/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3001/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setForm({ user: "", destination: "", message: "" });
      const updatedPosts = await fetch("http://localhost:3001/api/posts").then((res) => res.json());
      setPosts(updatedPosts);
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">🌍 Travel Community</h2>

      <form onSubmit={handleSubmit} className="space-y-2 mb-6">
        <input
          type="text"
          name="user"
          value={form.user}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="destination"
          value={form.destination}
          onChange={handleChange}
          placeholder="Destination"
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your question or tip..."
          className="w-full border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Post
        </button>
      </form>

      <div className="space-y-4">
        {posts.map((post, index) => (
          <div key={index} className="border p-3 rounded shadow">
            <h4 className="font-semibold">{post.user} - {post.destination}</h4>
            <p>{post.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelCommunity;
