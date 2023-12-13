interface IButtonProps {
  type?: 'submit' | 'reset' | 'button';
  text: string;
  variant: 'filled' | 'transparent' | 'outlined';
  css?: string;
  onClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = ({
  type,
  text,
  variant,
  css,
  onClick,
  disabled,
  isLoading,
  leftIcon,
  rightIcon
}: IButtonProps) => {
  return (
    <button
      className={`w-full font-groteskM h-[45px] rounded-lg border flex justify-center items-center text-sm ${
        variant === 'filled' && 'text-white bg-primary hover:opacity-80'
      } ${variant === 'transparent' && 'text-black bg-tansparent border-none hover:bg-bgGray'} ${
        variant === 'outlined' && 'text-black border border-borderLine hover:border-primary'
      } transition-all duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed ${css}`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {isLoading ? (
        <>loading...</>
      ) : (
        <>
          {leftIcon}
          <p className={`${leftIcon && 'ml-2'} ${rightIcon && 'mr-2'}`}>{text}</p>
          {rightIcon}
        </>
      )}
    </button>
  );
};

export default Button;
