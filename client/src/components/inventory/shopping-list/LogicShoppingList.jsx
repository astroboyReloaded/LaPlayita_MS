import /*React, */{ useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import InputItem from './InputItem';
import ShoppingList from './ShoppingList';
// import { Loading } from '../../layout/loading/Loading';
import { getRemoteShoppingList, addItemToRemoteShoppingList, editRemoteShoppingListItem, toggleBoughtRemoteShoppingListItem, removeItemFromRemoteShoppingList, clearBoughtItemsRemoteShoppingList, /*clearRemoteShoppingList*/ } from './hooks/utils/shoppingListDBUtils.js';
import styles from './shoppingList.module.css';
import { CloseWindow } from '../../layout/close-window/CloseWindow.jsx';

// const LocalListMessage = React.memo(({ showingLocalShoppingListMsg }) => {
//   return <small>{showingLocalShoppingListMsg}</small>;
// });
// LocalListMessage.propTypes = {
//   showingLocalShoppingListMsg: PropTypes.string.isRequired,
// }
// LocalListMessage.displayName = 'LocalListMessage';

const LogicShoppingList = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [simpleShoppingList, setSimpleShoppingList] = useState([]);
  // const [remoteShoppingList, setRemoteShoppingList] = useState([]);
  // const [syncedShoppingList, setSyncedShoppingList] = useState([]);
  // const [showingSyncedShoppingListMsg, setShowingSyncedShoppingListMsg] = useState('')
  // // Local state for managing the shopping list when offline
  const [noInternetConnectionMsg, setNoInternetConnectionMsg] = useState('');
  // const [showingLocalShoppingListMsg, setShowingLocalShoppingListMsg] = useState('');
  // const [localShoppingList, setLocalShoppingList] = useState([]);
  useEffect(() => {
    if (navigator.onLine) {
      getRemoteShoppingList()
        .then((data) => {
          setSimpleShoppingList(data);
          console.log(data)
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    } else {
      setNoInternetConnectionMsg('No estás conectado a Internet. Por favor, verifica tu conexión para sicronizar con la base de datos remota.');
      // browserDB.shoppingList.toArray()
      //   .then((data) => {
      //     setLocalShoppingList(data);
      //     setLoading(false);
      //   })
      //   .catch((err) => {
      //     setError(err.message)
      //     setLoading(false);
      //   })
    //   setShowingLocalShoppingListMsg(' (lista local)');
    //   // Timeout to clear the error after a while.
    //   // NOTE: Logic duplication on errors / fallback
    //   // I am showing an error and then use setTimeout to clear the error, but that could cause confusion if the user gets reconnected. Consider tying it to navigator.onLine or window.addEventListener('online', ...).
    //   setTimeout(() => {
    //     setNoInternetConnectionMsg(null);
    //   }, 6000);
    }
  }, []);
  
  const addItem = async (item_name) => {
    const newItem = await addItemToRemoteShoppingList(item_name);
    console.log('New item added:', newItem);
    setSimpleShoppingList((prevList) => [...prevList, newItem])
  };

  const editItem = (updated_name, id) => {
    editRemoteShoppingListItem(updated_name, id)
      .then((editedItem) => {
        const { id, item_name } = editedItem;
        setSimpleShoppingList((prevList) =>
          prevList.map((item) => (item.id === id ? { ...item, item_name } : item))
        );
    })
    .catch((err) => {
      setError(err.message);
    });
  };

  const toggleBought = async (id, bought) => {
    toggleBoughtRemoteShoppingListItem(id, bought)
      .then((toggledItem) => {
        console.log('Toggled item:', toggledItem);
        setSimpleShoppingList((prevList) =>
          prevList.map((item) =>
            item.id === toggledItem.id ? { ...item, bought: toggledItem.bought } : item
          )
        );
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const delItem = async (id) => {
    removeItemFromRemoteShoppingList(id)
      .then((deletedItemId) => {
        setSimpleShoppingList((prevList) => prevList.filter((item) => item.id !== deletedItemId));
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const clearBoughtItems = async () => {
    clearBoughtItemsRemoteShoppingList()
      .then((success) => {
        if (success) {
          console.log('Bought items cleared successfully', success);
          // Update the local state to remove bought items
          setSimpleShoppingList((prevList) => prevList.filter((item) => !item.bought));
        } else {
          setError('No se pudieron borrar los items comprados.');
        }
      }
      )
      .catch((err) => {
        setError(err.message);
      });
  }

  // const clearShoppingList = async () => {
  //   clearRemoteShoppingList()
  //     .then((response) => {
  //       const {error} = response;
  //       if (!error) {
  //         console.log('Shopping list cleared successfully', response);
  //         // Update the local state to clear the shopping list
  //         setSimpleShoppingList([]);
  //       } else {
  //         setError('No se pudo vaciar la lista de compras.');
  //       }
  //     })
  //     .catch((err) => {
  //       setError(err.message);
  //     });
  // }

  return (
    <div  className={styles.mainContainer}>
      <CloseWindow />
      <h1>Lista de Compras
        {/* <LocalListMessage showingLocalShoppingListMsg={showingLocalShoppingListMsg} /> */}
      </h1>
      <InputItem addItem={addItem} styles={styles} />
      {noInternetConnectionMsg && (
        <p style={{ color: 'red' }}>{noInternetConnectionMsg}</p>
      )}
      {loading && <p>Cargando Lista de Compras...</p>}
      {error && <p style={{ color: 'red'}}>{error}</p>}
      {!loading && !error && simpleShoppingList.length === 0 && (
        <p>La lista de compras está vacía.</p>
      )}
      {!loading && simpleShoppingList.length > 0 && (
        <ShoppingList
          items={simpleShoppingList}
          toggleBought={toggleBought}
          delItem={delItem}
          editItem={editItem}
          styles={styles}
        />
      )}
      <button type="button" className={styles.erraseBoughtBtn} onClick={clearBoughtItems}>
        Borrar Comprados
      </button>
      {/* <button type="button" onClick={clearShoppingList}>
        Vaciar Lista
      </button> */}
      {/* <button type="button" onClick={syncShoppingList}>
        Sincronizar Lista de Compras
      </button> */}
    </div>
  );
};

export default LogicShoppingList;