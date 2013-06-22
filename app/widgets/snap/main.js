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