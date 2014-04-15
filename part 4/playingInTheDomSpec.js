describe("PlayingInTheDom", function(){
	it("Should be able to find an element by id", function(){
		var expectedElement = affix("#someId"),
		returnedElement = PlayingInTheDom.findById("someId");
		expect(expectedElement[0]).toBe(returnedElement);
	});
	it("Should be able to find an element by class", function(){
		affix("div.myClass a.myClass");
		var returnedElements = PlayingInTheDom.findByClass("myClass");
		expect(returnedElements.length).toBe(2);
	})
});