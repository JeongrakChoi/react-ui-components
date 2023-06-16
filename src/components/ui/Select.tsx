import React, { useState } from 'react';

type Option = {
  value: string;
  name: string;
};

type SelectProps = {
  onSelect: (value: string) => void; // 선택한 옵션 값을 전달하는 핸들러
  options: Option[];
  defaultText?: string;
};

const Select = ({ onSelect, options, defaultText }: SelectProps) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [isActive, setIsActive] = useState(false);

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    onSelect(option.value); // 선택한 옵션의 value 값을 핸들러로 전달
    setIsActive(false);
  };

  const handleToggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`selectBox ${isActive ? 'active' : ''}`}>
      <div className="selectTxt" onClick={handleToggleActive}>
        {selectedOption ? selectedOption.name : defaultText || options[0]?.name || '선택하세요'}
      </div>
      <ul className="selectList">
        {options.map((option) => (
          <li key={option.value} onClick={() => handleOptionClick(option)}>
            {option.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
