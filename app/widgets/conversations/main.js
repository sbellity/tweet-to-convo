Hull.widget('conversations', {
  
  templates: ['conversations'],
  
  datasources: {
    conversations: function() {
      return this.api('conversations');
    }
  },

  initialize: function() {
    this.sandbox.on('hull.conversations.add', function() {
      console.warn("New convo.... reloading !");
      this.render();
    }, this);
  }

});