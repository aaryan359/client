import { img1, img2, img3 } from "../utils";

function IntroSection() {
  return (
    <div className="bg-[#ffff] dark:bg-[#10101E] h-screen flex flex-col md:flex-row justify-between items-center px-5 md:px-20">
      {/* Left Side (Main content) */}
      <div className="flex flex-col items-start justify-center w-full md:w-1/2 mb-10 md:mb-0">
        {/* Introduction Section */}
        <div className="ml-5 md:ml-20 text-left text-[#979797] dark:text-[#B0B0B0] text-[14px] md:text-[16.04px] font-bold leading-[18px] md:leading-[19.97px] tracking-[-0.025em]">
          <p>Introduction</p>
        </div>

        <div className="ml-5 md:ml-20 text-black dark:text-[#E0E0E0] text-[32px] md:text-[42.91px] font-medium leading-[40px] md:leading-[53.4px] tracking-[-0.025em] text-left">
          <p>
            Hello!, I’m
            <span className="ml-2 font-extrabold text-[32px] md:text-[42.91px] leading-[40px] md:leading-[53.4px] tracking-[-0.025em]">
              Aaryan
            </span>
          </p>

          <div className="underline text-[32px] md:text-[42.91px] font-medium leading-[40px] md:leading-[53.41px] tracking-[-0.025em] text-left w-full md:w-[320px] mb-1">
            Programmer
          </div>
          <div className="text-[18px] md:text-[28.24px] font-normal leading-[28px] md:leading-[33.24px] text-left w-full md:w-[600px]">
          A web developer specializing in crafting responsive, user-friendly websites tailored to your needs. Let’s build something amazing together!
          </div>
        </div>
      </div>

      {/* Right Side (Images) */}
      <div className="w-full md:w-1/2 flex justify-center items-center relative h-[50vh] md:h-full">
        <div className="relative w-full h-full flex justify-center items-center opacity-100">
          {/* First Image */}
          <img
            src={img1}
            alt="Image 1"
            className="w-[180px] md:w-[285px] h-[150px] md:h-[204px] object-contain z-30 absolute top-[60%] md:top-[50%] left-[10%] md:left-[5%] transform scale-100 md:scale-125"
          />

          {/* Second Image */}
          <img
            src={img2}
            alt="Image 2"
            className="w-[250px] md:w-[407px] h-[150px] md:h-[219px] object-contain z-20 absolute top-[40%] md:top-[30%] right-5 md:right-10 transform scale-100 md:scale-125"
          />

          {/* Third Image */}
          <img
            src={img3}
            alt="Image 3"
            className="w-[250px] md:w-[430px] h-[100px] md:h-[115px] object-contain z-10 absolute bottom-10 md:bottom-60 right-0 transform rotate-90 scale-100 md:scale-125"
          />
        </div>
      </div>
    </div>
  );
}

export default IntroSection;
