import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { configureStore } from '@reduxjs/toolkit';

const oldTask = {
  tasks: []
}
const redux = (store = oldTask, action) => {
  if (action.type === "addTask") {
    return {
      ...store,
      tasks: [
        ...store.tasks,
        { cotent: action.payload },
      ]
    }
  }
  return store;
};

const store = configureStore({ reducer: redux });
console.log(store.getState());

const addTask = content => ({
  type: "addTask",
  payload: content,
});

const selectTasks = state => state.tasks;

store.dispatch(addTask("Nauczyć się redux'a"));
console.log(store.getState());

store.dispatch({
  type: "addTask",
  payload: "Jem"
});
console.log(selectTasks(store.getState()));


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
