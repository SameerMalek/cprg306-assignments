import Link from "next/link";
import React from "react";
import "./student-info.css";

export default function StudentInfo() {
  return (
    <div className="studentInfo">
      <span>Name: <em>Mohammad Sameer Malek</em></span>
      <div className="repo">
        <span>My GitHub Repository:</span><br />
        <Link href="https://github.com/SameerMalek/Node-Js-Server">Click Here</Link>
      </div>
    </div>
  );
}
