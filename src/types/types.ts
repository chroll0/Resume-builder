import { Dispatch, SetStateAction } from "react";
export type ContextType = {
  userProfile: UserProfile;
  setUserProfile: Dispatch<SetStateAction<UserProfile>>;
};

export interface ExperienceType {
  position?: string;
  employer?: string;
  date_started?: string;
  date_finished?: string;
  description?: string;
}

export interface EducationType {
  university?: string;
  degree?: string;
  finish_date?: string;
  description?: string;
}

export interface UserProfile {
  name?: string;
  last_name?: string;
  image?: string;
  about_me?: string;
  email?: string;
  phone_num?: string;
  experience?: ExperienceType;
  education?: EducationType;
}

export interface BackButtonProps {
  navigate: string;
}

export interface HeaderProps {
  header: string;
  page: number;
}

export interface buttonProps {
  action?: VoidFunction;
  navigate?: string;
  text: string;
}

export type handleChangeProps = (
  field: "name" | "last_name" | "email" | "phone_num" | "about_me",
  value: string | number
) => void;

export interface degreeOptionProps {
  value: string;
  label: string;
}
