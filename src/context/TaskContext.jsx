// src/context/TaskContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const TaskContext = createContext();

const initialTasks = [
  {
    id: 1,
    name: 'task 1',
    status: 'not-started',
  },
  {
    id: 2,
    name: 'task 2',
    status: 'not-started',
  },
  {
    id: 3,
    name: 'task 3',
    status: 'not-started',
  },
  {
    id: 4,
    name: 'task 4',
    status: 'not-started',
  },
];

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('taskCard');
    const initialTasksJson = JSON.stringify(initialTasks);

    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('taskCard', JSON.stringify(initialTasks));
  }, [tasks]);

  const updateTaskStatus = (taskName, newStatus) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.name === taskName ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, updateTaskStatus }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  return useContext(TaskContext);
};
