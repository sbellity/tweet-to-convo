Hull.widget('conversations', {
  
  templates: ['conversations'],
  
  datasources: {
    conversations: function() {
      return this.api('conversations');
    }
  },

  initialize: function() {
    this.conversations = {};
  },

  actions: { selectConversation: 'selectConversation' },

  selectConversation: function(event, action) {
    if (action && action.data.id) {
      this.currentConversationId = action.data.id;
    }
    this.sandbox.emit('hull.conversations.select', this.conversations[this.currentConversationId]);
  },


  afterRender: function(data) {
    if (data.conversations && data.conversations.length > 0) {
      var conversations = {};
      _.map(data.conversations, function(convo) {
        conversations[convo.id] = convo;
      });
      this.conversations = conversations;
      this.currentConversationId = data.conversations[0].id;
      // this.actions.selectConversation.call(this, data.conversations[0]);
    }
  },

  initialize: function() {
    this.sandbox.on('hull.conversations.add', function() {
      this.render();
    }, this);
  }

});



//--------


Hull.widget('snap', {
  templates: ['snap'],
  refreshEvents: ['model.hull.me.change'],

  initialize: function() {
    this.sandbox.on('hull.conversations.select', function(convo) {
      SnapEngage.openProactiveChat(true, { msg: "You said that : " + convo.name });
      SnapEngage.sendTextToChat(convo.name);
    }, this);
  }
});



//--------


Hull.widget('tweets', {

  templates: ['tweets'],

  refreshEvents: ['model.hull.me.change'],

  beforeRender: function(data) {
    data.searches = this.options.searches.split(",");
  }

});



//--------


Hull.widget('twitter-feed', {

  templates: ['twitter-feed'],
  
  datasources: {
    tweets: function() {
      return this.api({ provider:'twitter', path: 'search/tweets.json?q=' + this.options.search });
    }
  },

  initialize: function() {
    this.tweets = {};
  },

  actions: {
    createConversation: function(event, action) {
      var self = this;
      var tweet = this.tweets[action.data.tweetId];
      var tweetId = this.sandbox.util.entity.encode('tweet-' + action.data.tweetId);
      var convoTweet = {
        status: "Hey @" + tweet.user.screen_name + " we should talk... come here http://talk.to/me to chat with us !",
        in_reply_to_status_id: tweet.id
      };
      this.api(tweetId + '/conversations', 'post', {
        name: action.data.tweet,
        participant_ids: ["twiter:" + tweet.user.id]
      }).then(function(convo) {
        console.warn("Publishing Tweet: ", convoTweet);
        // this.api({ provier: 'twitter', path: 'statuses/update' }, 'post', {
        //   status: ""
        // });
        self.sandbox.emit('hull.conversations.add', convo);
      });
    },
  },

  afterRender: function(data) {
    var tweets = {};
    _.map(data.tweets.statuses, function(tweet) {
      tweets[tweet.id] = tweet;
    });
    this.tweets = tweets;
  }

});