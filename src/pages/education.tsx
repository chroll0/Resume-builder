import { useForm } from "react-hook-form";
import { useContext } from "react";
import BackButton from "../components/BackButton";

import { yupResolver } from "@hookform/resolvers/yup";
import { degreeOptions, educationSchema } from "./validation";
import { useNavigate } from "react-router-dom";
import { EducationType } from "../types/types";
import Header from "../components/Header";
import Button from "../components/Button";
import SideResume from "../components/SideResume";
import { AppContext } from "../App";

const Education = () => {
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
      university: userProfile.education?.university || "",
      degree: userProfile.education?.degree || "",
      finish_date: userProfile.education?.finish_date || "",
      description: userProfile.education?.description || "",
    },
    resolver: yupResolver(educationSchema),
  });

  const handleChange = (field: keyof EducationType, value: string) => {
    setValue(field, value.trim());

    setUserProfile((prevProfile) => ({
      ...prevProfile,
      education: {
        ...prevProfile.education,
        [field]: value.trim(),
      },
    }));
  };

  const onSubmit = (data: EducationType) => {
    // Save form data or navigate to next page
    console.log(data);
    history("/resume");
  };
  return (
    <div className="section">
      <BackButton navigate="/homePage" />
      <div className="sectionPadding flex-[1.5] bg-gray-50">
        <Header header="ᲒᲐᲜᲐᲗᲚᲔᲑᲐ" page={3} />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="py-14 flex flex-col justify-between"
        >
          <div className="flex flex-col gap-8">
            <div>
              <label htmlFor="university">
                <span className="text-[16px] font-medium">სასწავლებელი</span>

                <div className="relative flex gap-1 justify-center items-center">
                  <input
                    type="text"
                    id="university"
                    placeholder="სასწავლებლის დასახელება"
                    {...register("university", {
                      onChange: (e) =>
                        handleChange("university", e.target.value),
                    })}
                    className={`py-2 pl-4 pr-8 w-full rounded-[4px] text-input_text border border-border_gray ${
                      errors.university
                        ? "inputError"
                        : watch("university")
                        ? "inputCorrect"
                        : ""
                    } text-[16px] h-[48px] mt-2`}
                  />
                  {errors.university ? (
                    <img
                      src="./images/error.png"
                      alt="error"
                      className="w-[24px] h-[24px] mt-2"
                    />
                  ) : (
                    watch("university") && (
                      <img
                        src="./images/correct.png"
                        alt="correct"
                        className="absolute w-[18px] right-3 top-[1.5rem]"
                      />
                    )
                  )}
                </div>
                {errors.university && (
                  <span className="text-[14px] text-validation_black">
                    {errors.university.message}
                  </span>
                )}
              </label>
            </div>

            <div className="flex w-full gap-10 flex-col sm:flex-row">
              <div className="flex-1 flex-col relative">
                <label
                  htmlFor="select"
                  className="text-[16px] font-medium text-[#000] mb-[8px]"
                >
                  ხარისხი
                </label>
                <select
                  id="select"
                  defaultValue="აირჩიეთ ხარისხი"
                  className={`py-2 px-4 w-full rounded-[4px] text-input_text border border-border_gray ${
                    errors.degree
                      ? "inputError"
                      : watch("degree")
                      ? "inputCorrect"
                      : ""
                  } text-[16px] h-[48px] mt-2`}
                  {...register("degree", {
                    onChange: (e) => handleChange("degree", e.target.value),
                  })}
                >
                  <option value="" disabled hidden>
                    აირჩიეთ ხარისხი
                  </option>
                  {degreeOptions.map((option, index) => (
                    <option
                      key={index}
                      value={option.value}
                      className="option py-[10px] pl-[16px] text-[16px] font-medium text-[#1A1A1A]"
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.degree && (
                  <span className="text-[14px] text-validation_black">
                    {errors.degree.message}
                  </span>
                )}
              </div>

              <div className="flex-1">
                <label htmlFor="date">
                  <span className="text-[16px] font-medium">
                    დასრულების თარიღი
                  </span>
                  <input
                    type="date"
                    id="date"
                    {...register("finish_date", {
                      onChange: (e) =>
                        handleChange("finish_date", e.target.value),
                    })}
                    className={`py-2 px-4 w-full rounded-[4px] text-input_text border border-border_gray ${
                      errors.finish_date
                        ? "inputError"
                        : watch("finish_date")
                        ? "inputCorrect"
                        : ""
                    } text-[16px] h-[48px] mt-2`}
                  />
                  {errors.finish_date && (
                    <span className="text-[14px] text-validation_black">
                      {errors.finish_date.message}
                    </span>
                  )}
                </label>
              </div>
            </div>

            <div>
              <label htmlFor="description">
                <span className="text-[16px] font-medium">აღწერა</span>
              </label>

              <textarea
                id="description"
                placeholder="განათლების აღწერა"
                {...register("description", {
                  onChange: (e) => handleChange("description", e.target.value),
                })}
                className={`py-2 px-4 w-full rounded-[4px] text-input_text border border-border_gray ${
                  errors.description
                    ? "inputError"
                    : watch("description")
                    ? "inputCorrect"
                    : ""
                } text-[16px] min-h-[140px] mt-2`}
              />
              {errors.description && (
                <span className="text-[14px] text-validation_black">
                  {errors.description.message}
                </span>
              )}
            </div>
          </div>
          <div className="w-full h-[1px] bg-line_bg_black my-8"></div>
          <button
            type="button"
            className="bg-button_blue px-5 py-3 rounded-[4px] text-[16px] text-white max-w-[300px] mb-12"
            // onClick={handleButtonClick}
          >
            მეტი გამოცდილების დამატება
          </button>

          <div className="flex justify-between">
            <Button text="ᲣᲙᲐᲜ" navigate="/experience_2" />
            <Button text="ᲓᲐᲡᲠᲣᲚᲔᲑᲐ" action={handleSubmit(onSubmit)} />
          </div>
        </form>
      </div>
      <SideResume />
    </div>
  );
};

export default Education;
