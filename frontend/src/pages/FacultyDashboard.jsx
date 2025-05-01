import React from "react";
import FeedbackSummary from "../components/FeedbackSummary";


const FacultyDashboard = () => {
  const feedbackData = [
   
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Faculty Dashboard</h1>
      {feedbackData.map((data, index) => (
        <div key={index}>
          <FeedbackSummary feedbackData={data} />
          <FeedbackChart data={feedbackData} />
        </div>
      ))}
    </div>
  );
};

export default FacultyDashboard
