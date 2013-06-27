NewReader.Routers.Feeds = Backbone.Router.extend({
	initialize: function (options) {
		this.$el = options.$rootelement
	},
	
	routes: {
		"": 'index', 
		"feeds/:id": 'show'
	}, 
	
	index: function () {
		var index = new NewReader.Views.FeedsIndex({
			collection: NewReader.Store.feeds
		}); 
		
		this.$el.html(index.render().$el); 
	}, 
	
	show: function (id) {
		var feed = NewReader.Store.feeds.get(id); 
		var show = new NewReader.Views.FeedShow({
			model: feed
		}); 
		this.$el.html(show.render().$el); 
	}
	
});
