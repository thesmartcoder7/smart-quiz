// declaring variables
var correctAnswers = ["c", "b", "a", "b", "d", "c"];
var questionForm = document.querySelector(".quiz-form");
var scoreTag = document.querySelector(".result-display");
var reloadBtn = document.querySelector(".reload");
var totalScore = document.querySelector(".score");
var scoreRemark = document.querySelector(".remark");
var score = 0;
//form submission function to prevent the default redirection
if (questionForm) {
    questionForm.addEventListener("submit", function (e) {
        e.preventDefault(); //prevents browser redirection
        var userResponses = [
            questionForm.one.value,
            questionForm.two.value,
            questionForm.three.value,
            questionForm.four.value,
            questionForm.five.value,
            questionForm.six.value,
        ];
        // testing the score increment for every right answer functionality
        for (var item in userResponses) {
            if (userResponses[item] === correctAnswers[item]) {
                score++;
            }
        }
        var percentageScore = Number(((score / correctAnswers.length) * 100).toFixed(2)); // converts this string to Number since the .toFixed function converts the numbers to strings
        scoreTag.style.display = "flex";
        reloadBtn.style.display = "inline";
        totalScore.innerText = String(percentageScore);
        if (percentageScore > 80) {
            scoreRemark.innerText = "Impresively Done!";
        }
        else if (percentageScore >= 50 && percentageScore <= 80) {
            scoreRemark.innerText = "Fairly Done!";
        }
        else {
            scoreRemark.innerText = "Poorly Done!";
        }
        scrollTo({
            top: 0,
            behavior: "smooth"
        });
        questionForm.reset(); //resets the form
    });
}
if (reloadBtn) {
    reloadBtn.addEventListener("click", function () {
        window.location.reload(); // reloads the page for a new try once the user clicks
    });
}
