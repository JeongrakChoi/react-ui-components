import { ChangeEvent, useState } from 'react';

type InputProps = {
  type: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  isValid?: boolean;
  isError?: boolean;
  maxLength?: number;
  validMessage?: string;
  errorMessage?: string;
};

const Input = ({
  type,
  value,
  onChange,
  placeholder,
  className,
  disabled,
  isValid,
  isError,
  maxLength,
  validMessage,
  errorMessage,
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   changeHandler ? changeHandler();
  //   //value값 수정 시 커스텀 화면 제거
  //   setShowError(false);
  //   setShowValid(false);
  // };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <>
      <div
        className={`inputBox ${className} ${isFocused && 'focus'} ${(isError || errorMessage) && 'error'} ${
          (isValid || validMessage) && 'valid'
        }`}
      >
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          maxLength={maxLength}
          className="input"
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        {/* Valid */}
        {validMessage && (
          <div className="validMessage">
            <p>{validMessage}</p>
          </div>
        )}

        {/* Error */}
        {errorMessage && (
          <div className="errorMessage">
            <p>{errorMessage}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Input;
