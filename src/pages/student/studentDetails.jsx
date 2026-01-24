import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import StudentEntry from "../student/studentEntry"; // 👈 import from another page

export default function StudentDetails() {
  const [showModal, setShowModal] = useState(false);
  const [students, setStudents] = useState([
    {
      name: "Amit Kumar",
      roll: "101",
      class: "10",
      status: "Active",
      updated: "2 hours ago",
      image: "https://i.pravatar.cc/150?img=12",
    },
    {
      name: "Priya Sharma",
      roll: "102",
      class: "9",
      status: "Active",
      updated: "5 hours ago",
      image: "https://i.pravatar.cc/150?img=32",
    },
  ]);

  const addStudent = (student) => {
    setStudents([{ ...student, updated: "Just now" }, ...students]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b132b] to-[#1c2541] text-white p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Student Details</h2>
        <Button onClick={() => setShowModal(true)}>
          + Add New Student
        </Button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl shadow-lg bg-[#0b132b]">
        <table className="w-full">
          <thead className="bg-[#1c2541]">
            <tr className="text-gray-300 text-left">
              <th className="p-4">Photo</th>
              <th className="p-4">Student</th>
              <th className="p-4">Roll</th>
              <th className="p-4">Class</th>
              <th className="p-4">Status</th>
              <th className="p-4">Updated</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s, i) => (
              <tr key={i} className="border-b border-gray-700 hover:bg-[#1c2541]">
                <td className="p-4">
                  <img src={s.image} className="w-10 h-10 rounded-full" />
                </td>
                <td className="p-4 font-semibold">{s.name}</td>
                <td className="p-4">{s.roll}</td>
                <td className="p-4">{s.class}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      s.status === "Active" ? "bg-green-600" : "bg-red-600"
                    }`}
                  >
                    {s.status}
                  </span>
                </td>
                <td className="p-4 text-gray-400">{s.updated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.85, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.85, y: 40 }}
              className="relative w-[95%] max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-xl"
            >
              {/* Close */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-xl font-bold text-gray-600 hover:text-red-600"
              >
                ✕
              </button>

              {/* Student Entry Component */}
              <StudentEntry
                onSave={(data) => {
                  addStudent(data);
                  setShowModal(false);
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
