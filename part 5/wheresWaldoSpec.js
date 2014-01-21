describe("WheresWaldo", function(){
	beforeEach(function() {
	    loadFixtures("examplePage.html");
  	});
	it("should be able to find the main div", function(){
		var count = WheresWaldo.findMyChildren("mainDiv");
		expect(count).toBe(4);
	});
	it("should be able to find parent from child", function(){
		var returnedClass = WheresWaldo.findMyParent("startHere");
		expect(returnedClass).toBe("findMe");
	})
	it("should be able to find decendent", function(){
		var returnedText = WheresWaldo.findDecendent("grandpa", "grandchild");
		expect(returnedText).toBe("Winning");
	})
	it("should be able to find ancestor", function(){
		var returnedText = WheresWaldo.findAncestor("grandchild", "grandpa");
		expect(returnedText).toBe("I'm Old");
	})
	it("should be able to find it's broskies", function(){
		var count = WheresWaldo.oBrotherWhereArtThou("cletus");
		expect(count).toBe(4);
	})
});