import { useEffect, useState } from "react";
import PreferenceCard from "./PreferenceCard";
import "./PreferenceList.css";

const PreferenceList = () => {
  const [preferences, setPreferences] = useState<string[]>([]);

  useEffect(() => {
    setPreferences(["fun", "foodie", "nightlife"]);
  }, []);

  return (
    <ul className="PreferenceList">
      {preferences.map((preference, index) => (
        <PreferenceCard key={index} preference={preference} />
      ))}
    </ul>
  );
};

export default PreferenceList;
