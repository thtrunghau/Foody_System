import React, { useState } from "react";

interface SidebarItem {
  label: string;
  icon: JSX.Element;
}

interface SidebarProps {
  items: SidebarItem[];
}

export const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleItemClick = (index) => {
    setSelectedIndex(index);
  };
  return (
    <div className="w-[190px] items-center rounded-md bg-gray-100 p-3">
      <div className="mb-1 flex justify-start space-x-2 font-medium text-black">
        <div className="">
          <a href="#">Logo</a>
        </div>
        <span className="text-lg text-gray-600">Khám phá</span>
      </div>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => handleItemClick(index)}
            className={`flex cursor-pointer items-center space-x-4 rounded-lg p-2 hover:bg-orange-400 hover:text-white ${
              selectedIndex === index
                ? "bg-orange-600 text-white hover:bg-orange-500 hover:text-white"
                : "text-black"
            }`}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
