import { Link } from "react-router-dom";
import { buttonProps } from "../types/types";

const Button = ({ action, text, navigate }: buttonProps) => {
  return (
    <Link to={navigate || "/"}>
      <button
        onClick={action}
        className="flexCenter sm:w-[151px] w-[115px] h-[48px] bg-button_purple rounded-[4px] text-white sm:text-[16px] text-[14px] font-medium"
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;
