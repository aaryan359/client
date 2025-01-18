import Button from "./atoms/Button.js";

function Hero() {
  return (
    <>
      <div className="flex flex-col md:flex-row p-5 justify-around bg-white dark:bg-[#10101E] ">
        {/* Left Section */}
        <div className="text-black dark:text-white space-y-6 flex flex-col items-center md:items-start">
          <div className="text-[68px] font-bold leading-tight w-[100%] md:w-[451px] h-auto">
            <span className="block">Designing</span>
            <span className="inline-block text-yellow-500 dark:text-yellow-400">&</span>
            <span className="inline-block">Developing</span>
            <span className="block">Things</span>
          </div>

          <div className="flex flex-row gap-10 items-center md:items-start space-y-2">
            <div className="h-[66px]">
              <Button
                text="Get in Touch"
                onClick={() => alert("Button clicked!")}
              />
            </div>
            <span className="text-blue-600 dark:text-blue-400 font-medium text-lg">
              Available for Hire
            </span>
          </div>
        </div>

        {/* Right Section */}
        <div className="mt-6 md:mt-0 flex justify-center">
          <div>
            <div className="flex gap-1 mb-[8px]">
              <div className="border-2 rounded-[41px] border-yellow-400 bg-yellow-400 dark:border-[#DBFF00] dark:bg-[#DBFF00] h-[184px] w-[82px]"></div>
              <div className="border-4 border-yellow-400 dark:border-[#DBFF00] h-[184px] w-[381px] rounded-tr-[92.03px] rounded-bl-[92.03px]"></div>
            </div>
            <div className="border-2 border-yellow-400 bg-yellow-400 dark:border-[#DBFF00] dark:bg-[#DBFF00] h-[184px] w-[473px] rounded-tr-[92.03px] rounded-bl-[92.03px]"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
