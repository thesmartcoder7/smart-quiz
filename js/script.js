// declaring variables
const correctAnswers = ["c", "b", "a", "b", "d", "c"];
const questionForm = document.querySelector(".quiz-form");
const scoreTag = document.querySelector(".result-display");
var totalScore = document.querySelector(".score");
var scoreRemark = document.querySelector(".remark");

//form submission function to prevent the default redirection
questionForm.addEventListener("submit", (e) => {
    e.preventDefault(); //prevents browser redirection

    let userResponses = [
        questionForm.one.value,
        questionForm.two.value,
        questionForm.three.value,
        questionForm.four.value,
        questionForm.five.value,
        questionForm.six.value,
    ];

    //testing if the user responses are being recorded
    for (response in userResponses) {
        console.log(userResponses[response]);
    }
});
