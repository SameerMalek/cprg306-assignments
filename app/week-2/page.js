import StudentInfo from "./student-info/student-info.js";
import "./page.css"

export default function Page() {
    return (
      <main>
        <h1>Welcome to My Page!</h1>
        <StudentInfo/>
      </main>
    );
  }