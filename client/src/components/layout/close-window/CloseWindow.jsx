import { Link } from 'react-router-dom';
// import { FaTimes } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import styles from './closeWindow.module.css';

export const CloseWindow = () => {
  return (
      <Link to="/"><i className={styles.linkComponent}>
        <AiOutlineClose className={`close-window-icon ${styles.icon}`} />
      </i></Link>
  )
}
