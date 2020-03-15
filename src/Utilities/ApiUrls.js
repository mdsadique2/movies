const baseUrl  = process.env.REACT_APP_API_BASEURL;
const time = process.env.REACT_APP_API_TIME;

const ApiPath = {
   movies: 'movie',
   trending: 'trending',
   tv: 'tv',
   search: 'search'
}
const {movies, trending, tv, search} = ApiPath;
const ApiUrls = {
    trending : {
        movie: `${trending}/movie/${time}`,
        tv: `${trending}/tv/${time}`,
    },

    popular: {
        movie: `${movies}/popular`,
        tv: `${tv}/popular`,
    },

    newest: {
        movie: `${movies}/latest`,
        tv: `${tv}/latest`,
    },

    toprated: {
        movie: `${movies}/top_rated`,
        tv: `${tv}/top_rated`,
    },

    search: {
        movie: `${search}/movie`,
        tv: `${search}/tv`,
    }

}


export {
    ApiUrls,
    baseUrl
}