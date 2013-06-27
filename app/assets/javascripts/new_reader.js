window.NewReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
	Store: {}, 
  initialize: function() { 
		NewReader.Store.feeds = new NewReader.Collections.Feeds(); 
		NewReader.Store.feeds.fetch({
			success: function () {
				new NewReader.Routers.Feeds({
					"$rootelement": $('#content')
				}); 
				Backbone.history.start(); 
			}
		}); 
		
  }
};

$(document).ready(function(){
	NewReader.initialize();
});
