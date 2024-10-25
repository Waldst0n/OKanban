import { useMemo } from 'react';

const CardButton = ({ status, color, handleChangeStatus }) => {
  return (
    <button
      className={`w-8 h-6 ${color}   transition-transform hover:scale-105`}
      onClick={handleChangeStatus}
    ></button>
  );
};

export default CardButton;
