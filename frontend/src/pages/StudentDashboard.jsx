import React from "react";
import FeedbackForm from "../components/FeedbackForm";

const StudentDashboard = () => {
  const facultyList = [
    { name: "Prof. John Doe", courseId: "CS101" },
    { name: "Prof. Jane Smith", courseId: "ENG102" },
  ];

  const handleFeedbackSubmit = (feedback) => {
    console.log("Feedback Submitted:", feedback);
    // Call API to submit feedback
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Student Dashboard</h1>
      {facultyList.map((faculty) => (
        <div key={faculty.courseId} className="mb-4">
          <FeedbackForm
            facultyName={faculty.name}
            courseId={faculty.courseId}
            onSubmit={handleFeedbackSubmit}
          />
        </div>
      ))}
    </div>
  );
};

export default StudentDashboard;
