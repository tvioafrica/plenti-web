// components/Dropdown.tsx
import React, { useState, ChangeEvent } from 'react';

interface DropdownProps {
  options: string[];
  onSelect: (selectedOption: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleOptionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const option = e.target.value;
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div>
      <label htmlFor="option">Select an Option:</label>
      <select
        id="option"
        name="option"
        value={selectedOption}
        onChange={handleOptionChange}
      >
        <option value="">Select...</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
