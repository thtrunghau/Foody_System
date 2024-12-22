import { useState } from 'react';

const ServiceDropdown = ({ title, services }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-100 px-4 py-2 rounded-md shadow hover:bg-gray-200"
      >
        {selectedOption || title}
      </button>

      {isOpen && (
        <div className="absolute bg-white border shadow rounded-md mt-2 w-56 z-10">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              {/* Service Title */}
              <button
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                {service.title}
              </button>

              {/* Suboptions - Shown on Hover */}
              {service.subOptions && (
                <div className="absolute left-full top-0 hidden group-hover:block bg-white border shadow rounded-md mt-0 w-48 z-10">
                  {service.subOptions.map((subOption, subIndex) => (
                    <button
                      key={subIndex}
                      onClick={() => handleSelect(`${service.title} - ${subOption}`)}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      {subOption}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceDropdown;
