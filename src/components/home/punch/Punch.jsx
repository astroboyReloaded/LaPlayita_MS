import punch from './punch.module.css';

const Punch = () => {
  console.log('Punch');
  return (
    <button
      type="button"
      className={punch.btn}
      aria-label="Punch"
    />
  );
};

export default Punch;
