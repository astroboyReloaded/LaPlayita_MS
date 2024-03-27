import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';

const Authorization = ({ reqAuthorization }) => {
  const dialogRef = useRef(null);
  useEffect(() => {
    if (reqAuthorization) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [reqAuthorization]);

  return <dialog ref={dialogRef}>authorization</dialog>;
};

Authorization.propTypes = {
  reqAuthorization: PropTypes.bool.isRequired,
  // setState: PropTypes.func.isRequired,
};

export default Authorization;
