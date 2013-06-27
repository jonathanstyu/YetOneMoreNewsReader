NewReader.Views.FeedShow = Backbone.View.extend({

  template: JST['feeds/show_feed'], 
	
	render: function () {

		var content = this.template({
			feed: this.model
		}); 
		this.$el.html(content); 
		return this; 
	}

});
