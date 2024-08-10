// export default Experience;
import { useContext } from "react";
import { AppContext } from "../App";
import Header from "../components/Header";
import BackButton from "../components/BackButton";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../components/Button";
import SideResume from "../components/SideResume";
import { experienceSchema } from "./validation";
import { ExperienceType } from "../types/types";

const Experience = () => {
  const { userProfile, setUserProfile } = useContext(AppContext)!;
  const history = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      position: userProfile.experience?.position || "",
      employer: userProfile.experience?.employer || "",
      date_started: userProfile.experience?.date_started || "",
      date_finished: userProfile.experience?.date_finished || "",
      description: userProfile.experience?.description || "",
    },
    resolver: yupResolver(experienceSchema),
  });

  const handleChange = (field: keyof ExperienceType, value: string) => {
    setValue(field, value.trim());

    setUserProfile((prevProfile) => ({
      ...prevProfile,
      experience: {
        ...prevProfile.experience,
        [field]: value.trim(),
      },
    }));
  };

  const onSubmit = () => {
    history("/education_3");
  };

  return (
    <div className="section">
      <BackButton navigate="/homePage" />
      <div className="sectionPadding flex-[1.5] bg-gray-50">
        <Header header="ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ" page={2} />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="py-14 h-full flex flex-col justify-between"
        >
          <div className="flex flex-col gap-8">
            <div>
              <label htmlFor="position">
                <span className="text-[16px] font-medium">თანამდებობა</span>
              </label>
              <div className="relative flex gap-1 justify-center items-center">
                <input
                  type="text"
                  id="position"
                  placeholder="დეველოპერი, დიზაინერი, ა.შ."
                  {...register("position", {
                    onChange: (e) => handleChange("position", e.target.value),
                  })}
                  className={`py-2 px-4 w-full rounded-[4px] text-input_text border border-border_gray ${
                    errors.position
                      ? "inputError"
                      : watch("position")
                      ? "inputCorrect"
                      : ""
                  } text-[16px] h-[48px] mt-2`}
                />
                {errors.position ? (
                  <img
                    src="./images/error.png"
                    alt="error"
                    className="w-[24px] h-[24px] mt-2"
                  />
                ) : (
                  watch("position") && (
                    <img
                      src="./images/correct.png"
                      alt="correct"
                      className="absolute w-[18px] right-3 top-[1.5rem]"
                    />
                  )
                )}
              </div>
              {errors.position && (
                <span className="text-[14px] text-validation_black">
                  {errors.position.message}
                </span>
              )}
            </div>

            <div>
              <label htmlFor="employer">
                <span className="text-[16px] font-medium">დამსაქმებელი</span>
              </label>
              <div className="relative flex gap-1 justify-center items-center">
                <input
                  type="text"
                  id="employer"
                  placeholder="დამსაქმებელი"
                  {...register("employer", {
                    onChange: (e) => handleChange("employer", e.target.value),
                  })}
                  className={`py-2 px-4 w-full rounded-[4px] text-input_text border border-border_gray ${
                    errors.employer
                      ? "inputError"
                      : watch("employer")
                      ? "inputCorrect"
                      : ""
                  } text-[16px] h-[48px] mt-2`}
                />
                {errors.employer ? (
                  <img
                    src="./images/error.png"
                    alt="error"
                    className="w-[24px] h-[24px] mt-2"
                  />
                ) : (
                  watch("employer") && (
                    <img
                      src="./images/correct.png"
                      alt="correct"
                      className="absolute w-[18px] right-3 top-[1.5rem]"
                    />
                  )
                )}
              </div>
              {errors.employer && (
                <span className="text-[14px] text-validation_black">
                  {errors.employer.message}
                </span>
              )}
            </div>

            <div className="flex w-full gap-10 flex-col sm:flex-row">
              <div className="flex-1">
                <label htmlFor="date_started">
                  <span className="text-[16px] font-medium">
                    დაწყების თარიღი
                  </span>
                </label>
                <div className="relative flex gap-1 justify-center items-center">
                  <input
                    type="date"
                    id="date_started"
                    {...register("date_started", {
                      onChange: (e) =>
                        handleChange("date_started", e.target.value),
                    })}
                    className={`py-2 px-4 w-full rounded-[4px] text-input_text border border-border_gray ${
                      errors.date_started
                        ? "inputError"
                        : watch("date_started")
                        ? "inputCorrect"
                        : ""
                    } text-[16px] h-[48px] mt-2`}
                  />
                </div>
                {errors.date_started && (
                  <span className="text-[14px] text-validation_black">
                    {errors.date_started.message}
                  </span>
                )}
              </div>

              <div className="flex-1">
                <label htmlFor="date_finished">
                  <span className="text-[16px] font-medium">
                    დასრულების თარიღი
                  </span>
                </label>
                <div className="relative flex gap-1 justify-center items-center">
                  <input
                    type="date"
                    id="date_finished"
                    {...register("date_finished", {
                      onChange: (e) =>
                        handleChange("date_finished", e.target.value),
                    })}
                    className={`py-2 px-4 w-full rounded-[4px] text-input_text border border-border_gray ${
                      errors.date_finished
                        ? "inputError"
                        : watch("date_finished")
                        ? "inputCorrect"
                        : ""
                    } text-[16px] h-[48px] mt-2`}
                  />
                </div>

                {errors.date_finished && (
                  <span className="text-[14px] text-validation_black">
                    {errors.date_finished.message}
                  </span>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="description">
                <span className="text-[16px] font-medium">აღწერა</span>
              </label>
              <div className="relative flex gap-1 justify-center items-center">
                <textarea
                  id="description"
                  placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
                  {...register("description", {
                    onChange: (e) =>
                      handleChange("description", e.target.value),
                  })}
                  className={`py-2 px-4 w-full rounded-[4px] text-input_text border border-border_gray ${
                    errors.description
                      ? "inputError"
                      : watch("description")
                      ? "inputCorrect"
                      : ""
                  } text-[16px] min-h-[140px] mt-2`}
                />
              </div>
              {errors.description && (
                <span className="text-[14px] text-validation_black">
                  {errors.description.message}
                </span>
              )}
            </div>
          </div>
          <div className="w-full h-[1px] bg-line_bg_black my-4"></div>
          <button
            type="button"
            className="bg-button_blue px-5 py-3 rounded-[4px] text-[16px] text-white max-w-[300px] mb-12"
            // onClick={handleButtonClick}
          >
            მეტი გამოცდილების დამატება
          </button>

          <div className="flex justify-between">
            <Button text="ᲣᲙᲐᲜ" navigate="/personalInfo_1" />
            <Button text="ᲨᲔᲛᲓᲔᲒᲘ" action={handleSubmit(onSubmit)} />
          </div>
        </form>
      </div>
      <SideResume />
    </div>
  );
};
export default Experience;
