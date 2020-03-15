import actions from './actionCreator'
const actionDispatches = (dispatch) => {
    var objToReturn = {
        updatePageSelection: (newValue) => {
            dispatch(actions.updateTypeSelection(newValue));
        },

        updateSearch: (newValue) => {
            dispatch(actions.updateSearch(newValue));
        }
    }
    return objToReturn;
}

export default actionDispatches;