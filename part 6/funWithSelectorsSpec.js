describe("FunWithSelectors", function(){
	beforeEach(function() {
	    loadFixtures("examplePagePart6.html");
  	});
  	it("can change the value of a div", function(){
  		var expectedText = "new text";
  		expect($(".changeMe").text()).toBe("Starting Text")
  		FunWithSelectors.changeTheText("changeMe", expectedText);
  		expect($(".changeMe").text()).toBe(expectedText);
  	})
  	it("can change the value of a select", function(){
  		var newSelectedValue = "2";
  		expect($(".awesomeSelector").val()).toBe("1");
  		FunWithSelectors.changeSelectedOption("awesomeSelector", "2")
  		expect($(".awesomeSelector").val()).toBe("2");
  	})
  	it("can change the css of a element", function(){
  		var newColor = "rgb(255, 255, 255)";
  		expect($(".colorMe").css("background-color")).toBe("rgb(0, 0, 0)")
  		FunWithSelectors.changeColor("colorMe", newColor);
  		expect($(".colorMe").css("background-color")).toBe(newColor);
  	})
});