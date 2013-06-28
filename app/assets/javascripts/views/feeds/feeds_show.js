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
		var that = this; 
		var content = this.template({
			feed: this.model
		}); 
		
		// Hands it off to the entries
		var entryview = new NewReader.Views.EntriesIndex({
			collection: that.model.entries
		}); 
		var entries_content = entryview.render().$el.html()
		
		// Merge the two together and ship them together
		$(content).append(entries_content); 

		this.$el.html(content + entries_content); 
		return this; 
	}, 
	
	refresh: function () {
		// console.log(this.model.entries.render()); 
		this.model.entries.fetch({
			success: function (model, response) {
				console.log(model); 
				console.log(response);
			}
		}); 
	}

});
