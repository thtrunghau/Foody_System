import React, { useState } from "react";

interface IconButtonProps {
  icon: JSX.Element; // The icon to render
  title: string; // The tooltip text
  onClick?: () => void; // Optional click handler
}

const IconButton: React.FC<IconButtonProps> = ({ icon, title, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative inline-block">
      {/* Button */}
      <button
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200"
      >
        {icon}
      </button>

      {/* Tooltip Below */}
      {isHovered && (
        <div className="absolute left-1/2 top-full mt-2 max-w-xs -translate-x-1/2 transform whitespace-nowrap rounded bg-gray-800 px-3 py-1 text-sm text-white shadow-md">
          {title}
        </div>
      )}
    </div>
  );
};

export default IconButton;
