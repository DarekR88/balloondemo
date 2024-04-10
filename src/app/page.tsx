import Image from "next/image";
import Link from "next/link";
import goodImg from "../../public/images/goodBalloon.jpg";

export default function Home() {
  return (
    <main className="w-full">
      <div className="flex lg:flex-row flex-col w-full lg:h-[500px] lg:overflow-hidden">
        <div className="flex lg:w-1/2 justify-center items-center overflow-hidden">
          <div className="relative z-50 overflow-hidden border-l-8 border-b-8 border-t-2 border-r-2 shadow-lg border-cEight rounded-md bg-[#FFD9FF] lg:rotate-[-8deg]">
            <div className="flex overflow-hidden rounded-md p-7">
              <Image src={goodImg} alt="" height={300} width={500} />
            </div>
          </div>
        </div>
        <div className="relative flex flex-col z-40 lg:mt-0 mt-5 gap-8 lg:w-1/3 justify-center items-center w-full">
          <h1 className="font-Dancing text-7xl">Let&#39;s</h1>
          <h1 className="text-9xl font-black font-Chewy">
            <span className="text-cBOne">P</span>
            <span className="text-cBTwo">A</span>
            <span className="text-cBThree">R</span>
            <span className="text-cBFour">T</span>
            <span className="text-cBFive">Y</span>
            <span className="text-cBSix">!</span>
          </h1>
          <Link
            href={"/booking"}
            className="p-3 text-3xl font-Tilt font-bold text-white bg-cBSeven rounded-full"
          >
            Book Your Balloons!
          </Link>
          <div className="absolute top-[20px] right-[20px] w-[100px]">
            <svg
              fill="inherit"
              version="1.1"
              id="_x32_"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
            >
              <style>{`.st0{fill:#F00314;}`}</style>
              <rect
                x="247.027"
                y="398.668"
                className="st0"
                width="17.946"
                height="113.332"
              />
              <path
                className="st0"
                d="M256.007,0C170.213,0,102.569,65.824,106.25,169.118c3.843,107.508,80.015,174.195,130.395,188.945l-14.211,26.225h67.132l-14.204-26.225c50.373-14.744,126.559-81.424,130.388-188.945C409.444,65.824,341.786,0,256.007,0zM221.274,84.154c-6.121,3.573-11.69,7.928-16.598,13.018c-10.813,11.218-18.444,25.49-22.597,42.856c-1.767,7.416-9.209,11.994-16.625,10.227c-7.416-1.766-12-9.216-10.233-16.631c5.11-21.526,15.047-40.577,29.581-55.632c6.688-6.93,14.292-12.863,22.558-17.69c6.593-3.842,15.047-1.618,18.89,4.968C230.092,71.858,227.867,80.312,221.274,84.154z"
              />
            </svg>
          </div>
        </div>
        <div className="absolute w-[100px]">
          <svg
            version="1.1"
            id="_x32_"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
          >
            <style>{`.st0{fill:#BDB2FF;}`}</style>
            <rect
              x="247.027"
              y="398.668"
              className="st0"
              width="17.946"
              height="113.332"
            />
            <path
              className="st0"
              d="M256.007,0C170.213,0,102.569,65.824,106.25,169.118c3.843,107.508,80.015,174.195,130.395,188.945l-14.211,26.225h67.132l-14.204-26.225c50.373-14.744,126.559-81.424,130.388-188.945C409.444,65.824,341.786,0,256.007,0zM221.274,84.154c-6.121,3.573-11.69,7.928-16.598,13.018c-10.813,11.218-18.444,25.49-22.597,42.856c-1.767,7.416-9.209,11.994-16.625,10.227c-7.416-1.766-12-9.216-10.233-16.631c5.11-21.526,15.047-40.577,29.581-55.632c6.688-6.93,14.292-12.863,22.558-17.69c6.593-3.842,15.047-1.618,18.89,4.968C230.092,71.858,227.867,80.312,221.274,84.154z"
            />
          </svg>
        </div>
        <div className="absolute z-10 bottom-[-100px] left-[-100px] h-[400px] w-[400px] bg-cOne rounded-full"></div>
        <div className="absolute z-10 bottom-[-100px] left-[-100px] h-[350px] w-[350px] bg-cTwo rounded-full"></div>
        <div className="absolute z-10 bottom-[-100px] left-[-100px] h-[300px] w-[300px] bg-cThree rounded-full"></div>
        <div className="absolute z-10 bottom-[-100px] left-[-100px] h-[250px] w-[250px] bg-cFour rounded-full"></div>
        <div className="absolute z-10 bottom-[-100px] left-[-100px] h-[200px] w-[200px] bg-cFive rounded-full"></div>
      </div>
      <div className="relative z-20 bg-white h-[500px]"></div>
    </main>
  );
}
