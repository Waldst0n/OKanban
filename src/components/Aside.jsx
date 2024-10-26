import logo from '../assets/img/image0_0.jpg';

const Aside = () => {
  return (
    <aside className=" hidden md:block  m min-w-56 p-4 text-center   rounded-tr-xl shadow  h-screen bg-boardColor">
      <div className="w-36 text-center m-auto bg-primaryColor p-1 text-white rounded-md">
        <h3>OKanban</h3>
      </div>
      <img className="size-36 m-auto" src={logo} alt="" />
    </aside>
  );
};

export default Aside;
