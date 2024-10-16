"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-dvh w-full flex justify-center flex-col items-center bg-background text-foreground ">
      <h2>404 - Not Found</h2>
      <p>
        Could not find requested resource{" "}
        <Link className="text-blue-700" href="/">
          Return Home
        </Link>
      </p>
    </div>
  );
}
