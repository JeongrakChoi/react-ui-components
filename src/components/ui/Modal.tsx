import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

type ModalProps = {
  open?: boolean;
  close?: any;
  className?: string;
  children?: React.ReactNode;
  title?: any;
};

const Modal: React.FC<ModalProps> = ({ open, close, className, children, title }) => {
  const rootElement: HTMLElement | null = document.getElementById('root');
  const modalRef = useRef<HTMLDivElement>(null);

  const [animate, setAnimate] = useState(false);
  const [visible, setVisible] = useState(open);

  const [startY, setStartY] = useState(0);
  const [bottom, setBottom] = useState(0);

  if (!rootElement) {
    throw new Error('root element not found');
  }

  useEffect(() => {
    setVisible(open);

    if (visible && !open) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 200);
    }

    return () => {
      setVisible(false);
    };
  }, [visible, open]);

  if (!animate && !visible) return null;

  /* Handle Bar */
  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setStartY(event.touches[0].pageY);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    const scrollY = event.touches[0].clientY - startY;
    setBottom(scrollY);
  };

  const handleTouchEnd = () => {
    if (bottom >= 200) {
      close();
      setBottom(0);
    } else {
      setBottom(0);
    }
  };

  /* 딤 부분 클릭시 종료 */
  const handleClick = (e: any) => {
    if (modalRef.current === e.target) {
      close();
    }
  };

  return ReactDOM.createPortal(
    <>
      <div ref={modalRef} className={`modalWrap ${open ? 'active' : ''}`} onClick={handleClick}>
        <div className={`modalLayer ${className}`} style={{ bottom: `-${bottom}px` }}>
          <div
            className="modalHandleBar"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          ></div>
          {title && (
            <h2 className="modalTitle">
              <button type="button" onClick={close}></button>
              {title}
            </h2>
          )}
          <div className="modalContent">{children}</div>
        </div>
      </div>
    </>,
    rootElement
  );
};

export default Modal;
