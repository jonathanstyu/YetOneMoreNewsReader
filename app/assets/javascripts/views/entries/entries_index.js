NewReader.Views.EntriesIndex = Backbone.View.extend({
	initialize: function () {
		this.listenTo(this.collection, "change:title", this.render); 
		this.listenTo(this.collection, 'add', this.render); 
		this.listenTo(this.collection, 'remove', this.render); 
	},

  template: JST['entries/index'], 
	
	render: function () {
		var that = this; 

		var content = that.template({
			entries: that.collection
		}); 
		this.$el.html(content);  
		return this; 
	}

});
