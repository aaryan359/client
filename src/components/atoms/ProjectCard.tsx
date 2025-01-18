
function ProjectCard() {
  return (
    <div className="w-[300px] h-[500px] p-20 bg-cover bg-center rounded-lg shadow-lg relative overflow-hidden" style={{ backgroundImage: "url('../../assets/Lampungbrand.png')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/90"></div>

      {/* Content */}
      <div className="absolute bottom-6 left-4 space-y-3 text-white">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <div className="bg-[#FFA500] h-[60px] w-[60px] flex items-center justify-center rounded-lg">
            <img src="/path-to-logo.png" alt="Lampung Logo" className="h-[40px] w-[40px]" />
          </div>
          <span className="text-lg font-bold">Lampung</span>
        </div>

        {/* Title and Description */}
        
        <h3 className="text-2xl font-bold">Brand Logo</h3>
        <p className="text-sm text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        {/* Arrow Button */}
        <button className="bg-white text-black h-10 w-10 flex items-center justify-center rounded-full shadow-md hover:scale-105 transition transform">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
