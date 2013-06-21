Hull.widget('twitter-feed', {

  templates: ['twitter-feed'],
  
  datasources: {
    tweets: function() {
      return this.api({ provider:'twitter', path: 'search/tweets.json?q=' + this.options.search });
    }
  },

  actions: {
    createConversation: function(event, action) {
      var self = this;
      var tweetId = this.sandbox.util.entity.encode('tweet-' + action.data.tweetId);
      this.api(tweetId + '/conversations', 'post', {
        name: action.data.tweet
      }).then(function(convo) {
        console.warn("Added convo !", convo);
        self.sandbox.emit('hull.conversations.add', convo);
      });
    },
  },

  beforeRender: function(data) {
  },

  afterRender: function() {

  }

});