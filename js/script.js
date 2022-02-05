// declaring variables
const correctAnswers = ["c", "b", "a", "b", "d", "c"];
const questionForm = document.querySelector(".quiz-form");
const scoreTag = document.querySelector(".result-display");
var totalScore = document.querySelector(".score");
var scoreRemark = document.querySelector(".remark");
var score = 0;

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

    // testing the score increment for every right answer functionality
    for (item in userResponses) {
        if (userResponses[item] === correctAnswers[item]) {
            score++;
        }
    }
    percentageScore = Number(
        ((score / correctAnswers.length) * 100).toFixed(2)
    );

    scoreTag.style.display = "flex";
    totalScore.innerText = percentageScore;
    if (percentageScore > 80) {
        scoreRemark.innerText = "Impresively Done!";
    } else if (percentageScore >= 50 && percentageScore <= 80) {
        scoreRemark.innerText = "Fairly Done!";
    } else {
        scoreRemark.innerText = "Poorly Done!";
    }
});
