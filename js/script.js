// declaring variables
const correctAnswers = ["c", "b", "a", "b", "d", "c"];
const questionForm = document.querySelector(".quiz-form");
const scoreTag = document.querySelector(".result-display");
var totalScore = document.querySelector(".score");
var scoreRemark = document.querySelector(".remark");

//form submission function to prevent the default redirection
questionForm.addEventListener("submit", (e) => {
    // alert("form has been submitted!");
    e.preventDefault();
});
