this["Hull"] = this["Hull"] || {};
this["Hull"]["templates"] = this["Hull"]["templates"] || {};

this["Hull"]["templates"]["conversations/conversations"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this, blockHelperMissing=helpers.blockHelperMissing;

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
  buffer += "\n        <li class=\"well conversation\">\n          <h5>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.fromNow || depth0.fromNow),stack1 ? stack1.call(depth0, depth0.created_at, options) : helperMissing.call(depth0, "fromNow", depth0.created_at, options)))
    + "</h5>\n          ";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\n          <button class='btn pull-right'  data-hull-action='selectConversation' data-hull-id='";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "'>Let's talk about this</button>\n        </li>\n      ";
  return buffer;
  }

function program4(depth0,data) {
  
  
  return "\n    No convo for the moment...\n  ";
  }

  buffer += "<div class=\"hull-conversations\">\n  ";
  stack1 = helpers['if'].call(depth0, depth0.conversations, {hash:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;
  };

this["Hull"]["templates"]["snap/snap"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, self=this;

function program1(depth0,data) {
  
  
  return "\n<div data-hull-widget='conversations'></div>\n";
  }

function program3(depth0,data) {
  
  
  return "\n<div data-hull-widget='identity@hull'></div>\n";
  }

  buffer += "<h1>Welcome to snap !</h1>\n\n";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.loggedIn),stack1 == null || stack1 === false ? stack1 : stack1.twitter), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
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