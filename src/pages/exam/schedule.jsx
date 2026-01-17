// src/pages/Schedule.jsx
import React from "react";

const Schedule = () => {
  const schedules = [
    {
      id: 1,
      exam: "Maths Test",
      date: "20 Jan 2026",
      time: "10:00 AM - 11:00 AM",
      class: "10th",
    },
    {
      id: 2,
      exam: "Science Exam",
      date: "22 Jan 2026",
      time: "12:00 PM - 1:30 PM",
      class: "9th",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">📅 Exam Schedule</h1>

      <div className="bg-white rounded-lg shadow border overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-3">Exam</th>
              <th className="p-3">Class</th>
              <th className="p-3">Date</th>
              <th className="p-3">Time</th>
            </tr>
          </thead>

          <tbody>
            {schedules.map((item) => (
              <tr key={item.id} className="border-t hover:bg-gray-50">
                <td className="p-3 font-medium">{item.exam}</td>
                <td className="p-3">{item.class}</td>
                <td className="p-3">{item.date}</td>
                <td className="p-3">{item.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Schedule;
