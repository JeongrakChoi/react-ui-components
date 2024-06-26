import { useState, useEffect, ChangeEvent } from 'react';

type CheckBoxProps = {
  checked?: boolean;
  label?: React.ReactNode;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
};

const Check = ({ checked: checkedProp = false, label, disabled, onChange, onClick }: CheckBoxProps) => {
  const [isChecked, setIsChecked] = useState(checkedProp);

  useEffect(() => {
    setIsChecked(checkedProp);
  }, [checkedProp]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newChecked = event.target.checked;
    setIsChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
    if (onClick) {
      onClick(event);
    }
  };

  const stopPropagation = (event: React.MouseEvent<HTMLInputElement>) => {
    event.stopPropagation();
  };

  return (
    <div className={`checkBox ${isChecked ? 'checked' : ''}`} onClick={stopPropagation}>
      <label>
        <input type="checkbox" disabled={disabled} checked={isChecked} onChange={handleChange} onClick={handleClick} />
        {label}
      </label>
    </div>
  );
};

export default Check;
