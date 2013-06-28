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
				
				// This is how you keep this view isolated in its own box
				$('#sidebar').html(new NewReader.Views.FeedsIndex({collection: NewReader.Store.feeds}).render().$el); 
				
				new NewReader.Routers.Feeds({
					"$rootelement": $('#main')
				}); 
				Backbone.history.start(); 
			}
		}); 
		
  }
};

$(document).ready(function(){
	NewReader.initialize();
});
