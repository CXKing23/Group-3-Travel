// src/pages/BrowseStories.jsx
import React, { useEffect, useState } from 'react';
import { db } from './firebase'; // Import the Firestore database instance
import { collection, getDocs } from 'firebase/firestore';

const BrowseStories = () => {
    const [stories, setStories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch all travel stories from Firestore
        const fetchStories = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'travelStories'));
                const storiesData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setStories(storiesData);
            } catch (error) {
                console.error("Error fetching stories: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchStories();
    }, []);

    if (loading) {
        return <div>Loading stories...</div>;
    }

    return (
        <div>
            <h2>Browse Travel Stories</h2>
            {stories.length === 0 ? (
                <p>No stories available.</p>
            ) : (
                <div>
                    {stories.map(story => (
                        <div key={story.id} className="story-card">
                            <h3>{story.title}</h3>
                            <p><strong>Location:</strong> {story.location}</p>
                            <p><strong>Tags:</strong> {story.tags}</p>
                            <p>{story.description}</p>
                            {/* Optional: Display image or media if available */}
                            {story.media && <img src={story.media} alt={story.title} />}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BrowseStories;
