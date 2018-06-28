var config = {
  env: 'development', // current environment
  getSearchBoxEndpoint: function (searchText) { // returns target endpoint 
                                                // for the search box live search
    return '/endpoints/search-dropdown/' + searchText + '.json';
  },
  getSearchBoxQuickSearchesEndpoint: function (searchText, offset) { // returns target endpoint 
                                                                     // for the search box quick searches
    if (offset == null) {
      offset = 0;
    }
    return '/endpoints/search-dropdown/quick-searches/' + searchText + '/' + offset + '.json';
  },
};

config.isDev = config.env === 'development';
config.isProd = config.env === 'production';
