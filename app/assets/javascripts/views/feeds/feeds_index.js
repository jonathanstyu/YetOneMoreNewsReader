NewReader.Views.FeedsIndex = Backbone.View.extend({
	
	initialize: function () {
		this.listenTo(this.collection, "change:title", this.render); 
		this.listenTo(this.collection, 'add', this.render); 
		this.listenTo(this.collection, 'remove', this.render); 
	},

  template: JST['feeds/index'], 
	
	render: function () {
		var that = this; 
		var content = this.template({
			feeds: that.collection
		}); 
		this.$el.html(content); 
		return this; 
	}

});
