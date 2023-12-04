import { createStore } from 'redux';
import tasksReducer from '../Reducer/reducer';

const store = createStore(tasksReducer);

export default store;