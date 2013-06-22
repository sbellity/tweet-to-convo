Hull.widget('tweets', {

  templates: ['tweets'],

  refreshEvents: ['model.hull.me.change'],

  beforeRender: function(data) {
    data.searches = this.options.searches.split(",");
  }

});