import TasksBoard from '../components/TasksBoard';
import Aside from './Aside';
import Header from './Header';

const MainBoard = () => {
  return (
    <div>
      <Header />
      <div className="flex gap-2 w-full h-screen">
        <Aside />
        <TasksBoard />
      </div>
    </div>
  );
};

export default MainBoard;
