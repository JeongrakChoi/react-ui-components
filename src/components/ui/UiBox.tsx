import React from 'react';

type UiBoxProps = {
  title?: string;
  children?: React.ReactNode;
  idName?: string;
  className?: string;
  onClick?: () => void;
};

const UiBox = ({ title, children, idName, className, onClick }: UiBoxProps) => {
  return (
    <div id={idName} className={`uiBox ${className}`} onClick={onClick}>
      <h2>{title}</h2>
      <div className="con">{children}</div>
    </div>
  );
};

export default UiBox;
