import { useState } from 'react';
interface DropDownProps{  
  title: string;
  options: string[];
  searchable: boolean
}
const Dropdown : React.FC<DropDownProps> = ({ title, options, searchable = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOption, setSelectedOption] = useState("");

  const filteredOptions = options.filter(option => 
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (option:string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-100 px-3 py-2 rounded-md shadow hover:bg-gray-200"
      >
        {selectedOption || title}
      </button>

      {isOpen && (
        <div className="absolute bg-white border shadow rounded-md mt-2 max-h-60 overflow-auto w-56 z-10">
          {searchable && (
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-2 py-1 border-b"
            />
          )}
          <div>
            {filteredOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelect(option)}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
