import React from "react";

interface RestaurantCardProps {
  image: string;
  name: string;
  address: string;
  type: string;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  image,
  name,
  address,
  type,
}) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-lg">
      {/* Restaurant Image */}
      <div className="h-40 w-full">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>

      {/* Restaurant Details */}
      <div className="p-4">
        {/* Restaurant Name */}
        <div className="mb-2">
          <h2 className="text-lg font-bold text-gray-800 truncate" title={name}>
            {name}
          </h2>
        </div>

        {/* Restaurant Address */}
        <div className="mb-3">
          <p
            className="text-sm text-gray-500 truncate"
            title={address}
          >
            {address}
          </p>
        </div>

        {/* Restaurant Type */}
        <div className="flex items-center font-medium text-blue-500 truncate">
          <div className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-red-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 6h.008v.008H6V6Z"
              />
            </svg>
          </div>
          <div className="truncate" title={type}>
            {type}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
