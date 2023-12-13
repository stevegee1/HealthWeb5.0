import toast from 'react-hot-toast';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { FaXmark } from 'react-icons/fa6';

class ToastClass {
  success(message: string) {
    toast.success(message, {
      icon: <IoMdCheckmarkCircleOutline size={22} />,
      style: {
        padding: '5px 8px',
        color: '#fff',
        background: '#0D1A92',
        borderRadius: '4px',
        fontWeight: '500',
        width: '300px',
        height: '40px',
        textAlign: 'left',
        fontSize: '14px'
        // minWidth: '300px'
      }
    });
  }

  error(message: string) {
    toast.error(message, {
      icon: <FaXmark size={22} />,
      style: {
        padding: '5px 12px',
        color: '#fff',
        background: '#da072b',
        borderRadius: '4px',
        fontWeight: '500',
        minWidth: '200px',
        height: '40px',
        textAlign: 'left',
        fontSize: '14px'
      }
    });
  }
}

export const Toast = new ToastClass();
