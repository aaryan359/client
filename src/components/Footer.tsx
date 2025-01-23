function Footer() {
  return (
    <div className="bg-white dark:bg-[#10101E] text-black dark:text-white flex flex-col items-center justify-center space-y-10 p-10 relative">
      {/* Top Section */}
      <div className="text-center">
        <p className="text-lg font-semibold">Have a Project?</p>
        <p className="text-2xl font-bold">Let’s Work Together</p>
      </div>

      {/* Email Section */}
      <div className="w-full h-[180px] bg-[#DFFF00] dark:bg-[#DFFF00] text-black dark:text-black rounded-tl-[100px] rounded-tr-[100px] p-8 relative">
        <div className="flex items-center justify-between">
          <a
            href="mailto:aaryanmeena96@gmail.com"
            className="text-xl font-bold underline flex items-center"
          >
            aaryanmeena96@gmail.com
            <span className="ml-2 bg-white dark:bg-black text-black dark:text-white p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75L21 12m0 0l-3.75 5.25M21 12H3"
                />
              </svg>
            </span>
          </a>
        </div>

        {/* Social Media Links */}
        <div className="mt-6 flex justify-start gap-12 text-sm text-black dark:text-black">
          <a href="/" className="hover:underline">
            Twitter
          </a>
          <a href="/" className="hover:underline">
            Whatsapp
          </a>
          <a href="/" className="hover:underline">
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/aryan-meena-899b80301/"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
