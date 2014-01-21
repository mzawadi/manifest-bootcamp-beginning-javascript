describe("MathIsFun", function(){
	var firstNumber;
	var secondNumber;

	it("should be able to add 1+1", function(){
		firstNumber = 1;
		secondNumber = 1;
		var expectedResult = 2, 
		actualResult;

		actualResult = MathIsFun.addNumbers(firstNumber, secondNumber);
		expect(actualResult).toBe(expectedResult);
	});

	it("should be able to multiply 7*6", function(){
		firstNumber = 7;
		secondNumber = 6;
		var expectedResult = 42,
		actualResult;

		actualResult = MathIsFun.multiplyNumbers(firstNumber, secondNumber);
		expect(actualResult).toBe(expectedResult);
	});

	it("should be able to divide 45/9", function(){
		firstNumber = 45;
		secondNumber = 9;
		var expectedResult = 5,
		actualResult;

		actualResult = MathIsFun.divideNumbers(firstNumber, secondNumber);
		expect(actualResult).toBe(expectedResult);
	});

	it("should be able to subtract 2-1", function(){
		firstNumber = 2;
		secondNumber = 1;
		var expectedResult = 1,
		actualResult;

		actualResult = MathIsFun.subtractNumbers(firstNumber, secondNumber);
		expect(actualResult).toBe(expectedResult);
	});

	it("math functions throws NaN when adding one number", function(){
		actualResult = MathIsFun.addNumbers(1);
		expect(actualResult).isNaN;
	});

	it("math functions throws NaN when subtracting one number", function(){
		actualResult = MathIsFun.subtractNumbers(1);
		expect(actualResult).isNaN;
	});

	it("math functions throws NaN when dividing one number", function(){
		actualResult = MathIsFun.divideNumbers(1);
		expect(actualResult).isNaN;
	});

	it("math functions throws NaN when subtracting one number", function(){
		actualResult = MathIsFun.subtractNumbers(1);
		expect(actualResult).isNaN;
	});

	it("math functions throws NaN when passing two strings", function(){
		actualResult = MathIsFun.addNumbers("bob", "smith");
		expect(actualResult).isNaN;
	});

	it("math functions throws NaN when passing two arrays", function(){
		actualResult = MathIsFun.addNumbers([], []);
		expect(actualResult).isNaN;
		expect(actualResult).toBe("");
	});

	it("math functions throws NaN when passing two objects", function(){
		actualResult = MathIsFun.addNumbers({}, {});
		var object = {};
		expect(actualResult).isNaN;
		expect(actualResult.toString()).toBe(object.toString()+object.toString());
	});

	it("math functions throws NaN when passing array and then object", function(){
		actualResult = MathIsFun.addNumbers([], {});
		var object = {};
		expect(actualResult).isNaN;
		expect(actualResult.toString()).toBe(object.toString());
	});

	it("math functions throws NaN when passing object and then array", function(){
		actualResult = MathIsFun.addNumbers({}, []);
		var object = {};
		expect(actualResult).isNaN;
		expect(actualResult.toString()).toBe(object.toString());
	});
});