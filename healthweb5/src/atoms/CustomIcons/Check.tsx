import { GoCheckCircleFill } from 'react-icons/go';

interface ICheckProps {
  css?: string;
}

function CheckIcon({ css }: ICheckProps) {
  return <GoCheckCircleFill className={`text-deepBlue ${css}`} />;
}

export default CheckIcon;
