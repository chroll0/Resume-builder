import { Link } from "react-router-dom";
import { buttonProps } from "../types/types";

const Button = ({ action, text, navigate }: buttonProps) => {
  return (
    <Link to={navigate || "/"}>
      <button
        onClick={action}
        className="flexCenter w-[151px] h-[48px] bg-button_purple rounded-[4px] text-white text-[16px] font-medium"
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;
