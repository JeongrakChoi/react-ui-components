import React from 'react';

type CardProps = {
  title?: string;
  children?: React.ReactNode;
  idName?: string;
  className?: string;
  onClick?: () => void;
};

const Card = ({ title, children, idName, className, onClick }: CardProps) => {
  return (
    <div id={idName} className={`card ${className}`} onClick={onClick}>
      <h2>{title}</h2>
      <div className="con">{children}</div>
    </div>
  );
};

export default Card;
