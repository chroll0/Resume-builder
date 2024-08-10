import * as yup from "yup";
import { degreeOptionProps } from "../types/types";

export const personalSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "მინიმუმ 2 ასო")
    .matches(/^[\u10D0-\u10FF]+$/, "მინიმუმ 2 ასო, ქართული ასოები")
    .required("სახელი აუცილებელია"),
  last_name: yup
    .string()
    .min(2, "მინიმუმ 2 ასო")
    .matches(/^[\u10D0-\u10FF]+$/, "მინიმუმ 2 ასო, ქართული ასოები")
    .required("გვარი აუცილებელია"),
  email: yup
    .string()
    .matches(/^[\w.%+-]+@redberry\.ge$/, "უნდა მთავრდებოდეს @redberry.ge-ით")
    .required("მეილი აუცილებელია"),
  phone_num: yup
    .string()
    .matches(
      /^\+995\s\d{3}\s\d{2}\s\d{2}\s\d{2}$/,
      "უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს"
    )
    .required("მობილური ნომერი აუცილებელია"),
  about_me: yup.string(),
});
export const experienceSchema = yup.object().shape({
  position: yup
    .string()
    .min(2, "მინიმუმ 2 ასო")
    .matches(/^[\p{L}\d\s.-]+$/u, "გთხოვთ შეიყვანოთ თანამდებობა")
    .required("თანამდებობა აუცილებელია"),
  employer: yup
    .string()
    .min(2, "მინიმუმ 2 ასო")
    .matches(/^[\p{L}\d\s.-]+$/u, "გთხოვთ შეიყვანოთ დამსაქმებელი")
    .required("დამსაქმებელი აუცილებელია"),
  date_started: yup.string().required("თარიღი აუცილებელია"),
  date_finished: yup.string().required("თარიღი აუცილებელია"),
  description: yup
    .string()
    .min(2, "მინიმუმ 2 სიმბოლო")
    .required("აღწერა აუცილებელია"),
});
export const educationSchema = yup.object({
  university: yup
    .string()
    .min(2, "მინიმუმ 2 ასო")
    .matches(/^[\p{L}\d\s.-]+$/u, "გთხოვთ შეიყვანოთ დასახელება"),
  degree: yup.string().required("ხარისხი აუცილებელია"),
  finish_date: yup.string().required("თარიღი აუცილებელია"),
  description: yup
    .string()
    .min(2, "მინიმუმ 2 სიმბოლო")
    .required("აღწერა აუცილებელია"),
});

// Create an array of degree options with the defined type
export const degreeOptions: degreeOptionProps[] = [
  { value: "საშუალო სკოლის დიპლომი", label: "საშუალო სკოლის დიპლომი" },
  {
    value: "ზოგადსაგანმანათლებლო დიპლომი",
    label: "ზოგადსაგანმანათლებლო დიპლომი",
  },
  { value: "ბაკალავრი", label: "ბაკალავრი" },
  { value: "მაგისტრი", label: "მაგისტრი" },
  { value: "დოქტორი", label: "დოქტორი" },
  { value: "ასოცირებული ხარისხი", label: "ასოცირებული ხარისხი" },
  { value: "სტუდენტი", label: "სტუდენტი" },
  { value: "კოლეჯი (ხარისხის გარეშე)", label: "კოლეჯი (ხარისხის გარეშე)" },
  { value: "სხვა", label: "სხვა" },
];
