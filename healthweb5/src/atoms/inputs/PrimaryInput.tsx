const PrimaryInput: React.FC<IInputProps> = ({
  id,
  name,
  onBlur,
  value,
  placeholder,
  label,
  error,
  type,
  css,
  onChange
}) => {
  return (
    <div className={`flex flex-col space-y-2 ${css} font-book`}>
      <label htmlFor={id} className="text-sm text-black">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        className={`border-[1px] border-borderLine rounded-lg h-[45px] text-xs placeholder:text-xs pl-4 outline-none focus:border-black hover:border-black transition-all duration-300 ${
          error ? 'border-error bg-errorBg' : ''
        }`}
      />
      {error && <small className="text-error text-xs transition-all duration-300">{error}</small>}
    </div>
  );
};

export default PrimaryInput;
