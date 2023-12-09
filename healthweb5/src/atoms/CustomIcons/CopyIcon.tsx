import { FaCopy } from 'react-icons/fa6';

interface ICheckProps {
  css?: string;
}

function CopyIcon({ css }: ICheckProps) {
  return <FaCopy className={`cursor-pointer text-deepBlue ${css}`} />;
}

export default CopyIcon;
