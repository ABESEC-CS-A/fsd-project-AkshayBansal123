import React from "react";

const FeedbackSummary = ({ feedbackData }) => {
  return (
    <div className="border p-4 rounded shadow-md">
      <h3 className="text-lg font-semibold mb-2">Feedback Summary</h3>
      <div>
        <p><strong>Clarity of Explanation:</strong> {feedbackData.clarity}</p>
        <p><strong>Engagement:</strong> {feedbackData.engagement}</p>
        <p><strong>Punctuality:</strong> {feedbackData.punctuality}</p>
      </div>
    </div>
  );
};

export default FeedbackSummary;
