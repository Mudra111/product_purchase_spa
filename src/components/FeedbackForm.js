import React, { useState } from "react";
import "./feedbackForm.css";
import Rating from "./Rating";

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState({ comment: "", rating: 0 });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Feedback submitted");
  };

  return (
    <form onSubmit={handleSubmit} className="feedbackForm">
      <div className="divFeedbackForm">
        <label htmlFor="feedback">Feedback:</label>
        <textarea
          id="feedback"
          placeholder="Your feedback"
          value={feedback.comment}
          required
          onChange={(e) =>
            setFeedback({ ...feedback, comment: e.target.value })
          }
        />
      </div>
      <div className="divFeedbackForm">
        <label htmlFor="number">Give rating:</label>
        <Rating />
        {/* <input
          id="number"
          type="tel"
          placeholder="Enter your contact number"
          value={feedback.rating}
          onChange={(e) => setFeedback({ ...feedback, rating: e.target.value })}
        /> */}
      </div>
      <button type="submit" className="submitBtnfeedbackForm">
        Submit
      </button>
    </form>
  );
};

export default FeedbackForm;
