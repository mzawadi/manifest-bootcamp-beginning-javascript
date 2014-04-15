var MakingTheGrade = {
  calculateGrades: function () {
    var gradeForm = document.getElementById("gradesForm"),
      grades = gradeForm.getElementsByClassName("grade"),
      finalGradePercentage = 0,
      i,
      finalGradeInput = document.getElementById("gradePercent");
    for (i = 0; i < grades.length; i++) {
      var gradePercentage = grades[i].value,
        parentRow = grades[i].parentNode.parentNode,
        letterGrade = parentRow.getElementsByClassName("letter")[0];
      MakingTheGrade.calculateLetterGrade(gradePercentage, letterGrade);

      finalGradePercentage += parseInt(gradePercentage);
    }
    finalGradePercentage = finalGradePercentage / grades.length;

    finalGradeInput.value = Math.round(finalGradePercentage);
    MakingTheGrade.calculateFinalGrade();
  },

  calculateLetterGrade: function (gradeInput, letterInput) {
    if (gradeInput < 50) {
      letterInput.value = "F";
    } else if (gradeInput < 65) {
      letterInput.value = "D";
    } else if (gradeInput < 75) {
      letterInput.value = "C";
    } else if (gradeInput < 85) {
      letterInput.value = "B";
    } else if (gradeInput < 95) {
      letterInput.value = "A";
    } else {
      letterInput.value = "A+";
    }
  },

  calculateFinalGrade: function () {
    var finalGradePercentage = document.getElementById("gradePercent").value,
      finalLetterGradeElement = document.getElementById("finalGrade");
    MakingTheGrade.calculateLetterGrade(finalGradePercentage, finalLetterGradeElement);
  }
};