import Link from "next/link";

export default function Home() {
  return (
    <div
      className="flex flex-col items-center bg-black min-h-screen p-5 font-sans">
      <div className="text-2xl font-bold text-white mt-10 mb-5">
        CPRG 306: Web Development 2 - Assignments
      </div>
      <div className="mx-0 my-2.5">
        <div className="no-underline text-#0070f3 text-lg transition-[color] duration-0.3s hover:underline hover:text-[rgb(87,224,87)]">
          <Link href="/week-2">Assignment-2</Link>
        </div>
        <div className="no-underline text-#0070f3 text-lg transition-[color] duration-0.3s hover:underline hover:text-[rgb(87,224,87)]">
          <Link href="/week-3">Assignment-3</Link>
        </div>
        <div className="no-underline text-#0070f3 text-lg transition-[color] duration-0.3s hover:underline hover:text-[rgb(87,224,87)]">
          <Link href="/week-4">Assignment-4</Link>
        </div>
        <div className="no-underline text-#0070f3 text-lg transition-[color] duration-0.3s hover:underline hover:text-[rgb(87,224,87)]">
          <Link href="/week-5">Assignment-5</Link>
        </div>
      </div>
    </div>
  );
}
