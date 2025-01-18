import React, { useEffect, useState } from "react";
import Toggle from "react-toggle";
import "../index.css";
import "react-toggle/style.css"; // Import react-toggle styles

function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [activeTab, setActiveTab] = useState("about");

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      className={`flex flex-row justify-between p-5 ${
        theme === "dark" ? "bg-[#10101E] text-white" : "bg-white text-black"
      } h-[92px] items-center transition-all duration-300 sticky top-0 z-50`}
    >
      {/* Logo Section */}
      <div className="flex items-center justify-center h-full overflow-hidden">
        <div
          className={`${
            theme === "dark" ? "bg-[#DBFF00]" : "bg-[#DBFF00]"
          } px-[15px] ml-[80px] py-[9px] rounded-tr-[41px] rounded-bl-[41px] w-[88px] h-[31px] flex items-center justify-center`}
        >
          <span
            className={`text-center ${
              theme === "dark" ? "text-black" : "text-black"
            } font-bold text-2xl leading-none`}
          >
            logo
          </span>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="flex gap-8 items-center">
        {["about", "projects", "contact"].map((tab) => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-[12px] py-[4px] rounded-[41px] w-[120px] h-[36px] text-center font-semibold cursor-pointer ${
              activeTab === tab
                ? theme === "dark"
                  ? "bg-[#DBFF00] text-black"
                  : "bg-[#10101E] text-white"
                : ""
            } transition-all duration-150`}
          >
            <span>{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
          </div>
        ))}

        {/* Theme Toggle */}
        <div className="flex items-center">
          <Toggle
            className="dark-mode-toggle"
            checked={theme === "dark"}
            onChange={toggleTheme}
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
  );
}

export default Navbar;
