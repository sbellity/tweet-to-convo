this["Hull"] = this["Hull"] || {};
this["Hull"]["templates"] = this["Hull"]["templates"] || {};

this["Hull"]["templates"]["conversation/conversation"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n<div class=\"hull-conversation\">\n  <div class=\"hull-conversation__header\">\n    ";
  stack1 = helpers['if'].call(depth0, depth0.conversation, {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n  \n  <div class=\"row-fluid\">\n      ";
  options = {hash:{},inverse:self.program(6, program6, data),fn:self.noop,data:data};
  if (stack1 = helpers.isAscending) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.isAscending; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.isAscending) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      \n      ";
  stack1 = helpers['if'].call(depth0, depth0.messages, {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n      ";
  options = {hash:{},inverse:self.program(14, program14, data),fn:self.noop,data:data};
  if (stack1 = helpers.messages) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.messages; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.messages) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      \n      ";
  stack1 = helpers['if'].call(depth0, depth0.isAscending, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n</div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <h4>"
    + escapeExpression(((stack1 = ((stack1 = depth0.conversation),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h4>\n    <div>You have "
    + escapeExpression(((stack1 = ((stack1 = depth0.conversation),stack1 == null || stack1 === false ? stack1 : stack1.messages_count_unread)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " NEW messages and "
    + escapeExpression(((stack1 = ((stack1 = depth0.conversation),stack1 == null || stack1 === false ? stack1 : stack1.messages_count)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " total messages.</div>\n    ";
  return buffer;
  }

function program4(depth0,data) {
  
  
  return "\n    <h4>Start a new conversation</h4>\n    ";
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        ";
  stack1 = self.invokePartial(partials['conversation/form'], 'conversation/form', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n        <ul class=\"media-list hull-messages__list\">\n          ";
  options = {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data};
  if (stack1 = helpers.messages) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.messages; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.messages) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </ul>\n      ";
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n            <li class=\"media\" data-hull-message-id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n              <div class=\"span2\">\n                <span class=\"pull-right\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.actor),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n              </div>\n              <div class=\"pull-left\">\n                <img class=\"media-object img-rounded\" src=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.actor),stack1 == null || stack1 === false ? stack1 : stack1.picture)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.actor),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n              </div>\n              <div class=\"media-body\">\n                <div class=\"pull-right\">\n                  <small class=\"muted\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.formatTime || depth0.formatTime),stack1 ? stack1.call(depth0, depth0.updated_at, "h:mm A", options) : helperMissing.call(depth0, "formatTime", depth0.updated_at, "h:mm A", options)))
    + "</small>\n                </div>\n                <h4 class=\"media-heading\">\n                  ";
  stack2 = helpers['if'].call(depth0, depth0.isNew, {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                </h4>\n                <div class=\"hull-messages__description\">\n                  ";
  if (stack2 = helpers.body) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.body; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\n                </div>\n                <div class=\"hull-messages__actions\">\n                    ";
  stack2 = helpers['if'].call(depth0, depth0.isDeletable, {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                </div>\n              </div>\n            </li>\n          ";
  return buffer;
  }
function program10(depth0,data) {
  
  
  return "\n                    <small class=\"text-success\">NEW!</small>\n                  ";
  }

function program12(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                      <small>\n                        <a href=\"#\" class='link' data-hull-action=\"deleteMsg\" data-hull-id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">Delete</a>\n                      </small>\n                    ";
  return buffer;
  }

function program14(depth0,data) {
  
  
  return "\n        <div class=\"alert alert-info\">\n          No messages started yet\n        </div>\n      ";
  }

  stack1 = helpers['if'].call(depth0, depth0.conversation, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  };

this["Hull"]["templates"]["conversation/conversation_button"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"hull-conversation-button\">\n  <button class=\"btn\" data-hull-action=\"create\">\n    Start a Conversation\n  </button>\n</div>\n";
  };

this["Hull"]["templates"]["conversation/form"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <form>\n      <div class='media' data-hull-conversation-id=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.conversation),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n        <div class=\"span2\">\n          <span class=\"pull-right\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.me),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n        </div>\n        <div class=\"pull-left\">\n          <img class=\"media-object img-rounded\" src=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.me),stack1 == null || stack1 === false ? stack1 : stack1.picture)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.me),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n        </div>\n        <div class=\"media-body\">\n          <textarea name='description' class=\"input-block-level\" rows=\"3\" placeholder=\"Send a message... \"></textarea>\n          <button data-hull-action=\"message\" class=\"btn btn-primary\">Reply</button>\n        </div>\n      </div>\n    </form>\n  ";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\n    <div data-hull-widget=\"login_button@hull\"></div>\n  ";
  }

  buffer += "<div class=\"well hull-conversation__form\">\n  ";
  stack1 = helpers['if'].call(depth0, depth0.loggedIn, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;
  };

this["Hull"]["templates"]["conversation/participants"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, self=this, functionType="function", escapeExpression=this.escapeExpression, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        ";
  stack1 = helpers['if'].call(depth0, depth0.isFollowing, {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "\n          <div class=\"btn btn-info pull-right\">Following</div>\n        ";
  }

function program4(depth0,data) {
  
  
  return "\n          <div class=\"btn btn-info pull-right\" data-hull-action=\"follow\">Follow</div>\n        ";
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n    <ul class=\"media-list hull-participants__list\">\n      ";
  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data};
  if (stack1 = helpers.participants) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.participants; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.participants) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n  ";
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <li class=\"media\">\n          <div class=\"pull-left\">\n            <img class=\"media-object img-rounded\" src=\"";
  if (stack1 = helpers.picture) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.picture; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n          </div>\n          <div class=\"media-body\">\n            <h4 class=\"media-heading\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h4>\n          </div>\n        </li>\n      ";
  return buffer;
  }

  buffer += "<div class=\"span4 offset1\">\n  <div class=\"hull-participants__header\">\n    <div class=\"row\">\n      <h2 class=\"pull-left\">Participants</h1>\n      ";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.conversation),stack1 == null || stack1 === false ? stack1 : stack1['public']), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    </div>\n  </div>\n  \n  ";
  stack2 = helpers['if'].call(depth0, depth0.participants, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</div>";
  return buffer;
  };

this["Hull"]["templates"]["conversations/conversations"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression, blockHelperMissing=helpers.blockHelperMissing, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n    <ul class=\"media-list\">\n      ";
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data};
  if (stack1 = helpers.conversations) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.conversations; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.conversations) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n  ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n        <li class=\"well conversation\">\n          <div class=\"pull-right\">\n            ";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  if (stack1 = helpers.participants) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.participants; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.participants) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </div>\n          <h5>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.fromNow || depth0.fromNow),stack1 ? stack1.call(depth0, depth0.created_at, options) : helperMissing.call(depth0, "fromNow", depth0.created_at, options)))
    + "</h5>\n          ";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\n          <button class='btn pull-right'  data-hull-action='pickConversation' data-hull-id='";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "'>Let's talk about this</button>\n        </li>\n      ";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <span class='label ";
  stack1 = helpers['if'].call(depth0, depth0.is_admin, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'>\n              <img src='";
  if (stack1 = helpers.picture) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.picture; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "' width='24px' height='24px' />\n              ";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n            </span> &nbsp;\n            ";
  return buffer;
  }
function program4(depth0,data) {
  
  
  return "label-important";
  }

function program6(depth0,data) {
  
  
  return "\n    No convo for the moment...\n  ";
  }

  buffer += "<div class=\"hull-conversations\">\n  ";
  stack1 = helpers['if'].call(depth0, depth0.conversations, {hash:{},inverse:self.program(6, program6, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;
  };

this["Hull"]["templates"]["lets-talk/lets-talk"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, self=this;

function program1(depth0,data) {
  
  
  return "\n  <div class=\"row\">\n    <div class='span4' data-hull-widget='conversations'></div>\n    <div class='span8' data-hull-widget='conversation'></div>\n  </div>\n  ";
  }

function program3(depth0,data) {
  
  
  return "\n  <div class=\"hero-unit\">\n    <h1>Let's talk !</h1>\n    <div data-hull-widget='identity@hull'></div>\n  </div>\n  ";
  }

  buffer += "<div class=\"container\">\n  ";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.loggedIn),stack1 == null || stack1 === false ? stack1 : stack1.twitter), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</div>";
  return buffer;
  };

this["Hull"]["templates"]["tweets/tweets"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n";
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data};
  if (stack1 = helpers.searches) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.searches; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.searches) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "";
  buffer += "\n<div class=\"span3\" data-hull-widget=\"twitter-feed\" data-hull-search=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\">Loading...</div>\n";
  return buffer;
  }

function program4(depth0,data) {
  
  
  return "\n<div data-hull-widget='identity@hull'></div>\n";
  }

  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.loggedIn),stack1 == null || stack1 === false ? stack1 : stack1.twitter), {hash:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n";
  return buffer;
  };

this["Hull"]["templates"]["twitter-feed/twitter-feed"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n  <li class=\"media\">\n    <div class=\"pull-left\">\n      <img class=\"media-object img-rounded\" width='50px' height='50px' src=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.profile_image_url_https)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/>\n    </div>\n    <div class=\"media-body\">\n      <h4 class=\"media-heading\">\n        "
    + escapeExpression(((stack1 = ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " @"
    + escapeExpression(((stack1 = ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.screen_name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n      </h4>\n      <p>";
  if (stack2 = helpers.text) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.text; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</p>\n      <p class=\"muted\">\n        <button class=\"btn btn-mini\" data-hull-action='createConversation' data-hull-tweet-id='";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "' data-hull-tweet=\"";
  if (stack2 = helpers.text) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.text; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">Talk to this guy</button>\n      <span class='pull-right'>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.fromNow || depth0.fromNow),stack1 ? stack1.call(depth0, depth0.created_at, options) : helperMissing.call(depth0, "fromNow", depth0.created_at, options)))
    + "</span>\n      </p>\n    </div>\n  </li>\n  ";
  return buffer;
  }

  buffer += "<ul class=\"unstyled\">\n  ";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.tweets),stack1 == null || stack1 === false ? stack1 : stack1.statuses), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</ul>";
  return buffer;
  };