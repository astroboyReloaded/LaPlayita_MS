import /*React, */{ useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
// import styles from '../styles/Item.module.css';

const Item = ({
  itemProps,
  toggleBought,
  delItem,
  editItem,
  styles,
}) => {
  const [editing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState(itemProps.item_name);

  const editInputRef = useRef();

  useEffect(() => {
    setInputValue(itemProps.item_name);
  }, [itemProps.item_name]);
  

  useEffect(() => {
    if (editing) {
      editInputRef.current.focus();
    }
  }, [editing]);

  const viewMode = {};
  const editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const handleEditing = () => {
    setEditing(true);
  };

  const handleEditItemName = () => {
    const trimmedValue = inputValue.trim();
    if (trimmedValue !== '') {
      setEditing(false);
      editItem(itemProps.id, trimmedValue);
    } else {
      setInputValue(itemProps.item_name); // Reset to original value if empty
    }
  }

  const handleDeletItem = () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this item?');
    if (confirmDelete) {
      delItem(itemProps.id);
    }

  }

  return (
    <li className={styles.item}>
      <div className={styles.itemContent} style={viewMode}>
        <span >
          <input
            type="checkbox"
            checked={itemProps.bought}
            onChange={() => toggleBought(itemProps.id, itemProps.bought)}
            className={styles.checkbox}
          />
          <span className={itemProps.bought ? styles.bought : null}>
            {itemProps.item_name}
          </span>
        </span>
        <span className={styles.buttonsContainer}>
          <button type="button" onClick={handleEditing}>
            <AiFillEdit className={'styles.toDoBtn'} />
          </button>
          <button type="button" onClick={handleDeletItem}>
            <FaTrash className={'styles.toDoBtn'} />
          </button>
        </span>
      </div>
      <input
        ref={editInputRef}
        type="text"
        value={inputValue}
        className={'styles.textInput'}
        style={editMode}
        onBlur={handleEditItemName}
        onInput={(e) => {
          setInputValue(e.target.value);
          }}
      />
    </li>
  );
};

// Item.displayName = 'Item';
export default Item;

Item.propTypes = {
  itemProps: PropTypes.shape({
    id: PropTypes.string,
    item_name: PropTypes.string,
    bought: PropTypes.bool,
  }).isRequired,
  toggleBought: PropTypes.func.isRequired,
  delItem: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
  styles: PropTypes.object.isRequired,
};