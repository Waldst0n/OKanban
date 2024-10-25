// src/components/TasksBoard.jsx
import React from 'react';
import TasksGroupCard from './TasksGroupCard';
import { TaskProvider } from '../context/TaskContext'; // ajuste o caminho conforme necessário

const TasksBoard = () => {
  return (
    <TaskProvider>
      <div className="w-full flex  flex-wrap justify-center xl:justify-start p-2 rounded-tl-xl shadow h-screen bg-white">
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
    </TaskProvider>
  );
};

export default TasksBoard;
