import React, { useState } from 'react';
import { db, storage } from '../pages/firebase.js'; // Adjust the path as necessary
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const Submit = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [media, setMedia] = useState(null);
  const [tags, setTags] = useState([]);
  const [storyLocation, setStoryLocation] = useState('');

  // Make sure the handleSubmit function is defined
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let mediaUrl = '';

      if (media) {
        const mediaRef = ref(storage, `travelStories/${media.name}`);
        await uploadBytes(mediaRef, media);
        mediaUrl = await getDownloadURL(mediaRef);
      }

      await addDoc(collection(db, 'travelStories'), {
        title,
        description,
        mediaUrl,
        tags,
        location: storyLocation,
        timestamp: serverTimestamp(),
      });

      alert('Story submitted!');
      // Reset form if you want
      setTitle('');
      setDescription('');
      setMedia(null);
      setTags([]);
      setStoryLocation('');
    } catch (error) {
      console.error('Error submitting story:', error);
      alert('Failed to submit. Try again.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="file"
          onChange={(e) => setMedia(e.target.files[0])}
        />
        <input
          type="text"
          placeholder="Tags (comma-separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value.split(','))}
        />
        <input
          type="text"
          placeholder="Location"
          value={storyLocation}
          onChange={(e) => setStoryLocation(e.target.value)}
        />
        <button type="submit">Submit Story</button>
      </form>
    </div>
  );
};

export default Submit;
