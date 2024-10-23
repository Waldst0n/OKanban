import TasksBoard from '../components/TasksBoard';
import Aside from './Aside';
import Header from './Header';

const MainBoard = () => {
  return (
    <div>
      <Header />
      <div className="flex gap-4 w-full">
        <Aside />
        <TasksBoard />
      </div>
    </div>
  );
};

export default MainBoard;
