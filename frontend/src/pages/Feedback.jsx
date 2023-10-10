import React from "react";
import "../styles/Feedback.scss";

const Feedback = () => {

  const onSubmit = (event) => {
    event.preventDefault();
    alert("Thank you for the feedback.");
    window.location.reload(true);
  };

  return (
    <div className="feedback">
      <div className="feedback-container">
        <h1>Your feedback is important to us</h1>
        <p>If your experience was not up to the usual Charcoal standard, please leave a comment below so we can address it.</p>
        <h3>A few details about yourself</h3>
        <form className="feedback-form" onSubmit={onSubmit}>
          <input type="text" name="fullName" placeholder="YOUR FIRST AND LAST NAME" required />
          <input type="text" name="email" placeholder="EMAIL ADDRESS" required />
          <textarea className="feedback-textarea" type="text" placeholder="ENTER YOUR COMMENTS" />
          <button>SEND FEEDBACK</button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;