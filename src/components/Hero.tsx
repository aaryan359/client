import  { useState } from "react";
import Button from "./atoms/Button.js";

function Hero() {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleButtonClick = () => {
    setIsInputVisible(true); // Show the email input
    setSuccessMessage(""); // Clear any previous success message
  };

  const handleInputChange = (e:any) => {
    setEmail(e.target.value); // Update the email state
  };

  const handleSendEmail = () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address."); // Validate email
      return;
    }

    // Simulate email submission (replace with actual backend API logic)
    // console.log("Email sent to:", email);

    // Set success message and reset email input
    setSuccessMessage("Thank you! Your email has been sent.");
    setIsInputVisible(false);
    setEmail("");

    // // Notify admin (replace with actual notification logic)
    // console.log("Admin notified about email:", email);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row p-5 justify-around bg-white dark:bg-[#10101E]">
        {/* Left Section */}
        <div className="text-black dark:text-white space-y-6 flex flex-col items-center md:items-start">
          <div className="text-[68px] font-bold leading-tight w-[100%] md:w-[451px] h-auto">
            <span className="block">Designing</span>
            <span className="inline-block text-yellow-500 dark:text-yellow-400">
              &amp;
            </span>
            <span className="inline-block">Developing</span>
            <span className="block">Things</span>
          </div>

          <div className="flex flex-row gap-10 items-center md:items-start space-y-2">
            <div className="h-[66px]">
              <Button
                text="Get in Touch"
                onClick={handleButtonClick}
              />
            </div>
            <span className="text-blue-600 dark:text-blue-400 font-medium text-lg">
              Available for Hire
            </span>
          </div>

          {isInputVisible && (
            <div className="mt-4">
              <input
                type="email"
                value={email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="px-4 py-2 border rounded-md w-full max-w-sm text-gray-900"
              />
              <button
                onClick={handleSendEmail}
                className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Send Email
              </button>
            </div>
          )}

          {successMessage && (
            <p className="mt-4 text-green-500 font-medium">{successMessage}</p>
          )}
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
