
interface OptionBarProps {
  selectedOption: string | null;
  onSelectOption: (option: string) => void;
}

const OptionBar: React.FC<OptionBarProps> = ({ selectedOption, onSelectOption }) => {
  const options = ['Option 1', 'Option 2', 'Option 3'];

  return (
    <div className="flex space-x-1">
        {options.map((option) => (
          <div
            key={option}
            className={`cursor-pointer p-2 rounded-sm transition-all ${
              selectedOption === option ? 'bg-orange-500 text-white' : 'bg-gray-200 text-black'
            } hover:bg-orange-500 hover:text-white`}
            onClick={() => onSelectOption(option)}
          >
            {option}
          </div>
        ))}
      </div>
  );
};

export default OptionBar;
