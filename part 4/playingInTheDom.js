var PlayingInTheDom = {
	findById: function(searchId){
		return document.getElementById(searchId);
	},
	findByClass: function(searchClass){
		return document.getElementsByClassName(searchClass);
	}
}