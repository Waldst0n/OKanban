import CardButton from './CardButton';

const TaskCard = ({ name }) => {
  return (
    <div className="w-11/12 m-2 p-4 h-28 bg-white border-2 rounded-lg border-gray  ">
      <h1>{name}</h1>
      <div>
        <CardButton color="bg-green" />
        <CardButton color="bg-yellow" />
        <CardButton color="bg-red" />
        <CardButton color="bg-grayNote" />
      </div>
    </div>
  );
};

export default TaskCard;
