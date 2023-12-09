import { CgMenuRight } from 'react-icons/cg';

interface IMenuIconProps {
  css?: string;
  onClick?: () => void;
}

const MenuIcon = ({ css, onClick }: IMenuIconProps) => {
  return <CgMenuRight className={`cursor-pointer text-xl ${css}`} onClick={onClick} />;
};

export default MenuIcon;
