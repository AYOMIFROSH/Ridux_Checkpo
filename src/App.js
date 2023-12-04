import React from 'react';
import { Provider } from 'react-redux';
import store from './Store/store';
import AddTask from './component/AddTask';
import ListTask from './component/ListTask';

function App() {
  return(
    <Provider store={store}>
    <div>
      <AddTask />
      <ListTask />
    </div>
  </Provider>
  )
}

export default App;
