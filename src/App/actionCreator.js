const UPDATE_TYPE_SELECTION = 'UPDATE_TYPE_SELECTION';
const UPDATE_SEARCH = 'UPDATE_SEARCH';

const action = {
    
    updateTypeSelection: (value) => {
        return {
            type: UPDATE_TYPE_SELECTION,
            value: value
        }
    },


    updateSearch: (value) => {
        return {
            type: UPDATE_SEARCH,
            value: value
        }
    }

};

export default action;