const appMenuItems = [
    {
        url: 'trending',
        titleToDisplay: 'Trending'
    },

    {
        url: 'popular',
        titleToDisplay: 'Popular'
    }, 
    {
        url: 'newest',
        titleToDisplay: 'Newest'
    },
    {
        url: 'toprated',
        titleToDisplay: 'Top Rated'
    }
];

const appAllowedPaths = ['trending', 'popular', 'newest', 'toprated', 'search']
const defaultPath = appAllowedPaths[0];


export {
    appMenuItems,
    appAllowedPaths,
    defaultPath
}