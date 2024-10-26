// src/components/TaskCard.jsx
import CardButton from './CardButton';
import { MdOutlineDoneAll } from 'react-icons/md';
import { VscDebugStart } from 'react-icons/vsc';
import { CiStop1 } from 'react-icons/ci';
import { MdOutlineNotStarted } from 'react-icons/md';

const TaskCard = ({ name, status, updateStatus }) => {
  const handleChangeStatus = newStatus => {
    updateStatus(name, newStatus);
  };

  return (
    <div className="w-11/12 m-2 p-2 h-28 drop-shadow-sm bg-white border-2 rounded-lg border-gray">
      <h3>{name}</h3>

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
