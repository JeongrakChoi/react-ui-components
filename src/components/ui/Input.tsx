import { ChangeEvent, KeyboardEvent, MouseEvent, useState } from 'react';

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
  validMessage?: string | string[];
  errorMessage?: string | string[];
};

const Input = ({
  type,
  value: initialValue,
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
  const [inputValue, setInputValue] = useState(initialValue || '');

  // const handleSubmit = (e: KeyboardEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>) => {
  //   if (e.key === 'Enter' || e.type === 'click') {
  //     alert('submit');
  //   }
  // };

  const handleSearch = (e: KeyboardEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>) => {
    if ('key' in e && e.key === 'Enter') {
      alert('submit');
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

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
          value={inputValue}
          placeholder={placeholder}
          disabled={disabled}
          maxLength={maxLength}
          className="input"
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={type === 'search' ? handleSearch : undefined}
        />

        {/* Valid */}
        {Array.isArray(validMessage) && (
          <div className="validMessage">
            {validMessage.map((message, index) => (
              <p key={index}>{message}</p>
            ))}
          </div>
        )}

        {/* Error */}
        {Array.isArray(errorMessage) && (
          <div className="errorMessage">
            {errorMessage.map((message, index) => (
              <p key={index}>{message}</p>
            ))}
          </div>
        )}

        {/* Search Button */}
        {type == 'search' && (
          <button type="button" className="searchBtn" onClick={handleSearch}>
            Search
          </button>
        )}
      </div>
    </>
  );
};

export default Input;
