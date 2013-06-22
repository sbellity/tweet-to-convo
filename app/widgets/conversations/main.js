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