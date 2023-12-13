import React from 'react';
import { CheckIcon } from '../CustomIcons';

interface IRadioBtnInputProps {
  id: string;
  name: string;
  title: string;
  desc: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioBtnInput = ({ id, name, title, desc, value, onChange }: IRadioBtnInputProps) => {
  return (
    <label htmlFor={id} className="block relative w-full">
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        className="radio-btn-input hidden peer"
        onChange={onChange}
      />
      <CheckIcon css="hidden bg-white rounded-full peer-checked:block z-10 text-sm absolute -top-[10px] right-0 transition-all ease-in-out" />
      <div className="w-full peer-checked:ring-2 peer-checked:ring-primary hover:ring-2 hover:ring-primary p-3 px-5 rounded-lg bg-bgGray cursor-pointer transition-all duration-150 ease-in-out">
        <p className="font-groteskM mb-1">{title}</p>
        <p className="text-xs text-typeGray">{desc}</p>
      </div>
    </label>
  );
};

export default RadioBtnInput;
