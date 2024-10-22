import TasksBoard from '../TasksBoard';
import Aside from './Aside';
import Header from './Header';

const MainBoard = () => {
  return (
    <div>
      <Header />
      <div className="flex gap-4">
        <Aside />
        <TasksBoard />
      </div>
    </div>
  );
};

export default MainBoard;
