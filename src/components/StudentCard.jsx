import React from "react";

function StudentCard({ student }) {
  return (
    <div className="student-card">
      <img
        src={student.photo}
        alt={student.name}
        className="student-photo"
      />

      <h3>{student.name}</h3>

      <p>
        <strong>Roll Number:</strong> {student.roll}
      </p>

      <p>
        <strong>Department:</strong> {student.department}
      </p>

      <p>
        <strong>Semester:</strong> {student.semester}
      </p>

      <p>
        <strong>CGPA:</strong> {student.cgpa}
      </p>
    </div>
  );
}

export default StudentCard;