const GET_VIDEOS_REQUEST = 'GET_VIDEOS_REQUEST';
const GET_VIDEOS_SUCCESS = 'GET_VIDEOS_SUCCESS';
const GET_VIDEOS_FAILURE = 'GET_VIDEOS_FAILURE';

const GET_NEWEST_SUCCESS = 'GET_NEWEST_SUCCESS';
const GET_NEWEST_FAILURE = 'GET_NEWEST_FAILURE';

const action = {
    
    getAllTrendingVideosRequest: (params) => {
        return {
            type: GET_VIDEOS_REQUEST
        }
    },
  
    getAllTrendingVideosFinished: (params, status) => {
        return {
            type: status === 'success' ? GET_VIDEOS_SUCCESS : GET_VIDEOS_FAILURE,
            value: {
                response: params,
                status
            }
        }
    },

  
    getNewestFinished: (params, status) => {
        return {
            type: status === 'success' ? GET_NEWEST_SUCCESS : GET_NEWEST_FAILURE,
            value: {
                response: params,
                status
            }
        }
    }
};

export default action;