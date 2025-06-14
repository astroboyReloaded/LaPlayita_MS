import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaPlusCircle } from 'react-icons/fa';

const InputItem = ({ addItem }) => {
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
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="Agregar artículo..."
          value={title}
          onChange={handleChange}
          className="input-text"
        />
        <button type="submit" className="input-submit">
          <FaPlusCircle />
        </button>
      </form>
      <span className="submit-warning">{message}</span>
    </>
  );
};

export default InputItem;

InputItem.propTypes = {
  addItem: PropTypes.func.isRequired,
};