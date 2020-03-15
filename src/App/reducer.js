import globalState from 'Store/globalState';


const updateTypeSelected = (state, action) => {
  let {value} = action;
  let newState = {...state};
  newState.currentTypeSelected = value;
  return newState;
}

const updateSearch = (state, action) => {
  let {value} = action;
  let newState = {...state};
  newState.currentSearch = value;
  return newState;
}



export default function AppReducer(state = globalState.appState, action) {
  switch (action.type) {

    case 'UPDATE_TYPE_SELECTION' :
      return updateTypeSelected(state, action);

    case 'UPDATE_SEARCH':
      return updateSearch(state, action);

    default:
      return state;
  }
}
