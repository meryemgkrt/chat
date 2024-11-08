import React, { useState } from "react";
import { FaFemale, FaMale } from "react-icons/fa";

const GenderCheckbox = () => {
  const [selectedGender, setSelectedGender] = useState(null); // Başlangıçta hiçbir cinsiyet seçili değil

  const handleFemaleSelect = () => {
    setSelectedGender("female"); // Kadın seçildiğinde erkek checkboxını devre dışı bırakır
  };

  const handleMaleSelect = () => {
    setSelectedGender("male"); // Erkek seçildiğinde kadın checkboxını devre dışı bırakır
  };

  return (
    <div className="flex gap-4 mt-3">
      {/* Female Checkbox */}
      <label className="label gap-2 cursor-pointer flex items-center">
        <span className="text-white">Female</span>
        <div className="relative flex justify-center items-center">
          <input
            type="checkbox"
            checked={selectedGender === "female"}
            onChange={handleFemaleSelect}
            className="appearance-none h-6 w-6 bg-[#022833] checked:bg-[#022833] rounded focus:outline-none"
          />
          {selectedGender === "female" && (
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
            checked={selectedGender === "male"}
            onChange={handleMaleSelect}
            className="appearance-none h-6 w-6 bg-[#022833] checked:bg-[#022833] rounded focus:outline-none"
          />
          {selectedGender === "male" && (
            <FaMale className="absolute inset-0 m-auto text-blue-500 text-lg" />
          )}
        </div>
      </label>
    </div>
  );
};

export default GenderCheckbox;
