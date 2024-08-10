import { Link } from "react-router-dom";

const HomePage = () => {
  const handleClearLocalStorage = () => {
    localStorage.clear();
  };

  return (
    <div className="font-sans h-svh bg-background bg-cover bg-center">
      <div className="w-full h-full bg-gradient-overlay py-12 px-16 relative">
        <img
          src="/images/logoRedberry.png"
          alt="Redberry logo"
          className="w-[236px]"
        />
        <div className="w-full h-[1px] bg-home_black mt-6"></div>
        <div className="flexCenter h-full absolute top-0 left-0 w-full">
          <div className="flexCenter relative">
            <img
              src="/images/logoStamp.png"
              alt="Redberry stamp"
              className="md:w-[299px] w-full opacity-[0.14] absolute top-[-50px] md:left-[250px] left-0"
            />
            <Link to="/personalInfo_1">
              <button
                onClick={handleClearLocalStorage}
                className="relative text-[20px] bg-home_black text-white sm:min-w-[350px] w-full px-6 py-3 rounded-lg hover:bg-gray-600 cursor-pointer z-10 transition-all"
              >
                ᲠᲔᲖᲘᲣᲛᲔᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
