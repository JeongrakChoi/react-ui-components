import { ChangeEvent, useState } from 'react';

type CheckProps = {
  children?: React.ReactNode;
  onChange: (checked: boolean) => void;
  checked?: boolean;
  disabled?: boolean;
};

const Check = ({ children, onChange, checked, disabled }: CheckProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <>
      <div className="checkBox">
        <label>
          <input type="checkbox" disabled={disabled} checked={checked} onChange={handleChange} />
          {children}
        </label>
      </div>
    </>
  );
};

export default Check;
