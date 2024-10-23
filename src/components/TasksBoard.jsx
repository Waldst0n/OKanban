import TasksGroupCard from '../components/TasksGroupCard';

const TasksBoard = () => {
  return (
    <div className="w-full flex    rounded-tl-xl shadow  h-screen bg-white">
      <TasksGroupCard color="green" situation="Feito" status="done" />
      <TasksGroupCard
        color="yellow"
        situation="Em andamento"
        status="started"
      />
      <TasksGroupCard color="red" situation="Parado" status="stopped" />
      <TasksGroupCard
        color="grayNote"
        situation="Não iniciado"
        status="not-started"
      />
    </div>
  );
};

export default TasksBoard;
