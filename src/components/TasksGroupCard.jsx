import TaskCard from './TaskCard';
import taskCards from '../db/database';
import { useMemo, useState } from 'react';

const TasksGroupCard = ({ color, situation, status }) => {
  const bgColorClasses = {
    green: 'bg-green',
    yellow: 'bg-yellow',
    red: 'bg-red',
    grayNote: 'bg-grayNote',
  };
  const notStartedTask = useMemo(() => {
    return taskCards.filter(task => task.status === status);
  }, [status]);

  return (
    <div className="min-w-64 mt-4 ml-4 mr-4 bg-boardColor">
      <div
        className={` rounded-t-xl ${bgColorClasses[color]} p-2 size-10 w-full`}
      >
        <h2 className="text-white">{situation}</h2>
      </div>
      <div>
        {notStartedTask.map(task => (
          <TaskCard key={task.id} name={task.name} status={task.status} />
        ))}
      </div>
    </div>
  );
};

export default TasksGroupCard;
