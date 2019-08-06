
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;

	var correct = 0;


	if (question1 == "Paris") {
		correct++;
}
	if (question2 == "Todas las anteriores") {
		correct++;
}
	if (question3 == "Huevo") {
		correct++;
	}

	if (question4 == "Todas") {
		correct++;
	}

	if (question5 == "raro") {
		correct++;
	}

	var pictures = ["img/win.gif", "img/meh.gif", "img/lose.gif"];
	var messages = ["Excelente!", "Bien...", "Suerte la proxima :)"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 5) {
		score = 1;
	}

	if (correct == 5) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number").innerHTML ="Un total de " + correct + " respuestas fueron correctas.";
	document.getElementById("picture").src = pictures[score];
	}
