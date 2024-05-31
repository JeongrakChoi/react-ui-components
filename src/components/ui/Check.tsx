import { useState, useEffect, ChangeEvent } from 'react';

type CheckProps = {
  label?: React.ReactNode;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
};

const Check = ({ checked = false, label, disabled, onChange }: CheckProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newChecked = event.target.checked;
    setIsChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };

  // 이벤트 버블링 방지
  const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
    event.stopPropagation();
  };

  return (
    <>
      <div className="checkBox" onClick={handleClick}>
        <label>
          <input type="checkbox" disabled={disabled} checked={isChecked} onChange={handleChange} />
          {label}
        </label>
      </div>
    </>
  );
};

export default Check;
