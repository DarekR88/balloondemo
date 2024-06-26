"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import MailIcon from "../../public/icons/mail_icon.svg";
import XIcon from "../../public/icons/twitter_icon.svg";
import FacebookIcon from "../../public/icons/facebook-svgrepo-com.svg";
import InstaIcon from "../../public/icons/instagram-svgrepo-com.svg";
import TiktokIcon from "../../public/icons/tiktok-logo-4512.svg";
import PhoneSvg from "../../public/icons/phone-svgrepo-com.svg";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`fixed flex flex-col w-screen h-screen bg-white z-50 text-center pt-20 gap-8 ${
          isOpen
            ? "transition ease-in-out translate-y-0 duration-500"
            : "transition ease-in-out -translate-y-full duration-500"
        }`}
      >
        <Link onClick={handleClick} className="text-3xl" href="/">
          Home
        </Link>
        {/* <Link onClick={handleClick} className="text-3xl" href="/howitworks">
          How it Works
        </Link> */}
        <Link onClick={handleClick} className="text-3xl" href="/services">
          Services
        </Link>
        {/* <Link onClick={handleClick} className="text-3xl" href="/programs">
          Programs
        </Link> */}
        {/* <Link onClick={handleClick} className="text-3xl" href="/nutrition">
          Nutrition
        </Link> */}
        {/* <Link onClick={handleClick} className="text-3xl" href="/testimonials">
          Testimonials
        </Link> */}
        <Link onClick={handleClick} className="text-3xl" href="/contact">
          Contact
        </Link>
        {/* <Link onClick={handleClick} className="text-3xl" href="/about">
          About
        </Link> */}
      </div>
      <div className="flex flex-col justify-center items-center h-[40px] bg-cBOne">
        <p className="text-white font-Tilt text-xl font-bold">25&#37; OFF Summer Sale 25&#37;</p>
      </div>
      <div className="flex flex-col justify-center items-center h-[175px]">
        <p className="font-black font-Chewy text-7xl lg:text-8xl">
          <span className="text-cBOne">B</span>
          <span className="text-cBTwo">A</span>
          <span className="text-cBThree">L</span>
          <span className="text-cBFour">L</span>
          <span className="text-cBFive">O</span>
          <span className="text-cBSix">O</span>
          <span className="text-cBSeven">N</span>
          <span className="text-cBEight">S</span>
        </p>
        <h1 className="font-Dancing text-5xl">Studio</h1>
      </div>
      <header className="relative bg-cSeven text-cBSeven font-Tilt font-bold flex flex-wrap gap-5 justify-center items-center w-screen lg:flex-row lg:justify-between lg:px-20 h-24 lg:h-12">
        {/* <Link href={"/"} className="font-Anton flex flex-col tracking-widest text-xl z-0 px-3">
          <h1 className="lg:text-7xl text-2xl">Look Sharp</h1>
          <p className="text-base text-right">Men's Barber</p>
          
        </Link> */}
        {/* <a
          href="tel:408-761-4606"
          target="_blank"
          rel="noreferrer noopener"
          className="lg:hidden mt-[-10px]"
        >
          <Image src={PhoneSvg} alt="pfp" width={23} />
          
        </a> */}
        <a
          href="tel:408-761-4606"
          target="_blank"
          rel="noreferrer noopener"
          className="hidden lg:inline lg:flex"
        >
          <Image src={PhoneSvg} alt="pfp" width={23} />
          <span className="pl-1">Appointments</span>
        </a>

        <div className="hidden lg:flex gap-6">
          <Link className="text-xl relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:rounded-full after:bg-cBSeven after:w-full after:scale-x-0 after:hover:scale-x-100 after:focus:scale-x-100 after:transition after:duration-300 after:origin-center" href="/">
            Home
          </Link>
          <Link className="text-xl relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:rounded-full after:bg-cBSeven after:w-full after:scale-x-0 after:hover:scale-x-100 after:focus:scale-x-100 after:transition after:duration-300 after:origin-center" href="/services">
            Services
          </Link>
          <Link className="text-xl relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:rounded-full after:bg-cBSeven after:w-full after:scale-x-0 after:hover:scale-x-100 after:focus:scale-x-100 after:transition after:duration-300 after:origin-center" href="/contact">
            Contact
          </Link>
          <Link className="text-xl relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:rounded-full after:bg-cBSeven after:w-full after:scale-x-0 after:hover:scale-x-100 after:focus:scale-x-100 after:transition after:duration-300 after:origin-center" href="/about">
            About
          </Link>
        </div>
        <div className="flex gap-4 px-2 z-0">
          <a
            href="mailto:darekradke2@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image src={InstaIcon} alt="pfp" width={27} />
          </a>
          <a
            href="mailto:darekradke2@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image src={FacebookIcon} alt="pfp" width={25} />
          </a>
          {/* <a
            href="mailto:darekradke2@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image src={XIcon} alt="pfp" width={23} />
          </a> */}
          {/* <a
            href="mailto:darekradke2@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image src={TiktokIcon} alt="pfp" width={25} />
          </a> */}
        </div>
        <button
          onClick={handleClick}
          className="inline flex flex-col justify-center items-center z-50 lg:hidden"
        >
          <span
            className={`bg-black block transition-all duration-300 ease-out 
                    h-1 w-8 rounded-sm ${
                      isOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1.5"
                    }`}
          ></span>
          <span
            className={`bg-black block transition-all duration-300 ease-out 
                    h-1 w-8 rounded-sm my-0.5 ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
          ></span>
          <span
            className={`bg-black block transition-all duration-300 ease-out 
                    h-1 w-8 rounded-sm ${
                      isOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1.5"
                    }`}
          ></span>
        </button>
      </header>
    </>
  );
}
