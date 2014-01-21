var FunWithSelectors = {
	changeTheText: function(element, newText){
		$("."+element).text(newText);
	},
	changeSelectedOption: function(element, newValue){
		$("."+element).val(newValue);
	},
	changeColor: function(element, newStyle){
		$("."+element).css("background-color", newStyle);
	}
}