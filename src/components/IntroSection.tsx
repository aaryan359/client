import { img1,img2,img3 } from "../utils";

function IntroSection() {
    return (
        <div className="bg-[#ffff] dark:bg-[#10101E] h-screen flex justify-between items-center px-20">
            {/* Left Side (Main content) */}
            <div className="flex flex-col items-start justify-center w-1/2">
                {/* Introduction Section */}
                <div className="ml-20 text-left text-[#979797] dark:text-[#B0B0B0] text-[16.04px] font-bold leading-[19.97px] tracking-[-0.025em]">
                    <p>Introduction</p>
                </div>

                <div className="ml-20 text-black dark:text-[#E0E0E0] text-[42.91px] font-medium leading-[53.4px] tracking-[-0.025em] text-left">
                    <p>
                        Hello!, I’m
                        <span className="ml-2 font-extrabold text-[42.91px] leading-[53.4px] tracking-[-0.025em]">
                            Virdio Samuel
                        </span>
                    </p>

                    <div className="underline text-[42.91px] font-medium leading-[53.41px] tracking-[-0.025em] text-left w-[320px]">
                        Programmer
                    </div>

                    <div className="text-[42.91px] font-medium leading-[53.41px] tracking-[-0.025em] text-left w-[385px]">
                        based in Indonesia
                    </div>

                    <div className="text-[28.24px] font-normal leading-[33.24px] text-left w-[600px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ligula eget odio eleifend pretium sed sed urna. Sed consequat elementum dui eu viverra.
                    </div>
                </div>
            </div>

            {/* Right Side (Content div with text) */}
            <div className="w-1/2 flex justify-center items-center">
                <div className="relative w-[600px] h-[450px] flex justify-center items-center opacity-100 space-x-4">
                    <img
                        src={img1}
                        alt="Image 1"
                        className="w-[180px] h-auto object-contain"
                    />

                    {/* Second Image */}
                    <img
                        src={img2}
                        alt="Image 2"
                        className="w-[180px] h-auto object-contain"
                    />

                    {/* Third Image */}
                    <img
                        src={img3}
                        alt="Image 3"
                        className="w-[180px] h-auto object-contain"
                    />
                </div>
            </div>

        </div>
    );
}

export default IntroSection;
