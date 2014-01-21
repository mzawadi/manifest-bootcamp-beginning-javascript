describe("PlayingInTheDom", function(){
	it("Should be able to find an element by id", function(){
		affix("#someId");
		var count = PlayingInTheDom.findById("someId");
		expect(count).toBe(1);
	});
	it("Should be able to find an element by class", function(){
		affix("div.myClass a.myClass");
		var count = PlayingInTheDom.findByClass("myClass");
		expect(count).toBe(2);
	})
	it("Should be able to find an element by class with pure javascript", function(){
		affix("div.myClass a.myClass");
		var count = PlayingInTheDom.findByClassPureJavascript("myClass");
		expect(count).toBe(2);
	})
	it("Should be able to find an element by data attribute", function(){
		affix("[data-myAttribute]");
		var count = PlayingInTheDom.findByAttribute("myAttribute");
		expect(count).toBe(1);
	})
});