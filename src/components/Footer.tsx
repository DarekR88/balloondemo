"use client";

import Link from "next/link";

export function Footer() {
  return (
    <>
      <div className="bg-cSeven text-cBSeven font-Chewy border-black relative bottom-0 flex flex-col-reverse justify-center items-center w-screen py-6 lg:flex-row lg:px-32 lg:justify-between lg:h-24">
        <p>
          <span>&copy;</span> 2023 Venci
        </p>
        <Link href={"/"} className="font-Anton text-2xl">
          <h1 className="text-button-primary text-4xl">Balloons</h1>Studio
        </Link>
        <Link href={"/contact"} className="text-xl">
          Balloon Magic
        </Link>
      </div>
    </>
  );
}
