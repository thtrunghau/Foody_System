// src/components/OptionSelector.tsx
import React, { useState } from "react";
import OptionBar from "./OptionBar";
import DropDown from "./DropDown";

const OptionSelector: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [DropDown1, setDropDown1] = useState<string>("");
  const [DropDown2, setDropDown2] = useState<string>("");
  const [DropDown3, setDropDown3] = useState<string>("");

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const category1Options = ["Category 1-1", "Category 1-2", "Category 1-3"];
  const category2Options = ["Category 2-1", "Category 2-2", "Category 2-3"];
  const category3Options = ["Category 3-1", "Category 3-2", "Category 3-3"];

  return (
    <div className="flex w-full bg-gray-100 p-1 justify-center items-center grow space-x-10 mb-2 rounded-sm">
      {/* Left OptionBar */}
      <div className="grow">
        <OptionBar
          selectedOption={selectedOption}
          onSelectOption={handleOptionClick}
        />
      </div>

      <div>
        {/* Right Section with DropDowns */}
        <div className="flex space-x-2">
          <DropDown
            label="Category 1"
            value={DropDown1}
            onChange={setDropDown1}
            options={category1Options}
          />
          <DropDown
            label="Category 2"
            value={DropDown2}
            onChange={setDropDown2}
            options={category2Options}
          />
          <DropDown
            label="Category 3"
            value={DropDown3}
            onChange={setDropDown3}
            options={category3Options}
          />
        </div>
      </div>
      
    </div>
  );
};

export default OptionSelector;
