import { useState } from "react";
import { RestaurantList } from '../../../restaurants/components/restaurant-delivery/RestaurantList';

export const DeliveryFood = () => {
  const [selectedOption, setSelectedOption] = useState("Deal hôm nay");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const options = [
    "Deal hôm nay",
    "Tất cả",
    "Đồ ăn",
    "Đồ uống",
    "Đồ chay",
    "Bánh kem",
    "Tráng miệng",
  ];
  const categories = ["Category 1", "Category 2", "Category 3"];

  const handleOptionClick = (option: string) => {
    if (option === "Tráng miệng") {
      setIsDropdownOpen(!isDropdownOpen);
    } else {
      setSelectedOption(option);
      setIsDropdownOpen(false);
    }
  };

  return (
    <div className="relative ml-[190px] mr-[190px]">
      <div className=" flex items-center space-x-6 bg-gray-100 px-6 py-4 shadow-md">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <a href="#">Logo</a>
        </div>

        {/* Text */}
        <span className="text-lg text-gray-600">Giao Tận nơi</span>

        {/* Navigation Options */}
        <div className="flex items-center justify-center space-x-6">
          {options.map((option) => (
            <div key={option} className="relative">
              <button
                onClick={() => handleOptionClick(option)}
                className={`flex items-center font-medium text-gray-600 hover:text-orange-600 ${
                  selectedOption === option ? "text-orange-600 underline" : ""
                }`}
              >
                {option}
                {option === "Tráng miệng" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="ml-1 h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 9.75l3.75 3.75 3.75-3.75"
                    />
                  </svg>
                )}
              </button>
              {option === "Tráng miệng" && isDropdownOpen && (
                <div className="absolute right-0 z-10 mt-2 rounded border bg-white shadow-lg">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleOptionClick(category)}
                      className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 hover:text-blue-500"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="relative pt-3">
        <RestaurantList/>
      </div>
    </div>
  );
};
