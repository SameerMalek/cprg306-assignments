import StudentInfo from "./student-info/student-info.js";

export default function Page() {
    return (
      <main className="m-0 p-0 font-sans text-center">
        <h1 className="text-[32px] text-white mb-5 pt-[250px]">Welcome to My Page!</h1>
        <StudentInfo/>
      </main>
    );
  }