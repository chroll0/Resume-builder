import { useContext } from "react";
import { AppContext } from "../App";

const SideResume = () => {
  const { userProfile } = useContext(AppContext)!;
  const {
    name,
    last_name,
    email,
    image,
    phone_num,
    about_me,
    experience: {
      position,
      employer,
      date_started,
      date_finished,
      description: experienceDescription,
    } = {},
    education: {
      university,
      degree,
      finish_date,
      description: educationDescription,
    } = {},
  } = userProfile;

  return (
    <div className="flex flex-col flex-1 min-h-full justify-between gap-10 py-10 px-10 bg-white">
      <div className="h-full">
        <div className="w-full flex justify-between items-center 2xl:items-start 2xl:flex-row flex-col-reverse gap-6 font-normal">
          <div className="flex flex-col gap-3 flex-[2/3]">
            <h1 className="text-[34px] font-bold text-resume_orange 2xl:text-start text-center">
              {name} {last_name}
            </h1>
            <div>
              {email && (
                <div className="flex flex-[2/3] items-center gap-2">
                  <img
                    className="w-[20px] h-[20px]"
                    src="./images/email.png"
                    alt="email"
                  />
                  <span className="text-[18px] text-resume_black">{email}</span>
                </div>
              )}
              {phone_num && (
                <div className="flex flex-[1/3] items-center gap-2">
                  <img
                    className="w-[20px] h-[20px]"
                    src="./images/phone.png"
                    alt="phone"
                  />
                  <span className="text-[18px] text-resume_black">
                    {phone_num}
                  </span>
                </div>
              )}
            </div>
            {about_me && (
              <div>
                <h2 className="text-[18px] font-bold text-resume_orange">
                  ᲩᲔᲛᲡ ᲨᲔᲡᲐᲮᲔᲑ
                </h2>
                <p className="mt-2 text-[16px] text-justify">{about_me}</p>
              </div>
            )}
          </div>

          {image && (
            <div className="flex justify-center items-center flex-[1/3] w-full max-w-[180px]">
              <img className="w-full rounded-full" src={image} alt="profile" />
            </div>
          )}
        </div>
        {position && (
          <>
            <div className="w-full h-[1px] bg-line_bg_black my-4"></div>
            <div className="flex flex-col gap-2 text-[16px]">
              <h1 className="text-[18px] font-bold text-resume_orange">
                ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ
              </h1>
              <div>
                <h4 className="font-medium mb-1">
                  {position}, {employer}
                </h4>
                {date_started && (
                  <span className="text-[#909090] italic">
                    {date_started} - {date_finished}
                  </span>
                )}
              </div>
              <p className="text-justify">{experienceDescription}</p>
            </div>
            <div className="w-full h-[1px] bg-line_bg_black my-4"></div>
          </>
        )}

        {university && (
          <div className="flex flex-col gap-2 text-[16px]">
            <h1 className="text-[18px] font-bold text-resume_orange">
              ᲒᲐᲜᲐᲗᲚᲔᲑᲐ
            </h1>
            <div>
              <h4 className="font-medium mb-1">
                {university}, {degree}
              </h4>
              <span className="text-[#909090] italic">{finish_date}</span>
            </div>
            <p className="text-justify">{educationDescription}</p>
          </div>
        )}
      </div>
      <img
        src="/images/redberryMiniLogo.png"
        alt="redberryMiniLogo"
        className="w-[42px]"
      />
    </div>
  );
};

export default SideResume;
