import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const ShoppingList = React.memo(({
  items,
  toggleBought,
  delItem,
  editItem,
  styles,
}) => (
  <ul className={styles.listContainer}>
    {items.map((item) => (
      <Item
        key={item.id}
        itemProps={item}
        toggleBought={toggleBought}
        delItem={delItem}
        editItem={editItem}
        styles={styles}
      />
    ))}
  </ul>
));

ShoppingList.displayName = 'ShoppingList';
export default ShoppingList;

const itemPropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  item_name: PropTypes.string.isRequired,
  quantity: PropTypes.number,
  bought: PropTypes.bool.isRequired,
});

ShoppingList.propTypes = {
  items: PropTypes.arrayOf(itemPropTypes).isRequired,
  toggleBought: PropTypes.func.isRequired,
  delItem: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
  styles: PropTypes.object.isRequired,
};