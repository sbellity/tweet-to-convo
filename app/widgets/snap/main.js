Hull.widget('snap', {
  templates: ['snap'],
  initialize: function() {
    this.sandbox.on('hull.conversations.select', function(convo) {
      SnapEngage.openProactiveChat(true, { msg: "You said that : " + convo.name });
      SnapEngage.sendTextToChat(convo.name);
    }, this);
  }
});