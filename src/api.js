const BASE_URL = 'https://thinkful-list-api.herokuapp.com/jamestkirk';

function getItems () {
  return fetch(`${BASE_URL}/items`);
}

function createItem(name) {
  let newItem = {
    'name': name
  };
  
  return fetch(`${BASE_URL}/items`, 
    {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: `${JSON.stringify(newItem)}`
    }
  );
}

function updateItem (id, obj) {
  return fetch(`${BASE_URL}/items/${id}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: `${JSON.stringify(obj)}`
    }
  );
}

function deleteItem(id) {
  return fetch(`${BASE_URL}/items/${id}`,
    {
      method: 'DELETE'
    }
  );
}

export default { 
  getItems, 
  createItem, 
  updateItem,
  deleteItem
};