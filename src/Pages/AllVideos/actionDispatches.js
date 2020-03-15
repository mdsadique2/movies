import {Api} from 'Utilities/ApiLayer';
import {ApiUrls} from 'Utilities/ApiUrls';
import actions from './actionCreator'

const actionDispatches = (dispatch) => {


    var objToReturn = {
        getVideos: (type, params) => {
            dispatch(actions.getAllTrendingVideosRequest());
            let payload = {params}

            let p1 = Api.get(ApiUrls[type].movie, payload);
            let p2 = Api.get(ApiUrls[type].tv, payload);

            return Api.all([p1, p2]).then( (response) => {
                dispatch(actions.getAllTrendingVideosFinished(response, 'success'));
            }, (error) => {
                dispatch(actions.getAllTrendingVideosFinished(error, 'failure'));
                return Promise.reject(error);
            })
        },

        newest: (params) => {
            dispatch(actions.getAllTrendingVideosRequest());
            let payload = {params}
            let p1 = Api.get(ApiUrls.newest.movie, payload);
            let p2 = Api.get(ApiUrls.newest.tv, payload);
            return Api.all([p1, p2]).then( (response) => {
                dispatch(actions.getNewestFinished(response, 'success'));
            }, (error) => {
                dispatch(actions.getNewestFinished(error, 'failure'));
                return Promise.reject(error);
            })
        },


        search: (params) => {
            dispatch(actions.getAllTrendingVideosRequest());
            let payload = {params}

            let p1 = Api.get(ApiUrls.search.movie, payload);
            let p2 = Api.get(ApiUrls.search.tv, payload);

            return Api.all([p1, p2]).then( (response) => {
                dispatch(actions.getAllTrendingVideosFinished(response, 'success'));
            }, (error) => {
                dispatch(actions.getAllTrendingVideosFinished(error, 'failure'));
                return Promise.reject(error);
            })
        },



    }
    return objToReturn;
}

export default actionDispatches;