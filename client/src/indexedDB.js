import Dexie from 'dexie';

const browserDB = new Dexie('La_Playita_MS_DB');

browserDB.version(1).stores({
  items_list: 'id, name, unit, default_quantity, created_at',
  shoppingList: '++id, item_id, quantity, bought, created_at',
  simpleShoppingList: '++id, item_name, bought, created_at',
});

export default browserDB;
