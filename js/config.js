var config = {
  env: 'development', // current environment
  getSearchBoxEndpoint: function (searchText) { // returns target endpoint 
                                                // for the search box live search
    return '/endpoints/search-dropdown/' + searchText + '.json';
  },
};

config.isDev = config.env === 'development';
config.isProd = config.env === 'production';
