NewReader.Models.Feed = Backbone.Model.extend({

	parse: function (response) {

		var entries = new NewReader.Collections.Entries(); 
		_.each(response.entries, function (entry) {
			var entry = new NewReader.Models.Entry(entry); 
			entries.add(entry); 
		})
		this.entries = entries; 
		return response;
	}, 
	
	toJSON: function () {
		
	}

});
