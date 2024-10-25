import { useMemo } from 'react';

const CardButton = ({ status, color, handleChangeStatus, icon }) => {
  return (
    <button
      className={`flex items-center justify-center  text-opacity-40 transition-all hover:text-opacity-100 text-white   w-8 h-6 ${color}   transition-transform hover:scale-105`}
      onClick={handleChangeStatus}
      icon={icon}
    >
      {icon}
    </button>
  );
};

export default CardButton;
