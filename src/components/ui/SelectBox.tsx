import React, { useState, useEffect, ReactNode, useRef } from 'react';

interface SelectBoxProps {
  children: ReactNode;
  title?: string;
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}

interface SelectItemProps {
  value: string | number;
  children: React.ReactNode;
  onSelect?: (value: string | number, text: string) => void;
}

const SelectBox = ({ children, title, placeholder, disabled, value, onChange }: SelectBoxProps) => {
  const [isActive, setIsActive] = useState(false);
  const [selectedText, setSelectedText] = useState<string | null>(null);
  const selectBoxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectBoxRef.current && !selectBoxRef.current.contains(event.target as Node)) {
        setIsActive(false);
      }
    };

    if (isActive) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isActive]);

  useEffect(() => {
    React.Children.forEach(children, (child) => {
      if (React.isValidElement<SelectItemProps>(child) && child.props.value === value) {
        const childText = child.props.children ? child.props.children.toString() : '';
        setSelectedText(childText);
      }
    });
  }, [children, value]);

  const handleToggleActive = () => {
    if (!disabled) {
      setIsActive((prev) => !prev);
    }
  };

  const handleSelect = (value: string | number, text: string) => {
    setSelectedText(text);
    setIsActive(false);
    onChange?.(value.toString());
  };

  return (
    <div ref={selectBoxRef} className={`selectBox ${isActive ? 'active' : ''} ${disabled ? 'disabled' : ''}`}>
      <div className="selectTit">
        <span>{title}</span>
      </div>
      <div className="selectTxt" onClick={handleToggleActive}>
        {selectedText || placeholder}
      </div>
      {isActive && (
        <ul className="selectList">
          {React.Children.map(children, (child) => {
            if (React.isValidElement<SelectItemProps>(child)) {
              return React.cloneElement(child, { onSelect: handleSelect });
            }
            return child;
          })}
        </ul>
      )}
    </div>
  );
};

export default SelectBox;
