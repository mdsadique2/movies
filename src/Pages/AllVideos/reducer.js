import globalState from 'Store/globalState';


const updateAllTrendingVideos = (state, action) => {
  let {response} = action.value;
  let newState = {...state};
  newState.allVideosLoading = false;
  newState.trendingMovies = response[0].results;
  newState.trendingTvs = response[1].results;
  return newState;
}

const updateNewest = (state, action) => {
  let {response} = action.value;
  let newState = {...state};
  newState.allVideosLoading = false;
  newState.trendingMovies = [response[0]];
  newState.trendingTvs = [response[1]];
  return newState;
}


export default function AllVideosReducer(state = globalState.trendingVideosState, action) {
  switch (action.type) {

    case 'GET_VIDEOS_REQUEST':
      return {...state, allVideosLoading: true}
    case 'GET_VIDEOS_SUCCESS':
      return updateAllTrendingVideos(state, action);
    case 'GET_VIDEOS_FAILURE':
      return {...state, allVideosLoading: false}


    case 'GET_NEWEST_SUCCESS':
      return updateNewest(state, action);
    case 'GET_NEWEST_FAILURE':
      return {...state, allVideosLoading: false}

   
    default:
      return state;
  }
}
