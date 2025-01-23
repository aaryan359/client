function PastWork() {
  return (
    <div className="bg-[#ffff] dark:bg-[#10101E] h-screen flex flex-col justify-center items-center px-20">
      {/* Upper section with two divs side by side */}
      <div className="flex justify-evenly items-start w-full mb-10">
        <div className="text-black dark:text-white text-left text-[50px] font-semibold leading-[48.24px] tracking-[0.010em] w-[373px] h-[145px] opacity-100">
          Clients & Companies I've worked with
        </div>

        <div className="text-[#949686] dark:text-[#B0B0B0] text-left text-[28px] font-light leading-[33.6px] tracking-[0.010em] w-[561px] h-[136px] opacity-100">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ligula eget odio eleifend pretium sed sed urna. Sed consequat elementum dui eu viverra.
        </div>
      </div>

      {/* Quote section below */}
      <div className="relative bg-[#ffff] dark:bg-[#10101E] opacity-100 mt-10 p-10 w-full">
        {/* Quote Heading */}
        <div className="w-full text-left pl-10">
          <p className="text-black dark:text-white text-[60px] font-semibold italic leading-[52.73px] tracking-[-0.04em]">
            Good design is a language, not a style
          </p>
        </div>

        {/* Author's name section */}
        <div className="w-full text-left mt-5 pl-10">
          <p className="text-[#C7C7C7] dark:text-[#808080] text-[26px] font-medium leading-[31.65px] tracking-[-0.025em]">
            - Massimo Vignelli
          </p>
        </div>
      </div>
    </div>
  );
}

export default PastWork;
