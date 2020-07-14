import $ from 'jquery';

import api from './api';
import store from './store';

import 'normalize.css';
import './index.css';

import shoppingList from './shopping-list';

const main = function () {
  
  api.getItems()
    .then(res => res.json())
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      const item = store.items[0];

      // console.log('current name: ' + item.name);
      // store.findAndUpdate(item.id, { name: 'barbaz' });
      // console.log('new name: ' + item.name);

      shoppingList.render();
    });



  // api.getItems()
  //   .then(res => res.json())
  //   .then((items) => {
  //     const item = items[1];
  //     return api.updateItem(item.id, { checked: true });
  //   })
  //   .then(res => res.json())
  //   .then(() => console.log('updated!'));
  
  
  // api.getItems();
  // .then(res => res.json())
  // .then(res => console.log(res));

  // api.createItem('pears')
  //   .then(res => res.json())
  //   .then((newItem) => {
  //     return api.getItems();
  //   })
  //   .then(res => res.json())
  //   .then((items) => {
  //     console.log(items);
  //   });



  shoppingList.bindEventListeners();
  shoppingList.render();
};


$(main);
