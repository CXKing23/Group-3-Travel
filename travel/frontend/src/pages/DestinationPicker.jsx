import React, { useState } from "react";
import "./DestinationPicker.css"; // Import external CSS

const DestinationPicker = () => {
  const [result, setResult] = useState("");

  const findDestination = () => {
    let beachCount = 0;
    let cityCount = 0;
    let mountainCount = 0;
    let adventureCount = 0;

    const getCheckedValue = (name) => {
      const selected = document.querySelector(`input[name="${name}"]:checked`);
      return selected ? selected.value : null;
    };

    const q1 = getCheckedValue("q1");
    const q2 = getCheckedValue("q2");
    const q3 = getCheckedValue("q3");
    const q4 = getCheckedValue("q4");

    const tallyScore = (value) => {
      if (value === "beach") beachCount++;
      if (value === "city") cityCount++;
      if (value === "mountain") mountainCount++;
      if (value === "adventure") adventureCount++;
    };

    [q1, q2, q3, q4].forEach(tallyScore);

    let destination = "";
    if (beachCount >= cityCount && beachCount >= mountainCount && beachCount >= adventureCount) {
      destination = "a tropical beach destination like the Maldives, Hawaii, or the Caribbean!";
    } else if (cityCount >= beachCount && cityCount >= mountainCount && cityCount >= adventureCount) {
      destination = "a vibrant city like New York, Paris, or Tokyo!";
    } else if (mountainCount >= beachCount && mountainCount >= cityCount && mountainCount >= adventureCount) {
      destination = "a serene mountain retreat like the Swiss Alps, Colorado, or the Himalayas!";
    } else {
      destination = "an adventure-filled destination like New Zealand, Costa Rica, or Patagonia!";
    }

    setResult(`Based on your answers, you should consider visiting ${destination}`);
  };

  return (
    <div className="quiz-container">
      <h2>Find Your Next Travel Destination</h2>

      <div className="question">
        <h3>1. What kind of weather do you prefer?</h3>
        <label><input type="radio" name="q1" value="beach" /> Sunny and warm</label><br />
        <label><input type="radio" name="q1" value="city" /> Mild and temperate</label><br />
        <label><input type="radio" name="q1" value="mountain" /> Cool and crisp</label><br />
        <label><input type="radio" name="q1" value="adventure" /> Varied and unpredictable</label><br />
      </div>

      <div className="question">
        <h3>2. What activities do you enjoy the most?</h3>
        <label><input type="radio" name="q2" value="beach" /> Relaxing on the beach</label><br />
        <label><input type="radio" name="q2" value="city" /> Exploring museums and landmarks</label><br />
        <label><input type="radio" name="q2" value="mountain" /> Hiking and nature walks</label><br />
        <label><input type="radio" name="q2" value="adventure" /> Adventure sports and thrills</label><br />
      </div>

      <div className="question">
        <h3>3. What type of food do you love?</h3>
        <label><input type="radio" name="q3" value="beach" /> Fresh seafood</label><br />
        <label><input type="radio" name="q3" value="city" /> International cuisine</label><br />
        <label><input type="radio" name="q3" value="mountain" /> Comfort food</label><br />
        <label><input type="radio" name="q3" value="adventure" /> Local and exotic dishes</label><br />
      </div>

      <div className="question">
        <h3>4. What kind of scenery do you find most appealing?</h3>
        <label><input type="radio" name="q4" value="beach" /> Ocean views</label><br />
        <label><input type="radio" name="q4" value="city" /> Urban skylines</label><br />
        <label><input type="radio" name="q4" value="mountain" /> Mountains and forests</label><br />
        <label><input type="radio" name="q4" value="adventure" /> Diverse landscapes</label><br />
      </div>

      <button className="btn" onClick={findDestination}>Find My Destination</button>

      {result && <div className="result">{result}</div>}
    </div>
  );
};

export default DestinationPicker;
