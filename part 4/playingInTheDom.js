var PlayingInTheDom = {
	findById: function(searchId){
		return $("#"+searchId).size();
	},
	findByClassPureJavascript: function(searchClass){
		return document.getElementsByClassName(searchClass).length;
	},
	findByClass: function(searchClass){
		return $("."+searchClass).size();
	},
	findByAttribute: function(searchAttribute){
		return $("[data-"+searchAttribute+"]").size();
	}
}