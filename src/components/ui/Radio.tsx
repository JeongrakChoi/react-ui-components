import { ChangeEvent, useState } from 'react';

type RadioProps = {
  children: React.ReactNode;
  value: string;
  name: string;
  defaultChecked?: boolean;
  disabled?: boolean;
};

const Radio = ({ children, value, name, defaultChecked, disabled }: RadioProps) => {
  return (
    <>
      <label>
        <input type="radio" value={value} name={name} defaultChecked={defaultChecked} disabled={disabled} />
        {children}
      </label>
    </>
  );
};

export default Radio;
