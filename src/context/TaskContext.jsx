import React, { createContext, useContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('taskCard');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('taskCard', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = name => {
    const newTask = {
      id: uuidv4(),
      name,
      status: 'not-started',
    };

    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const updateTaskStatus = (taskName, newStatus) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.name === taskName ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTaskStatus }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  return useContext(TaskContext);
};
