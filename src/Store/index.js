import { createStore } from 'redux';
import reducer from 'Store/reducer'

const store = createStore(reducer);

export default store;