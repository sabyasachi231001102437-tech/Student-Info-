import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StudentList from "./components/StudentList";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    {
      name: "Sabyasachi Giri",
      roll: "101",
      department: "Computer Science",
      semester: "6th",
      cgpa: 8.7,
      photo: "https://i.pravatar.cc/150?img=12"
    },
    {
      name: "Rahul Das",
      roll: "102",
      department: "Information Technology",
      semester: "6th",
      cgpa: 9.1,
      photo: "https://i.pravatar.cc/150?img=11"
    },
    {
      name: "Priya Sharma",
      roll: "103",
      department: "Computer Science",
      semester: "6th",
      cgpa: 8.4,
      photo: "https://i.pravatar.cc/150?img=47"
    },
    {
      name: "Arjun Roy",
      roll: "104",
      department: "Electronics",
      semester: "6th",
      cgpa: 7.9,
      photo: "https://i.pravatar.cc/150?img=13"
    }
  ]);

  const sortByCGPA = () => {
    const sortedStudents = [...students].sort(
      (a, b) => b.cgpa - a.cgpa
    );

    setStudents(sortedStudents);
  };

  return (
    <div className="app">
      <Header />

      <main>
        <h2>Student Information Portal</h2>

        <button className="sort-btn" onClick={sortByCGPA}>
          Sort by CGPA
        </button>

        <StudentList students={students} />
      </main>

      <Footer />
    </div>
  );
}

export default App;