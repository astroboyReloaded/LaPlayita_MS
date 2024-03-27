import Menu from './menu/Menu';
import Punch from './punch/Punch';
// import PunchInOut from './punch/PunchInOut';
import home from './home.module.css';

const Home = () => (
  <div className={home.container}>
    <Menu />
    <Punch />
    {/* <PunchInOut /> */}
  </div>
);

export default Home;
