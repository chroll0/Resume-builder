import { HeaderProps } from "../types/types";

const Header = ({ header, page }: HeaderProps) => {
  return (
    <div className="flex flex-col">
      <div className="flexBetween">
        <h1 className="text-[24px] font-bold">{header}</h1>
        <span>{page}/3</span>
      </div>
      <div className="w-full h-[1px] bg-home_black mt-2"></div>
    </div>
  );
};

export default Header;
