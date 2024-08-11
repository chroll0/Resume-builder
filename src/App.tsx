import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import PersonalInfo from "./pages/personalInfo";
import Experience from "./pages/experience";
import Education from "./pages/education";
import Resume from "./pages/resume";
import { createContext, useEffect, useState } from "react";
import { ContextType, UserProfile } from "./types/types";

export const AppContext = createContext<ContextType | undefined>(undefined);

const App = () => {
  const [userProfile, setUserProfile] = useState<UserProfile>(() => {
    const savedProfile = localStorage.getItem("userProfile");
    if (savedProfile) {
      const parsedObj = JSON.parse(savedProfile);
      return parsedObj;
    }
    return {};
  });

  // Save to local storage whenever userProfile changes
  useEffect(() => {
    localStorage.setItem("userProfile", JSON.stringify(userProfile));
  }, [userProfile]);
  const contextValue: ContextType = {
    userProfile,
    setUserProfile,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <Routes>
        <Route path="/homePage" element={<HomePage />} />
        <Route path="/personalInfo_1" element={<PersonalInfo />} />
        <Route path="/experience_2" element={<Experience />} />
        <Route path="/education_3" element={<Education />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </AppContext.Provider>
  );
};

export default App;
