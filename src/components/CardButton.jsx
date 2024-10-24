const CardButton = ({ color }) => {
  return (
    <button
      className={`w-8 h-6 ${color}   transition-transform hover:scale-105`}
    ></button>
  );
};

export default CardButton;
