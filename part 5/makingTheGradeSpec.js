describe("MakingTheGrade", function () {
  describe("should be able to calculate grades", function () {
    describe("calculate grades should calculate individual letter grades and final total", function () {
      it("does all the calculations", function () {
        var value1 = 10;
        var value2 = 50;
        var value3 = 10;
        var expectedAverage = Math.round((value1 + value2 + value3) / 3).toString();
        var input1 = affix("tr td input.grade[value=" + value1 + "]");
        var input2 = affix("tr td input.grade[value=" + value2 + "]");
        var input3 = affix("tr td input.grade[value=" + value3 + "]");
        var finalGradeInput = affix("input#gradePercent");

        affix("form#gradesForm");
        document.getElementById("gradesForm").appendChild(input1[0]);
        document.getElementById("gradesForm").appendChild(input2[0]);
        document.getElementById("gradesForm").appendChild(input3[0]);

        spyOn(MakingTheGrade, "calculateLetterGrade");
        spyOn(MakingTheGrade, "calculateFinalGrade");

        MakingTheGrade.calculateGrades();

        expect(MakingTheGrade.calculateLetterGrade).toHaveBeenCalled();
        expect(MakingTheGrade.calculateFinalGrade).toHaveBeenCalled();

        expect(finalGradeInput[0].value).toBe(expectedAverage);
      });
    });
    describe("calculate letter grade should return correct letter grade for percentage", function () {
      it("returns 'F' for values under 50", function () {
        var letterInput = affix("input#letterInput");
        MakingTheGrade.calculateLetterGrade(49, letterInput);
        expect(letterInput.value).toBe("F");
      });
      it("returns 'D' for values under 65", function () {
        var letterInput = affix("input#letterInput");
        MakingTheGrade.calculateLetterGrade(64, letterInput);
        expect(letterInput.value).toBe("D");
      });
      it("returns 'C' for values under 75", function () {
        var letterInput = affix("input#letterInput");
        MakingTheGrade.calculateLetterGrade(74, letterInput);
        expect(letterInput.value).toBe("C");
      });
      it("returns 'B' for values under 85", function () {
        var letterInput = affix("input#letterInput");
        MakingTheGrade.calculateLetterGrade(84, letterInput);
        expect(letterInput.value).toBe("B");
      });
      it("returns 'A' for values under 95", function () {
        var letterInput = affix("input#letterInput");
        MakingTheGrade.calculateLetterGrade(94, letterInput);
        expect(letterInput.value).toBe("A");
      });
      it("returns 'A+' for anything at or above 95", function () {
        var letterInput = affix("input#letterInput");
        MakingTheGrade.calculateLetterGrade(95, letterInput);
        expect(letterInput.value).toBe("A+");
      });
    });
    describe("calculate final grade should set final letter grade for element percentage", function () {
      it("calculates the final grade", function () {
        var finalGradePercentageInput = affix("input#gradePercent[value=10]"),
          finalLetterGradeInput = affix("input#finalGrade"),
          finalGradePercentage = finalGradePercentageInput[0].value;
        spyOn(MakingTheGrade, "calculateLetterGrade");
        MakingTheGrade.calculateFinalGrade();
        expect(MakingTheGrade.calculateLetterGrade).toHaveBeenCalledWith(finalGradePercentage, finalLetterGradeInput[0]);

      });
    });
  });
});