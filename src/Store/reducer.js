// import globalState from './globalState' 
import {combineReducers} from 'redux';
import AllVideosReducer from 'Pages/AllVideos/reducer'
import AppReducer from 'App/reducer'
const reducer = combineReducers({
    trendingVideosState: AllVideosReducer,
    appState: AppReducer
});

export default reducer;