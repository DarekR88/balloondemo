import Image from "next/image";
import Link from "next/link";
import goodImg from "../../public/images/goodBalloon.jpg";
import cloudAIcon from "../../public/icons/cloudA.svg";
import cloudBIcon from "../../public/icons/cloudB.svg";
import balloonAIcon from "../../public/icons/balloonA.svg";
import balloonBIcon from "../../public/icons/balloonB.svg";
import balloonCIcon from "../../public/icons/balloonC.svg";
import balloonDIcon from "../../public/icons/balloonD.svg";

export default function Home() {
  return (
    <main className="w-full">
      <div className="relative flex bg-[#E9FBFF] lg:flex-row flex-col w-full lg:h-[500px] lg:overflow-hidden">
        <div className="flex lg:w-1/2 justify-center items-center overflow-hidden">
          <div className="relative z-50 overflow-hidden border-l-8 border-b-8 border-t-2 border-r-2 shadow-lg border-cEight rounded-md bg-[#FFD9FF] lg:rotate-[-8deg]">
            <div className="flex overflow-hidden rounded-md p-7">
              <Image src={goodImg} alt="" height={300} width={500} />
            </div>
          </div>
        </div>
        <div className="relative flex flex-col z-40 lg:mt-0 mt-5 gap-8 lg:w-1/3 justify-center items-center w-full">
          <h1 className="font-Dancing z-50 text-7xl">Let&#39;s</h1>
          <h1 className="text-9xl z-50 font-black font-Chewy">
            <span className="text-cBOne">P</span>
            <span className="text-cBTwo">A</span>
            <span className="text-cBThree">R</span>
            <span className="text-cBFour">T</span>
            <span className="text-cBFive">Y</span>
            <span className="text-cBSix">!</span>
          </h1>
          <Link
            href={"/booking"}
            className="p-3 z-50 text-3xl font-Tilt font-bold text-white bg-cBSeven rounded-full"
          >
            Book Your Balloons!
          </Link>
          <div className="absolute z-10 top-[5px] right-[0px] lg:right-[-10px] w-[100px]">
            <Image src={balloonCIcon} alt="" height={100} width={100} />
          </div>
          <div className="absolute z-10 top-[5px] left-[0px] top-[30px] lg:top-[50px] w-[100px]">
            <Image src={balloonDIcon} alt="" height={100} width={100} />
          </div>
          <div className="absolute z-10 bottom-[0px] lg:bottom-[100px] left-[0px] w-[100px]">
            <Image src={balloonAIcon} alt="" height={100} width={100} />
          </div>
          <div className="absolute z-20 bottom-[5px] right-[0px] w-[100px]">
            <Image src={balloonBIcon} alt="" height={100} width={100} />
          </div>

          <div className="absolute z-10 top-[20px] right-[100px] w-[200px]">
            <Image src={cloudAIcon} alt="" height={100} width={100} />
          </div>
          <div className="absolute z-10 bottom-[20px] right-[10px] lg:right-[-60px] w-[200px]">
            <Image src={cloudBIcon} alt="" height={100} width={100} />
          </div>
          <div className="absolute z-10 bottom-[20px] left-[100px] w-[200px]">
            <Image src={cloudAIcon} alt="" height={100} width={100} />
          </div>
        </div>

        <div className="absolute z-10 lg:bottom-[-100px] bottom-[200px] left-[-100px] h-[400px] w-[400px] bg-cOne rounded-full"></div>
        <div className="absolute z-10 lg:bottom-[-100px] bottom-[200px] left-[-100px] h-[350px] w-[350px] bg-cTwo rounded-full"></div>
        <div className="absolute z-10 lg:bottom-[-100px] bottom-[200px] left-[-100px] h-[300px] w-[300px] bg-cThree rounded-full"></div>
        <div className="absolute z-10 lg:bottom-[-100px] bottom-[200px] left-[-100px] h-[250px] w-[250px] bg-cFour rounded-full"></div>
        <div className="absolute z-10 lg:bottom-[-100px] bottom-[200px] left-[-100px] h-[200px] w-[200px] bg-cFive rounded-full"></div>
      </div>
      <div className="relative z-50 bg-white lg:h-[500px]">
        <div className="flex justify-center gap-10 lg:h-[300px] items-center text-white flex-col lg:flex-row max-w-screen mx-5 lg:mx-20 lg:gap-10 mt-[75px] m-auto">
          <div className="flex flex-col lg:py-0 py-7 gap-10 lg:h-full justify-center items-center bg-cBEight rounded-lg lg:w-1/4 w-full">
            <h1 className="text-7xl font-Dancing">Book Now!</h1>
            <Link
              href={"/contact"}
              className="p-3 font-Tilt text-black bg-white rounded-full"
            >
              Schedule Today!
            </Link>
          </div>
          <div className="flex flex-col lg:py-0 py-7 gap-10 lg:h-full justify-center items-center bg-cBFive rounded-lg lg:w-1/4 w-full">
            <h1 className="text-7xl font-Chewy font-black">Gallery</h1>
            <Link
              href={"/contact"}
              className="p-3 font-Tilt text-black bg-white rounded-full"
            >
              Balloon Magic!
            </Link>
          </div>
          <div className="flex flex-col lg:py-0 py-7 gap-10 lg:h-full justify-center items-center bg-cBThree rounded-lg lg:w-1/4 w-full">
            <h1 className="text-7xl font-extrabold font-Tilt">Sale!</h1>
            <Link
              href={"/contact"}
              className="p-3 font-Tilt text-black bg-white rounded-full"
            >
              Get Deals!
            </Link>
          </div>
          <div className="flex flex-col lg:py-0 py-7 gap-10 lg:h-full justify-center items-center bg-cBSeven rounded-lg lg:w-1/4 w-full">
            <h1 className="text-5xl font-Dancing">Party Planning</h1>
            <Link
              href={"/contact"}
              className="p-3 font-Tilt text-black bg-white rounded-full"
            >
              Let&#39;s Boogie!
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
