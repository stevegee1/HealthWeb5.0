'use client';
import { useState } from 'react';
import { PiEyeLight, PiEyeSlash } from 'react-icons/pi';

export const InputPassword = ({
  id,
  name,
  placeholder,
  label,
  error,
  value,
  onBlur,
  onChange,
  note
}: IInputProps) => {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="flex flex-col w-full mb-4">
      <label className="text-sm mb-2 font-medium" htmlFor={id}>
        {label}
      </label>

      <div
        className={`w-full flex items-center rounded-lg text-sm border ${
          error ? 'border-error' : 'border-borderLine'
        } focus-within:border-black mb-1 hover:border-black px-4`}
      >
        <input
          id={id}
          type={showPass ? 'text' : 'password'}
          placeholder={placeholder}
          name={name}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          className="focus:outline-none w-full h-[45px]"
        />

        <div className="cursor-pointer" onClick={() => setShowPass(!showPass)}>
          {showPass ? <PiEyeLight className="text-xl" /> : <PiEyeSlash className="text-xl" />}
        </div>
      </div>
      {note && <small className="text-xs transition-all duration-300">{note}</small>}
      {error && <small className="text-error text-xs transition-all duration-300">{error}</small>}
    </div>
  );
};

export default InputPassword;
