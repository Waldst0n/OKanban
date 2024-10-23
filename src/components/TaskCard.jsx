const TaskCard = ({ name, status }) => {
  return (
    <div className="w-11/12 m-2 p-4 h-28 bg-white border-2 rounded-lg border-gray  ">
      <h1>{name}</h1>
      <p>{status}</p>
    </div>
  );
};

export default TaskCard;
