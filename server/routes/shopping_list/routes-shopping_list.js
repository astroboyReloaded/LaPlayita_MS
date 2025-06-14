import express from 'express';
const router = express.Router();
import shoppingList_Controller from './controller-shopping_list.js';

router.get('/', shoppingList_Controller.getShoppingList);

router.post('/add-item', shoppingList_Controller.addItemToShoppingList);
router.put('/edit-item', shoppingList_Controller.editShoppingListItem);
router.put(
  '/toggle-bought',
  shoppingList_Controller.toggleBoughtShoppingListItem,
);
router.delete(
  '/remove-item',
  shoppingList_Controller.removeItemFromShoppingList,
);
router.delete(
  '/clear-bought',
  shoppingList_Controller.clearBoughtItemsShoppingList,
);
router.delete('/clear-all', shoppingList_Controller.clearShoppingList);

export default router;
