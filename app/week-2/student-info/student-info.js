import Link from "next/link";
import React from "react";


export default function StudentInfo() {
  return (
    <div className="bg-[#f9f9f9] border max-w-[400px] mx-auto my-5 p-5 rounded-lg border-solid border-[#ddd]">
      <span className="text-[#555] font-bold mb-2.5">Name: <em>Mohammad Sameer Malek</em></span>
      <div className="mt-5">
        <span className="font-bold text-[#555]">My GitHub Repository:</span><br />
        <Link href="https://github.com/SameerMalek/cprg306-assignments" className="inline-block text-[#1a73e8] no-underline font-bold mt-[5px] hover:underline hover:text-[rgb(87,224,87)]">
          Click Here
          </Link>
      </div>
    </div>
  );
}
