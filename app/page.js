import Link from "next/link";
import "./home.css";

export default function Home() {
  return (
    <div className="root">
      <div className="heading">
      CPRG 306: Web Development 2 - Assignments
      </div>
      <div className="assignment">
        <Link href="/week-2">Assignment-2</Link>
      </div>
    </div>
  );
}
