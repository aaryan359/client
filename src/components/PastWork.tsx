function PastWork() {
  return (
    <div className="bg-[#ffff] dark:bg-[#10101E] h-screen flex flex-col justify-center items-center px-5 md:px-20">
      {/* Heading Section */}
      <div className="flex flex-col md:flex-row justify-evenly items-center md:items-start w-full mb-10 space-y-5 md:space-y-0">
        <div className="text-black dark:text-white text-left text-[30px] md:text-[50px] font-semibold leading-[36px] md:leading-[48.24px] tracking-[0.010em] md:w-[373px] w-full">
          Clients & Companies I've worked with
        </div>

        <div className="text-[#949686] dark:text-[#B0B0B0] text-left text-[18px] md:text-[28px] font-light leading-[24px] md:leading-[33.6px] tracking-[0.010em] md:w-[561px] w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ligula eget odio eleifend pretium sed sed urna. Sed consequat elementum dui eu viverra.
        </div>
      </div>

      {/* Quote Section */}
      <div className="relative bg-[#ffff] dark:bg-[#10101E] opacity-100 mt-10 p-5 md:p-10 w-full">
        {/* Quote Heading */}
        <div className="w-full text-left">
          <p className="text-black dark:text-white text-[30px] md:text-[60px] font-semibold italic leading-[36px] md:leading-[52.73px] tracking-[-0.04em]">
            Good design is a language, not a style
          </p>
        </div>

        {/* Author's Name */}
        <div className="w-full text-left mt-5">
          <p className="text-[#C7C7C7] dark:text-[#808080] text-[16px] md:text-[26px] font-medium leading-[20px] md:leading-[31.65px] tracking-[-0.025em]">
            - Massimo Vignelli
          </p>
        </div>
      </div>
    </div>
  );
}

export default PastWork;
