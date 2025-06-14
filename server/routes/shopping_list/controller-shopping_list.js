import { DB } from '../../dbConnection.js';

const getShoppingList = async (_, res) => {
  try {
    const { data, error } = await DB.from('simple_shopping_list')
      .select('*')
      .order('created_at', { ascending: true });

    if (error) {
      throw error;
    }
    console.log('Fetched shopping list:', data);
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching shopping list:', error);
    res.status(500).json({ error: 'Failed to fetch shopping list' });
  }
};

const addItemToShoppingList = async (req, res) => {
  try {
    const { data, error } = await DB.from('simple_shopping_list')
      .insert({
        item_name: req.body.item_name,
        // Assuming req.body.item_name contains the name of the item to be added
        bought: false,
        created_at: new Date().toISOString(),
      })
      .select();
    console.log('Adding item response:', req.body);
    if (error) {
      throw error;
    }

    res.status(201).json(data[0]); // Assuming the response is an array with the newly added item
  } catch (error) {
    console.error('Error adding item to shopping list:', error);
    res.status(500).json({ error: 'Failed to add item to shopping list' });
  }
};

const editShoppingListItem = async (req, res) => {
  try {
    const { id, updated_name } = req.body;

    const { data, error } = await DB.from('simple_shopping_list')
      .update({ item_name: updated_name })
      .eq('id', id)
      .select();

    if (error) {
      throw new Error(error.message);
    }
    console.log('Editing item response:', data);
    res.status(200).json(data[0]); // Assuming the response is an array with the updated item
  } catch (error) {
    console.error('Error editing shopping list item:', error);
    throw new Error('Failed to edit shopping list item');
  }
};

const toggleBoughtShoppingListItem = async (req, res) => {
  const { id, bought } = req.body;
  try {
    const { data, error } = await DB.from('simple_shopping_list')
      .update({ bought: !bought }) // Toggle the bought status
      .eq('id', id)
      .select()
      .single(); // Using .single() to ensure we get a single item back, or null if not found

    if (error) {
      throw error;
    }
    console.log('Toggling bought status response:', data);
    res.status(200).json({ id: data.id, bought: data.bought });
  } catch (error) {
    console.error('Error toggling bought status of shopping list item:', error);
    throw new Error('Failed to toggle bought status of shopping list item');
  }
};

const removeItemFromShoppingList = async (req, res) => {
  const { id } = req.body;
  try {
    const { data, error } = await DB.from('simple_shopping_list')
      .delete()
      .eq('id', id)
      .select()
      .single();
    // Using .single() to ensure we get a single item back, or null if not found
    if (error) {
      throw error;
    }
    console.log('Removing item response:', data);

    res.status(200).json(data.id); // Assuming the response is the deleted item
  } catch (error) {
    console.error('Error removing item from shopping list:', error);
    res.status(500).json({ error: 'Failed to remove item from shopping list' });
  }
};

const clearBoughtItemsShoppingList = async (req, res) => {
  try {
    const { data, error } = await DB.from('simple_shopping_list')
      .delete()
      .eq('bought', true)
      .select();

    if (error) {
      throw error;
    }
    console.log('Clearing bought items response:', data);
    // Assuming the response is an array of deleted items
    res
      .status(200)
      .json({ message: 'Bought items cleared successfully', items: data });
  } catch (error) {
    console.error('Error clearing bought items from shopping list:', error);
    res
      .status(500)
      .json({ error: 'Failed to clear bought items from shopping list' });
  }
};

const clearShoppingList = async (req, res) => {
  try {
    const { data, error } = await DB.from('simple_shopping_list')
      .delete()
      .eq('id', !null); // Delete all items in the shopping list

    if (error) {
      throw error;
    }
    console.log('Clearing shopping list response:', data);
    // Assuming the response is an array of deleted items
    res.status(200).json(data);
  } catch (error) {
    console.error('Error clearing shopping list:', error);
    res.status(500).json({ error: 'Failed to clear shopping list' });
  }
};

export default {
  getShoppingList,
  addItemToShoppingList,
  editShoppingListItem,
  toggleBoughtShoppingListItem,
  removeItemFromShoppingList,
  clearBoughtItemsShoppingList,
  clearShoppingList,
};
