import React from 'react';

type ButtonProps = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
};

const Button = ({ children, style, className, disabled, onClick }: ButtonProps) => {
  return (
    <button type="button" style={style} className={`button ${className}`} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
