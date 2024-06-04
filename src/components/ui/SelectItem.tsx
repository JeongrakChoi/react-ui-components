import React from 'react';

interface SelectItemProps {
  value: string | number;
  children: React.ReactNode;
  onSelect?: (value: string | number, text: string) => void;
}

const SelectItem = ({ value, children, onSelect }: SelectItemProps) => {
  const handleClick = () => onSelect?.(value, children?.toString() || '');

  return (
    <li className="selectMenu" onClick={handleClick}>
      {children}
    </li>
  );
};

export default SelectItem;
