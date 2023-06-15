import { ChangeEvent, useState } from 'react';

type RadioGroupProps = {
  children?: React.ReactNode;
  label?: any;
};

const RadioGroup = ({ children, label }: RadioGroupProps) => {
  return (
    <>
      <div className="radioBox">
        <fieldset>
          <legend>{label}</legend>
          {children}
        </fieldset>
      </div>
    </>
  );
};

export default RadioGroup;
