/**
 *
 * Allow to start and reply to a conversation on an object of the current application.
 *
 * ## Example
 *
 *     <div data-hull-widget="conversation@hull" data-hull-id="OBJECT_ID"></div>
 *
 * ## Option:
 *
 * - `id`: Required, The id of the specific conversation object
 * 
 * OR
 *
 * - `subjectid`: Required, The object you want to start a conversation upon.
 * - `participantid`: Required, comma-separated ids of the participants
 *
 * ## Template:
 *
 * - `conversations`: 
 * - `participants`: 
 *
 * ## Datasource:
 *
 * - `conversation`: The conversation
 *
 * ## Action:
 *
 * - `message`: Submits a new message.
 */

Hull.widget('conversation', {

  templates: ['conversation','participants','form','conversation_button'],

  refreshEvents: ['model.hull.me.change'],

  actions: {
    create: 'createConvo',
    message: 'postMessage',
    deleteMsg: 'deleteMessage'
  },

  options: {
    focus: false,
    order: 'desc'
  },

  datasources: {
    conversation: function () {
      if (this.id && this.conversation && this.id == this.conversation.id) {
        return this.conversation
      } else if (this.id) {
        return this.api(this.id);
      }
    },
    messages: function () {
      if (this.id) {
        // order will default to ASC, if not specified
        if('desc' == this.options.order) {
          orderBy = "created_at DESC"
        }
        else {
          orderBy = "created_at ASC"
        }
        return this.api(this.id + '/messages?order_by=' + orderBy)
      }
      else {
        return null;
      }
    }
  },

  initialize: function() {
    this.sandbox.on('hull.conversations.pick', function(convo) {
      this.conversation = convo;
      console.warn(" I Got Picked !", convo);
      this.id = convo.id;
      this.render();
    }, this)
  },
  
  beforeRender: function(data){
    "use strict";
    if(data.conversation) {
      data.messages = data.messages;
      data.participants = data.conversation.participants;
      _.each(data.messages, function(m) {
        m.isDeletable = (m.actor.id === this.data.me.id);
        m.isNew = !m.isDeletable && (!(data.conversation.last_read[this.data.me.id]) || (m.id > data.conversation.last_read[this.data.me.id]))
        return m;
      }, this);
      data.isFollowing = _.find(data.participants, function(p) {
        return p.id == this.data.me.id
      }, this)
      data.isAscending = this.options.order != 'desc';
    }
    else {
      data.newConvo = true;
    }
    return data;
  },
  
  afterRender: function() {
    "use strict";
    if(this.options.focus || this.focusAfterRender) {
      this.$el.find('input,textarea').focus();
      this.focusAfterRender = false;
    }
    // Mark msgs as read
    setTimeout(_.bind(function() {
      var li = $('.hull-messages__list li:first-child');
      var cid = $('.hull-conversation__form').find('.media').data('hull-conversation-id');
      
      if(li && cid) {
        Hull.data.api(cid + '/messages', 'put', {});
      }
    }, this), 2000);
  },
  toggleLoading: function ($el) {
    "use strict";
    var $form = $el.toggleClass('is-loading');
    var $btn = $form.find('.btn');
    $btn.attr('disabled', !$btn.attr('disabled'));
    var $textarea = $form.find('textarea');
    $textarea.attr('disabled', !$textarea.attr('disabled'));
  },
  
  createConvo: function(e, data) {
    var $parent = data.el
    var attrs = {
      participant_ids: this.options.participantIds,
      public: this.options.public,
      name: this.options.convoName
    }
    this.api(this.options.subjectId + '/conversations', 'post', attrs).then(_.bind(function(convo) {
      this.id = convo.id;
      this.render();
    }, this));
  },
  
  postMessage: function (e, data) {
    "use strict";
    e.preventDefault();
    var $formWrapper = this.$el.find('.hull-conversation__form');
    var $form = $formWrapper.find('form');
    var $media = $formWrapper.find('.media');
    var formData = this.sandbox.dom.getFormData($form);
    var description = formData.description;

    this.toggleLoading($formWrapper);
    if (description && description.length > 0) {
      var cid = $media.data('hull-conversation-id');
      var attributes = { body: description };
      this.api(cid + '/messages', 'post', attributes).then(_.bind(function() {
        this.toggleLoading($formWrapper);
        this.render();
      }, this));
    }
  },
  
  deleteMessage: function(e, data) {
    "use strict";
    event.preventDefault();
    var id = data.data.id;
    var $parent = data.el
      .addClass('is-removing')
      .parents('[data-hull-message-id="'+ id +'"]');
    this.api.delete(id).then(function () {$parent.remove();});
    
  }
});




//--------


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

  actions: { pickConversation: 'pickConversation' },

  pickConversation: function(event, action) {
    if (action && action.data.id) {
      this.currentConversationId = action.data.id;
    }
    this.sandbox.emit('hull.conversations.pick', this.conversations[this.currentConversationId]);
  },

  afterRender: function(data) {
    if (data.conversations && data.conversations.length > 0) {
      var conversations = {};
      _.map(data.conversations, function(convo) {
        conversations[convo.id] = convo;
      });
      this.conversations = conversations;
      this.currentConversationId = data.conversations[0].id;
      this.pickConversation(data.conversations[0]);
    }
  },

  initialize: function() {
    this.sandbox.on('hull.conversations.add', function() {
      this.render();
    }, this);
  }

});



//--------


Hull.widget('lets-talk', {
  templates: ['lets-talk'],
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