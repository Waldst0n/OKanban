import TasksGroupCard from './components/TasksGroupCard';

const TasksBoard = () => {
  return (
    <div className="w-4/5 flex   rounded-tl-xl shadow  h-screen bg-white">
      <TasksGroupCard color="green" />
      <TasksGroupCard color="yellow" />
      <TasksGroupCard color="red" />
      <TasksGroupCard color="grayNote" />
    </div>
  );
};

export default TasksBoard;
