// global variables: 
	var DOMtimer = $(".timer-container");
	var DOMscore = $(".score-container");
	var DOMquestion = $(".question-container");
	var DOMmultChoice = $(".mult-choice-container");
	var DOMexplanation = $(".explanation-container");
	var DOMgif = $(".gif");


// all questions as objects: 
var question1 = {
	question: "<p>How did Daenerys Targaryen eventually hatch her dragon eggs?</p>",
	multChoices: {multChoice1: "<button id='choice1'>1. In a lightning storm</button>", 
				  multChoice2: "<button id='choice2'>2. In a funeral pyre</button>",
				  multChoice3: "<button id='choice3'>3. In a fireplace</button>",
				  multChoice4: "<button id='choice4'>4. In a frozen cave</button>"},
	explanation: "<p>At the end of Season 1, Daenerys Targaryen placed her three dragon eggs on the funeral pyre of her late husband. She then walked into the flames and emerged from the ashes the next morning holding three newly hatched dragons.</p>",
	correct: function() {
			return this.multChoices.multChoice2;
			},
	gif: "https://media.giphy.com/media/bVZrynojYe4qQ/giphy.gif",
	dataButtons: function() {
			$("#choice1").attr("data-multChoice", this.multChoices.multChoice1);
			$("#choice2").attr("data-multChoice", this.multChoices.multChoice2);
			$("#choice3").attr("data-multChoice", this.multChoices.multChoice3);
			$("#choice4").attr("data-multChoice", this.multChoices.multChoice4);

			for (var i = 1; i <=4; i++) {
				$("#choice" + i).addClass("button");
			}
	}
};





function pageSetup() {
	$(".start-page-container").html("");
	DOMtimer.append("<p>00:00</p>");
	DOMscore.append("<p>Score: 0</p>");
	DOMquestion.append(question1.question);
	DOMmultChoice.append(question1.multChoices.multChoice1, question1.multChoices.multChoice2, question1.multChoices.multChoice3, question1.multChoices.multChoice4);
	DOMgif.attr("src", question1.gif);
	question1.dataButtons();

	$(".button").on("click", function() {
		DOMexplanation.append(question1.explanation);
		console.log($(this).attr("data-multChoice"));
		console.log(question1.correct());


	if (($(this).attr("data-multChoice")) === (question1.correct())) {
	 	DOMexplanation.prepend("<p>Correct!</p>");
	} else {
		DOMexplanation.prepend("<p>Incorrect!</p>");
	}

	});

}






$("#start_button").on("click", pageSetup);