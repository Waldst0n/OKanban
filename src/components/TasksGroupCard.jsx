const TasksGroupCard = ({ color }) => {
  const bgColorClasses = {
    green: 'bg-green',
    yellow: 'bg-yellow',
    red: 'bg-red',
    grayNote: 'bg-grayNote',
  };

  return (
    <div className="w-64 mt-4 ml-4 mr-4 bg-boardColor">
      <div
        className={` rounded-t-xl ${bgColorClasses[color]} p-2 size-10 w-full`}
      >
        teste
      </div>
      <div>Tasks</div>
    </div>
  );
};

export default TasksGroupCard;
