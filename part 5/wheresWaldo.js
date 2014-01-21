var WheresWaldo = {
	findMyChildren: function(searchClass) {
		return $("."+searchClass).children().size();
	},
	findMyParent: function(startingClass) {
		return $("."+startingClass).parent().attr("class");
	},
	findDecendent: function(startingClass, desiredDecendent){
		return $("."+startingClass).find("."+desiredDecendent).text();
	},
	findAncestor: function(startingClass, desiredAncestor) {
		return $("."+ startingClass).parents("." + desiredAncestor).attr("data-age");
	}, 
	oBrotherWhereArtThou: function(me) {
		return $("."+me).siblings().size();
	}
}