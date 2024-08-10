import { Link } from "react-router-dom";
import { BackButtonProps } from "../types/types";

const backButton = ({ navigate }: BackButtonProps) => {
  return (
    <Link
      to={navigate}
      className="absolute md:top-12 top-8 lg:left-16 left-1 w-[40px] h-[40px] bg-white rounded-full flexCenter cursor-pointer hover:bg-button_blue"
    >
      <img src="/images/back.png" alt="back" className="w-[8px]" />
    </Link>
  );
};

export default backButton;
