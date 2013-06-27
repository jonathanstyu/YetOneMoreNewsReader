NewReader.Views.FeedShow = Backbone.View.extend({
	
	initialize: function () {
		this.listenTo(this.model, 'change:title', this.render);
		this.listenTo(this.model, 'change:url', this.render);
	},
	
	events: {
		'click button#refresh': "refresh"
	},

  template: JST['feeds/show_feed'], 
	
	render: function () {

		var content = this.template({
			feed: this.model
		}); 
		this.$el.html(content); 
		return this; 
	}, 
	
	refresh: function () {
		console.log("hello there"); 
	}

});
