interface IInputProps {
  id: string;
  name: string;
  placeholder?: string;
  label?: string;
  error?: string;
  value?: string | number;
  type?: string;
  css?: string;
  note?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  disabled?: boolean;
}
