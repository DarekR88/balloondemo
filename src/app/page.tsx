import Image from "next/image";
import Link from "next/link";
import goodImg from "../../public/images/goodBalloon.jpg";
import goldImg from "../../public/images/gold.jpeg";
import magentaImg from "../../public/images/magenta.jpg";
import lightBlueImg from "../../public/images/lightBlue.jpg";
import purpleImg from "../../public/images/purple.jpg";
import cloudAIcon from "../../public/icons/cloudA.svg";
import cloudBIcon from "../../public/icons/cloudB.svg";
import balloonAIcon from "../../public/icons/balloonA.svg";
import balloonBIcon from "../../public/icons/balloonB.svg";
import balloonCIcon from "../../public/icons/balloonC.svg";
import balloonDIcon from "../../public/icons/balloonD.svg";
import starIcon from "../../public/icons/star-svgrepo-com.svg";

export default function Home() {
  return (
    <main className="w-full">
      <div className="relative flex bg-[#E9FBFF] lg:flex-row flex-col w-full lg:h-[500px] lg:overflow-hidden">
        <div className="flex lg:w-1/2 justify-center items-center overflow-hidden">
          <div className="relative z-40 overflow-hidden border-l-8 border-b-8 border-t-2 border-r-2 shadow-lg border-cEight rounded-md bg-[#FFD9FF] lg:rotate-[-8deg]">
            <div className="flex overflow-hidden rounded-md p-7">
              <Image src={goodImg} alt="" height={300} width={500} />
            </div>
          </div>
        </div>
        <div className="relative flex flex-col z-40 lg:mt-0 mt-5 gap-8 lg:w-1/3 justify-center items-center w-full">
          <h1 className="font-Dancing z-40 text-7xl">Let&#39;s</h1>
          <h1 className="text-9xl z-40 font-black font-Chewy">
            <span className="text-cBOne">P</span>
            <span className="text-cBTwo">A</span>
            <span className="text-cBThree">R</span>
            <span className="text-cBFour">T</span>
            <span className="text-cBFive">Y</span>
            <span className="text-cBSix">!</span>
          </h1>
          <Link
            href={"/booking"}
            className="p-3 mb-10 z-40 text-3xl font-Tilt font-bold text-white bg-cBSeven rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110"
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
      <div className="relative mb-[50px] lg:mb-[0px] z-40 bg-white lg:h-[500px]">
        <div className="flex justify-center gap-10 lg:h-[400px] items-center text-white flex-col lg:flex-row max-w-screen mx-5 lg:mx-20 lg:gap-10 mt-[75px] m-auto">
          <div className="flex flex-col lg:py-0 py-7 gap-5 lg:h-full justify-center items-center bg-cBEight rounded-lg lg:w-1/4 w-full">
            <h1 className="text-6xl font-Dancing">Book Now!</h1>
            <div className="w-[200px] h-[200px] overflow-hidden">
              <Image src={magentaImg} alt="magenta" height={150} width={200} />
            </div>
            <Link
              href={"/contact"}
              className="p-3 font-Tilt text-black bg-white rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110"
            >
              Schedule Today!
            </Link>
          </div>
          <div className="flex flex-col lg:py-0 py-7 gap-5 lg:h-full justify-center items-center bg-cBFive rounded-lg lg:w-1/4 w-full">
            <h1 className="text-7xl font-Chewy font-black">Gallery</h1>
            <div className="w-[200px] h-[200px] overflow-hidden">
              <Image
                src={lightBlueImg}
                alt="magenta"
                height={150}
                width={200}
              />
            </div>
            <Link
              href={"/contact"}
              className="p-3 font-Tilt text-black bg-white rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110"
            >
              Balloon Magic!
            </Link>
          </div>
          <div className="flex flex-col lg:py-0 py-7 gap-5 lg:h-full justify-center items-center bg-cBThree rounded-lg lg:w-1/4 w-full">
            <h1 className="text-7xl font-extrabold font-Tilt">Sale!</h1>
            <div className="w-[200px] h-[200px] overflow-hidden">
              <Image src={goldImg} alt="magenta" height={150} width={200} />
            </div>
            <Link
              href={"/contact"}
              className="p-3 font-Tilt text-black bg-white rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110"
            >
              Get Deals!
            </Link>
          </div>
          <div className="flex flex-col lg:py-0 py-7 gap-5 lg:h-full justify-center items-center bg-cBSeven rounded-lg lg:w-1/4 w-full">
            <h1 className="text-5xl font-Dancing">Party Planning</h1>
            <div className="w-[200px] h-[200px] overflow-hidden">
              <Image src={purpleImg} alt="magenta" height={150} width={200} />
            </div>
            <Link
              href={"/contact"}
              className="p-3 font-Tilt text-black bg-white rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110"
            >
              Let&#39;s Boogie!
            </Link>
          </div>
        </div>
      </div>

      <div className="w-screen flex flex-col mb-[100px] pb-[50px] text-center justify-center bg-[#FFD4FF]">
        <h1 className="text-7xl flex flex-row mb-[20px] m-auto mt-[50px] font-Chewy font-extrabold">
          <span className="text-cBOne">R</span>
          <span className="text-cBTwo">E</span>
          <span className="text-cBEight">V</span>
          <span className="text-cBFour">I</span>
          <span className="text-cBFive">E</span>
          <span className="text-cBSix">W</span>
          <span className="text-cBSeven">S</span>
          <span>
            <Image src={balloonDIcon} alt="balloon" height={75} width={75} />
          </span>
        </h1>
        <div className="text-2xl font-Tilt text-cBSeven flex flex-col lg:flex-row gap-10 lg:gap-16 mx-10">
          <div className="flex flex-col w-full lg:w-1/3 p-5">
            <p className="mb-[10px] text-3xl font-bold">Party Masterpiece!</p>
            <p className="mb-[10px]">
              Everyone loved the balloon wall. It really added a cool element to
              the party. The company also provided loose balloons for kids to
              play with. All in all a really cool experience.
            </p>
            <p>-Michael Johnson</p>
            <div className="flex flex-row m-auto">
              <Image src={starIcon} alt="star" height={40} width={40} />
              <Image src={starIcon} alt="star" height={40} width={40} />
              <Image src={starIcon} alt="star" height={40} width={40} />
              <Image src={starIcon} alt="star" height={40} width={40} />
              <Image src={starIcon} alt="star" height={40} width={40} />
            </div>
          </div>
          <div className="flex flex-col w-full lg:w-1/3 p-5">
            <p className="mb-[10px] text-3xl font-bold">Party Masterpiece!</p>
            <p className="mb-[10px]">
              Everyone loved the balloon wall. It really added a cool element to
              the party. The company also provided loose balloons for kids to
              play with. All in all a really cool experience.
            </p>
            <p>-Michael Johnson</p>
            <div className="flex flex-row m-auto">
              <Image src={starIcon} alt="star" height={40} width={40} />
              <Image src={starIcon} alt="star" height={40} width={40} />
              <Image src={starIcon} alt="star" height={40} width={40} />
              <Image src={starIcon} alt="star" height={40} width={40} />
              <Image src={starIcon} alt="star" height={40} width={40} />
            </div>
          </div>
          <div className="flex flex-col w-full lg:w-1/3 p-5">
            <p className="mb-[10px] text-3xl font-bold">Party Masterpiece!</p>
            <p className="mb-[10px]">
              Everyone loved the balloon wall. It really added a cool element to
              the party. The company also provided loose balloons for kids to
              play with. All in all a really cool experience.
            </p>
            <p>-Michael Johnson</p>
            <div className="flex flex-row m-auto">
              <Image src={starIcon} alt="star" height={40} width={40} />
              <Image src={starIcon} alt="star" height={40} width={40} />
              <Image src={starIcon} alt="star" height={40} width={40} />
              <Image src={starIcon} alt="star" height={40} width={40} />
              <Image src={starIcon} alt="star" height={40} width={40} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
