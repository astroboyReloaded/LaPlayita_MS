import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';

const InputItem = ({ addItem, styles }) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addItem(title);
      setTitle('');
      setMessage('');
    } else {
      setMessage('Escribe un artículo para comprar.');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <input
          type="text"
          placeholder="Agregar artículo..."
          value={title}
          onChange={handleChange}
          className={styles.inputItem}
        />
        <button type="submit" className={styles.addButton}>
          <FaPlus className={styles.addIcon} />
        </button>
      </form>
      <span className="submit-warning">{message}</span>
    </>
  );
};

export default InputItem;

InputItem.propTypes = {
  addItem: PropTypes.func.isRequired,
  styles: PropTypes.object.isRequired,
};