// global variables: 
	var DOMtimer = $(".timer-container");
	var DOMscore = $(".score-container");
	var DOMquestion = $(".question-container");
	var DOMmultChoice = $(".mult-choice-container");
	var DOMexplanation = $(".explanation-container");
	var DOMgif = $(".gif");
	var correct = 0;
	var incorrect = 0;
	var total = 0;
	var gameOn = false;
	var intervalId;
	var count = 1;
	var nextQuestion;


// all questions as objects: 
var timer = {
	time: 30,
	reset: function() {
		timer.time = 30;
		$("#timer").html("Time Remaining: 00:" + timer.time);

	},
	start: function() {
		intervalId = setInterval(timer.count, 1000);
	},
	stop: function() {
		clearInterval(intervalId);
		// $("#timer").html("Time Remaining: Times Up!");

	},
	count: function() {
		timer.time--;
		$("#timer").html("Time Remaining: 00:" + timer.time);

	},
	timeout: function() {
		setTimeout(function() {
		gameOn = false;
		timer.stop();
		
		} , 30000);
	}
};
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
	},
	next: function() {
		return question2;
	}
};

var question2 = {
	question: "<p>How many times has Beric Dondarrion been brought back to life?</p>",
	multChoices: {multChoice1: "<button id='choice1'>1. Three times</button>", 
				  multChoice2: "<button id='choice2'>2. Five times</button>",
				  multChoice3: "<button id='choice3'>3. Six times</button>",
				  multChoice4: "<button id='choice4'>4. Seven times</button>"},
	explanation: "<p>Beric Dondarrion has been resurrected by the God of Light a total of six times. His constant cheating of death comes with a price: each time, he explains, he loses some of his memories and is less himself.</p>",
	correct: function() {
			return this.multChoices.multChoice3;
			},
	gif: "",
	dataButtons: function() {
			$("#choice1").attr("data-multChoice", this.multChoices.multChoice1);
			$("#choice2").attr("data-multChoice", this.multChoices.multChoice2);
			$("#choice3").attr("data-multChoice", this.multChoices.multChoice3);
			$("#choice4").attr("data-multChoice", this.multChoices.multChoice4);

			for (var i = 1; i <=4; i++) {
				$("#choice" + i).addClass("button");
			}
	},
	next: function() {
		return question3;
	}
};

var question3 = {
	question: "<p>How many times has Beric Dondarrion been brought back to life?</p>",
	multChoices: {multChoice1: "<button id='choice1'>1. Three times</button>", 
				  multChoice2: "<button id='choice2'>2. Five times</button>",
				  multChoice3: "<button id='choice3'>3. Six times</button>",
				  multChoice4: "<button id='choice4'>4. Seven times</button>"},
	explanation: "<p>Beric Dondarrion has been resurrected by the God of Light a total of six times. His constant cheating of death comes with a price: each time, he explains, he loses some of his memories and is less himself.</p>",
	correct: function() {
			return this.multChoices.multChoice3;
			},
	gif: "",
	dataButtons: function() {
			$("#choice1").attr("data-multChoice", this.multChoices.multChoice1);
			$("#choice2").attr("data-multChoice", this.multChoices.multChoice2);
			$("#choice3").attr("data-multChoice", this.multChoices.multChoice3);
			$("#choice4").attr("data-multChoice", this.multChoices.multChoice4);

			for (var i = 1; i <=4; i++) {
				$("#choice" + i).addClass("button");
			}
	},
	next: function() {
		return question4;
	}
};

var question4 = {
	question: "<p>How many times has Beric Dondarrion been brought back to life?</p>",
	multChoices: {multChoice1: "<button id='choice1'>1. Three times</button>", 
				  multChoice2: "<button id='choice2'>2. Five times</button>",
				  multChoice3: "<button id='choice3'>3. Six times</button>",
				  multChoice4: "<button id='choice4'>4. Seven times</button>"},
	explanation: "<p>Beric Dondarrion has been resurrected by the God of Light a total of six times. His constant cheating of death comes with a price: each time, he explains, he loses some of his memories and is less himself.</p>",
	correct: function() {
			return this.multChoices.multChoice3;
			},
	gif: "",
	dataButtons: function() {
			$("#choice1").attr("data-multChoice", this.multChoices.multChoice1);
			$("#choice2").attr("data-multChoice", this.multChoices.multChoice2);
			$("#choice3").attr("data-multChoice", this.multChoices.multChoice3);
			$("#choice4").attr("data-multChoice", this.multChoices.multChoice4);

			for (var i = 1; i <=4; i++) {
				$("#choice" + i).addClass("button");
			}
	},
	next: function() {
		return question1;
	}
};




function triviaQuestions(questionObject) {
	timer.reset();
	timer.start();
	timer.timeout();
	DOMquestion.empty();
	DOMmultChoice.empty();
	DOMexplanation.empty();
		DOMquestion.append(questionObject.question);
		DOMmultChoice.append(questionObject.multChoices.multChoice1, questionObject.multChoices.multChoice2, questionObject.multChoices.multChoice3, questionObject.multChoices.multChoice4);
		DOMgif.attr("src", questionObject.gif);
		questionObject.dataButtons();

		gameOn = true;

			$(".button").on("click", function() {
				if (gameOn) {
					DOMexplanation.append(questionObject.explanation);

					if (($(this).attr("data-multChoice")) === (questionObject.correct())) {
						DOMexplanation.prepend("<p>Correct!</p>");
						correct++;
						count++;
						total = correct + incorrect;
						$("#score").html("Score: " + correct + "/" + total);
						gameOn = false;
						timer.stop();
						setTimeout(triviaQuestions, 7000, questionObject.next());


					} else {
						DOMexplanation.prepend("<p>Incorrect!</p>");
						incorrect++;
						count++;
						total = correct + incorrect;
						$("#score").html("Score: " + correct + "/" + total);
						gameOn = false;
						timer.stop();
						setTimeout(triviaQuestions, 7000, questionObject.next());
					}
				}
			});
	
}



function pageSetup() {

	$(".start-page-container").html("");
	
	DOMtimer.append("<p id='timer'>Time Remaining: 00:30</p>");
	DOMscore.append("<p id='score'>Score: " + correct + "</p>");
	
	triviaQuestions(question1);

}






$("#start_button").on("click", pageSetup);