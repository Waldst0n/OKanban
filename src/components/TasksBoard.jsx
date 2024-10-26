// src/components/TasksBoard.jsx
import TasksGroupCard from './TasksGroupCard';
import { TaskProvider } from '../context/TaskContext'; // ajuste o caminho conforme necessário
import AddTasks from './AddTasks';

const TasksBoard = () => {
  return (
    <>
      <div className=" flex flex-col  bg-white">
        <div className="flex h-10 p-2 mt-2 w-full items-center ">
          <AddTasks />
        </div>
        <div className="w-full flex flex-wrap justify-center xl:justify-start p-2 rounded-tl-xl shadow h-screen">
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
      </div>
    </>
  );
};

export default TasksBoard;
