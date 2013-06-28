NewReader.Collections.Entries = Backbone.Collection.extend({	
	initialize : function (id) {
		this.model_id = id; 
	},
	
  model: NewReader.Models.Entry,
	url: function () {
		return "/feeds/"+(this.model_id)+"/entries"; 
	}, 
	
	render : function () {
		return this.model_id; 
	}

});
