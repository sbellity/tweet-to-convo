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
      console.warn("Tweet ?", action.data.tweetId, tweet, this.tweets);
      var convoTweet = {
        status: "Hey @" + tweet.user.screen_name + " we should talk... come here http://talk.to/me to chat with us !",
        in_reply_to_status_id: tweet.id
      };
      this.api(tweetId + '/conversations', 'post', {
        name: action.data.tweet,
        participant_ids: "twitter:" + tweet.user.id
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
    console.warn("We have tweets: ", tweets);
    this.tweets = tweets;
  }

});