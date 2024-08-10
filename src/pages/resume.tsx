import { useState } from "react";
import BackButton from "../components/BackButton";
import SideResume from "../components/SideResume";

const Resume = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div className="relative">
      <div className="section flex justify-center px-4">
        <div className="w-full max-w-[822px] border border-black my-10">
          <SideResume />
        </div>
        {isVisible && (
          <div className="absolute top-10 right-10 shadow-custom px-6 py-4 rounded-[8px]">
            <span className="text-[20px] font-medium">
              რეზიუმე წარმატებით
              <br />
              გაიგზავნა 🎉
            </span>
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 w-[10px] cursor-pointer"
            >
              <img src="./images/close.png" alt="close" />
            </button>
          </div>
        )}
      </div>
      <BackButton navigate="/homePage" />
    </div>
  );
};

export default Resume;
