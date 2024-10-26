// src/components/TasksGroupCard.jsx
import TaskCard from './TaskCard';
import { useMemo } from 'react';
import { useTasks } from '../context/TaskContext'; // ajuste o caminho conforme necessário

const bgColorClasses = {
  green: 'bg-green',
  yellow: 'bg-yellow',
  red: 'bg-red',
  grayNote: 'bg-grayNote',
};

const TasksGroupCard = ({ color, situation, status }) => {
  const { tasks, updateTaskStatus } = useTasks();

  const filteredTasks = useMemo(() => {
    return tasks.filter(task => task.status === status);
  }, [tasks, status]);

  return (
    <div className=" overflow-y-auto rounded-t-xl min-w-64 xl:h-5/6 drop-shadow-sm   mt-8 ml-2 mr-4  bg-gray">
      <div
        className={`flex   justify-between rounded-t-xl ${bgColorClasses[color]} p-2 size-10 w-full`}
      >
        <h2 className="text-white font-semibold">{situation}</h2>
      </div>
      <div>
        {filteredTasks.map(task => (
          <TaskCard
            key={task.id}
            name={task.name}
            status={task.status}
            updateStatus={updateTaskStatus}
          />
        ))}
      </div>
    </div>
  );
};

export default TasksGroupCard;
