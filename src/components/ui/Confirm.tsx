import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

type ConfirmProps = {
  open?: boolean;
  close?: any;
  className?: string;
  children?: React.ReactNode;
  title?: any;
  handleClick?: any;
};

const Confirm: React.FC<ConfirmProps> = ({ open, close, className, children, title, handleClick }) => {
  const rootElement: HTMLElement | null = document.getElementById('root');
  const confirmRef = useRef<HTMLDivElement>(null);

  const [visible, setVisible] = useState(open);

  if (!rootElement) {
    throw new Error('root element not found');
  }

  useEffect(() => {
    setVisible(open);

    return () => {
      setVisible(false);
    };
  }, [visible, open]);

  if (!visible) return null;

  /* 딤 부분 클릭시 종료 */
  const handleClose = (e: any) => {
    if (confirmRef.current === e.target) {
      close();
    }
  };

  /* 확인 */
  const handleConfirm = () => {
    handleClick();
    close();
  };

  return ReactDOM.createPortal(
    <>
      <div ref={confirmRef} className={`confirmWrap ${className} ${open ? 'active' : ''}`} onClick={handleClose}>
        <div className="confirmLayer">
          {title && <h2 className="confirmTitle">{title}</h2>}
          <div className="confirmContent">{children}</div>
          <div className="confirmBtn">
            <button type="button" onClick={close}>
              취소
            </button>
            <button type="button" onClick={handleConfirm}>
              <em>확인</em>
            </button>
          </div>
        </div>
      </div>
    </>,
    rootElement
  );
};

export default Confirm;
