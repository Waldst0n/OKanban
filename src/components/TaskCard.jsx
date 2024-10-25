// src/components/TaskCard.jsx
import CardButton from './CardButton';

const TaskCard = ({ name, status, updateStatus }) => {
  const handleChangeStatus = newStatus => {
    updateStatus(name, newStatus);
  };

  return (
    <div className="w-11/12 m-2 p-4 h-28 bg-white border-2 rounded-lg border-gray">
      <h3>{name}</h3>

      <div>
        <CardButton
          status="done"
          color="bg-green"
          handleChangeStatus={() => handleChangeStatus('done')}
        />
        <CardButton
          status="started"
          color="bg-yellow"
          handleChangeStatus={() => handleChangeStatus('started')}
        />
        <CardButton
          status="stopped"
          color="bg-red"
          handleChangeStatus={() => handleChangeStatus('stopped')}
        />
        <CardButton
          status="not-started"
          color="bg-grayNote"
          handleChangeStatus={() => handleChangeStatus('not-started')}
        />
      </div>
    </div>
  );
};

export default TaskCard;
