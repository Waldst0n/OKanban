// src/components/TaskCard.jsx
import CardButton from './CardButton';
import { useTasks } from '../context/TaskContext';

import { MdOutlineDoneAll } from 'react-icons/md';
import { VscDebugStart } from 'react-icons/vsc';
import { CiStop1 } from 'react-icons/ci';
import { MdOutlineNotStarted } from 'react-icons/md';
import { FaTrashAlt } from 'react-icons/fa';

const TaskCard = ({ name, status, updateStatus }) => {
  const { tasks, deleteTask } = useTasks();

  const handleChangeStatus = newStatus => {
    updateStatus(name, newStatus);
  };

  return (
    <div className="w-60 m-2 p-2 h-32 drop-shadow-sm bg-white border-2 rounded-lg border-gray">
      <div className="flex items-center justify-between">
        <h3>{name}</h3>
        <button
          className="h-6 w-6 text-red  rounded-md text-white transition-transform hover:scale-105 drop-shadow-lg"
          onClick={() => deleteTask(name)}
        >
          <FaTrashAlt />
        </button>
      </div>

      <div className="flex h-full justify-end place-items-end pb-6  ">
        <CardButton
          status="done"
          color="bg-green"
          handleChangeStatus={() => handleChangeStatus('done')}
          icon={<MdOutlineDoneAll />}
        />
        <CardButton
          status="started"
          color="bg-yellow"
          handleChangeStatus={() => handleChangeStatus('started')}
          icon={<VscDebugStart />}
        />
        <CardButton
          status="stopped"
          color="bg-red"
          handleChangeStatus={() => handleChangeStatus('stopped')}
          icon={<CiStop1 />}
        />
        <CardButton
          status="not-started"
          color="bg-grayNote"
          handleChangeStatus={() => handleChangeStatus('not-started')}
          icon={<MdOutlineNotStarted />}
        />
      </div>
    </div>
  );
};

export default TaskCard;
