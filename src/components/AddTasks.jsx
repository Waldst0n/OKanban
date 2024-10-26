import React, { useState } from 'react';
import { IoIosAdd } from 'react-icons/io';
import { useTasks } from '../context/TaskContext';
const AddTasks = () => {
  const [textInput, setTextInput] = useState('');
  const { addTask } = useTasks();

  const handleChange = e => {
    setTextInput(e.target.value);
  };

  const handleAddTask = e => {
    e.preventDefault();
    if (textInput.trim()) {
      addTask(textInput);
      setTextInput('');
    }
  };

  return (
    <div className=" flex items-center justify-center md:justify-start  w-full mt-2 border-b-2 border-gray p-4">
      <form onSubmit={handleAddTask} className=" flex    gap-2">
        <input
          className=" h-8 border-2   rounded-md focus:outline-none border-primaryColor"
          type="text"
          value={textInput}
          name=""
          id="new-task"
          placeholder="Adicione uma nova tarefa"
          onChange={handleChange}
        />
        <button className="h-8 w-8 siz bg-primaryColor p-2 rounded-md text-white transition-transform hover:scale-105 drop-shadow-lg">
          <IoIosAdd />
        </button>
      </form>
    </div>
  );
};

export default AddTasks;
