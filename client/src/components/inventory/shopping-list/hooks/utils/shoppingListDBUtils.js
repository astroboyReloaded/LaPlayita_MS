// import browserDB from './indexedDB.js';

export const getRemoteShoppingList = async () => {
  try {
    const res = await fetch(
      'https://laplayita-ms-server.onrender.com/shopping-list/',
    );
    const data = await res.json();
    console.log(data);
    return data; // Assuming the response is an array of shopping list items
  } catch (error) {
    throw new Error(error.message);
  }
};

// export const setLocalShoppingList = async () => {
//   await browserDB.simpleShoppingList.
// }

// export const getLocalShoppingList = async () => {
//   return await browserDB.simpleShoppingList.orderBy('created_at').toArray();
// };

export const addItemToRemoteShoppingList = async (item_name) => {
  console.log('Adding item to remote shopping list:', item_name);
  const response = await fetch(
    'https://laplayita-ms-server.onrender.com/shopping-list/add-item',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ item_name }),
    },
  ).catch((error) => {
    throw new Error(error.message);
  });
  return response.json(); // Assuming the response is the newly added item
};

// export const addItemToLocalShoppingList = async (item_name) => {
//   return await browserDB.simpleShoppingList.add({
//     item_name,
//     bought: false,
//     created_at: new Date().toISOString(),
//   });
// };

export const editRemoteShoppingListItem = async (id, updated_name) => {
  console.log('Editing item in remote shopping list:', id, updated_name);
  const response = await fetch(
    'https://laplayita-ms-server.onrender.com/shopping-list/edit-item',
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, updated_name }),
    },
  ).catch((error) => {
    throw new Error(error.message);
  });
  console.log('Response from editing item:', response);
  return response.json();
};

// export const editLocalShoppingListItem = async (id, updated_name) => {
//   return await browserDB.simpleShoppingList.update(id, {
//     item_name: updated_name,
//   });
// };

export const toggleBoughtRemoteShoppingListItem = async (id, bought) => {
  const response = await fetch(
    'https://laplayita-ms-server.onrender.com/shopping-list/toggle-bought',
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, bought }),
    },
  ).catch((error) => {
    throw new Error(error.message);
  });
  console.log('Response from toggling bought status:', response);
  return response.json(); // Assuming the response is the updated item id
};

// export const toggleBoughtLocalShoppingListItem = async (id) => {
//   const item = await browserDB.simpleShoppingList.get(id);
//   return await browserDB.simpleShoppingList.update(id, {
//     bought: !item.bought,
//   });
// };

export const removeItemFromRemoteShoppingList = async (id) => {
  const response = await fetch(
    'https://laplayita-ms-server.onrender.com/shopping-list/remove-item',
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    },
  ).catch((error) => {
    throw new Error(error.message);
  });
  console.log('Response from removing item:', response);
  return response.json(); // Assuming the response is the removed item
};

// export const removeItemFromLocalShoppingList = async (id) => {
//   await browserDB.simpleShoppingList.delete(id);
// };

export const clearBoughtItemsRemoteShoppingList = async () => {
  const response = await fetch(
    'https://laplayita-ms-server.onrender.com/shopping-list/clear-bought',
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  ).catch((error) => {
    throw new Error(error.message);
  });
  console.log('Response from clearing bought items:', response);
  return response.json(); // Assuming the response is the cleared items
};

export const clearRemoteShoppingList = async () => {
  const response = await fetch(
    'https://laplayita-ms-server.onrender.com/shopping-list/clear-all',
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  ).catch((error) => {
    throw new Error(error.message);
  });
  console.log('Response from clearing shopping list:', response);
  return response.json(); // Assuming the response is a success message
};

// export const clearLocalShoppingList = () => {
//   return;
// };
