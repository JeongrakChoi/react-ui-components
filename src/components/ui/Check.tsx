import { useState } from 'react';

type CheckProps = {
  children?: React.ReactNode;
  checked?: boolean;
  disabled?: boolean;
};

const Check = ({ children, checked, disabled }: CheckProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <div className="checkBox">
        <label>
          <input type="checkbox" disabled={disabled} checked={isChecked} onChange={handleChange} />
          {children}
        </label>
      </div>
    </>
  );
};

export default Check;
