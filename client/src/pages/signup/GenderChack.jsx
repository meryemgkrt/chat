import React, { useState, useEffect } from "react";
import { FaFemale, FaMale } from "react-icons/fa";

const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  const [gender, setGender] = useState(selectedGender || null);

  useEffect(() => {
    setGender(selectedGender);
  }, [selectedGender]);

  const handleFemaleSelect = () => {
    setGender("female");
    onCheckboxChange("female"); // Signup bileşenine "female" değerini gönderir
  };

  const handleMaleSelect = () => {
    setGender("male");
    onCheckboxChange("male"); // Signup bileşenine "male" değerini gönderir
  };

  return (
    <div className="flex gap-4 mt-3">
      {/* Female Checkbox */}
      <label className="label gap-2 cursor-pointer flex items-center">
        <span className="text-white">Female</span>
        <div className="relative flex justify-center items-center">
          <input
            type="checkbox"
            checked={gender === "female"}
            onChange={handleFemaleSelect}
            className="appearance-none h-6 w-6 bg-[#022833] checked:bg-[#022833] rounded focus:outline-none"
          />
          {gender === "female" && (
            <FaFemale className="absolute inset-0 m-auto text-pink-400 text-lg" />
          )}
        </div>
      </label>

      {/* Male Checkbox */}
      <label className="label gap-2 cursor-pointer flex items-center">
        <span className="text-white">Male</span>
        <div className="relative flex justify-center items-center">
          <input
            type="checkbox"
            checked={gender === "male"}
            onChange={handleMaleSelect}
            className="appearance-none h-6 w-6 bg-[#022833] checked:bg-[#022833] rounded focus:outline-none"
          />
          {gender === "male" && (
            <FaMale className="absolute inset-0 m-auto text-blue-500 text-lg" />
          )}
        </div>
      </label>
    </div>
  );
};

export default GenderCheckbox;
