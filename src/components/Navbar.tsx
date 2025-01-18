import React, { useState } from "react";
import Toggle from "react-toggle";
import "../index.css";
import "react-toggle/style.css"; // Import react-toggle styles

function Navbar() {
  const [activeTab, setActiveTab] = useState(""); 
  const [isDark, setIsDark] = useState(true); 

  return (
    <>
      <div
        className={`flex flex-row justify-between p-5 ${
          isDark ? "bg-[#10101E] text-white" : "bg-white text-black"
        } h-[92px] items-center transition-all duration-300`}
      >
        {/* Logo Section */}
        <div className="flex items-center justify-center h-full overflow-hidden">
          <div
            className={`${
              isDark ? "bg-[#DBFF00]" : "bg-[#DBFF00]"
            } px-[15px] ml-[80px] py-[9px] rounded-tr-[41px] rounded-bl-[41px] w-[88px] h-[31px] flex items-center justify-center`}
          >
            <span
              className={`text-center ${
                isDark ? "text-black" : "text-black"
              } font-bold text-2xl leading-none`}
            >
              logo
            </span>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="flex gap-8">
          <div
            onClick={() => setActiveTab("about")}
            className={`px-[12px] py-[4px] rounded-[41px] w-[120px] h-[36px] text-center font-semibold ${
              activeTab === "about"
                ? isDark
                  ? "bg-[#DBFF00] text-black"
                  : "bg-[#10101E] text-white"
                : ""
            } transition-all duration-150 cursor-pointer`}
          >
            <span>About</span>
          </div>
          <div
            onClick={() => setActiveTab("projects")}
            className={`px-[12px] py-[4px] rounded-[41px] w-[120px] h-[36px] text-center font-semibold ${
              activeTab === "projects"
                ? isDark
                  ? "bg-[#DBFF00] text-black"
                  : "bg-[#10101E] text-white"
                : ""
            } transition-all duration-150 cursor-pointer`}
          >
            <span>Projects</span>
          </div>
          <div
            onClick={() => setActiveTab("contact")}
            className={`px-[12px] py-[4px] rounded-[41px] w-[120px] h-[36px] text-center font-semibold ${
              activeTab === "contact"
                ? isDark
                  ? "bg-[#DBFF00] text-black"
                  : "bg-[#10101E] text-white"
                : ""
            } transition-all duration-150 cursor-pointer`}
          >
            <span>Contact us</span>
          </div>

     <div className="flex items-center">
          <Toggle
            className="dark-mode-toggle"
            checked={isDark}
            onChange={({ target }) => setIsDark(target.checked)}
            icons={{
              checked: (
                <span
                  className="custom-icon moon-icon"
                  role="img"
                  aria-label="Moon"
                >
                  🌙
                </span>
              ),
              unchecked: (
                <span
                  className="custom-icon sun-icon"
                  role="img"
                  aria-label="Sun"
                >
                  🔆
                </span>
              ),
            }}
            aria-label="Dark mode toggle"
          />
        </div>

        </div>

       
      </div>
    </>
  );
}

export default Navbar;
