describe("MathIsFun", function(){
	var firstNumber,
	secondNumber;
	it("should be able to add 1+1", function(){
		firstNumber = 1;
		secondNumber = 1;
		var expectedResult = 2, 
		actualResult;

		actualResult = MathIsFun.addNumbers(firstNumber, secondNumber);
		expect(actualResult).toBe(expectedResult);
	});
	
});