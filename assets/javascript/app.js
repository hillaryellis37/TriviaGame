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
	var timeoutInterval;
	var count = 1;
	var nextQ;

function gameOver() {
	DOMquestion.empty();
	DOMmultChoice.empty();
	DOMexplanation.empty();
	DOMquestion.empty();
	DOMmultChoice.empty();
	var gameOverAudio = new Audio("assets/audio/hbo.mp3");
	gameOverAudio.play();



	if (correct >= 9) {

		$(".start-page-container").append("<p>The seven kingdoms bow before you! You scored " + correct + " out of " + total + "</p>");
	} 
	else if ((6 <= correct) && (correct <= 8)) {

		$(".start-page-container").append("<p>You're a serious threat! You scored " + correct + " out of " + total + "</p>");
	}

	else if (correct <= 5) {

		$(".start-page-container").append("<p>Prepare to join the night's watch! You scored " + correct + " out of " +  total + "</p>");
	}

	$(".start-page-container").append("<button class='btn'id='play_again'>Play Again</button>");

	$("#play_again").on("click", function() {
		correct = 0;
		incorrect = 0;
		timer.reset();
		total = correct + incorrect;
		$("#score").html("Score: " + correct + "/" + total);
		triviaQuestions(question1);
	});
}


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
		timeoutInterval = setTimeout(function() {
		if (gameOn) {
			gameOn = false;
			timer.stop();
			incorrect++;
			total = correct + incorrect;
			$("#score").html("Score: " + correct + "/" + total);
			DOMexplanation.append("<p style='color: red;'>You have run out of time! Please press next to go to the next question: </p>");
			DOMexplanation.append("<button id='nextQ'>Next</button>");
				$("#nextQ").on("click", function() {
					triviaQuestions(nextQ);

				
				});
			}			
		} , 30000);
	},
	clearTimeout: function() {
		clearTimeout(timeoutInterval);
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
				$("#choice" + i).addClass("btn button");
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
	gif: "https://media.giphy.com/media/13l0x798RdO8Io/giphy.gif",
	dataButtons: function() {
			$("#choice1").attr("data-multChoice", this.multChoices.multChoice1);
			$("#choice2").attr("data-multChoice", this.multChoices.multChoice2);
			$("#choice3").attr("data-multChoice", this.multChoices.multChoice3);
			$("#choice4").attr("data-multChoice", this.multChoices.multChoice4);

			for (var i = 1; i <=4; i++) {
				$("#choice" + i).addClass("btn button");
			}
	},
	next: function() {
		return question3;
	}
};

var question3 = {
	question: "<p>Besides dragonglass, what is the only other substance capable of defeating White Walkers?</p>",
	multChoices: {multChoice1: "<button id='choice1'>1. Weirwood</button>", 
				  multChoice2: "<button id='choice2'>2. Wildfire</button>",
				  multChoice3: "<button id='choice3'>3. Valyrian Steel</button>",
				  multChoice4: "<button id='choice4'>4. Snowballs</button>"},
	explanation: "<p>Valyrian Steel is not only exceptionally sharp, strong and free of maintenance, but is also capable of taking down an immortal White Walker. The metal is easily identified by its distinctive rippled pattern.</p>",
	correct: function() {
			return this.multChoices.multChoice3;
			},
	gif: "https://media.giphy.com/media/ESTkKpEPVG4aA/giphy.gif",
	dataButtons: function() {
			$("#choice1").attr("data-multChoice", this.multChoices.multChoice1);
			$("#choice2").attr("data-multChoice", this.multChoices.multChoice2);
			$("#choice3").attr("data-multChoice", this.multChoices.multChoice3);
			$("#choice4").attr("data-multChoice", this.multChoices.multChoice4);

			for (var i = 1; i <=4; i++) {
				$("#choice" + i).addClass("btn button");
			}
	},
	next: function() {
		return question4;
	}
};

var question4 = {
	question: "<p>American actor Peter Dinklage, who plays Tyrion Lannister, also had a starring role in this fantasy franchise: </p>",
	multChoices: {multChoice1: "<button id='choice1'>1. The Chronicles of Narnia</button>", 
				  multChoice2: "<button id='choice2'>2. Highlander</button>",
				  multChoice3: "<button id='choice3'>3. The Legend of Zelda</button>",
				  multChoice4: "<button id='choice4'>4. Lord of the Rings</button>"},
	explanation: '<p>Dinklage played Trumpkin in the 2008 film "The Chronicles of Narnia: Prince Caspian." He was not only the first person cast for the "Game of Thrones" series, but also the only person author George R.R. Martin wanted to play Tyrion.</p>',
	correct: function() {
			return this.multChoices.multChoice1;
			},
	gif: "https://media.giphy.com/media/iwVHUKnyvZKEg/giphy.gif",
	dataButtons: function() {
			$("#choice1").attr("data-multChoice", this.multChoices.multChoice1);
			$("#choice2").attr("data-multChoice", this.multChoices.multChoice2);
			$("#choice3").attr("data-multChoice", this.multChoices.multChoice3);
			$("#choice4").attr("data-multChoice", this.multChoices.multChoice4);

			for (var i = 1; i <=4; i++) {
				$("#choice" + i).addClass("btn button");
			}
	},
	next: function() {
		return question5;
	}
};

var question5 = {
	question: "<p>The name of King Tommen's favorite cat is: </p>",
	multChoices: {multChoice1: "<button id='choice1'>1. Battle Pus</button>", 
				  multChoice2: "<button id='choice2'>2. Little Lion</button>",
				  multChoice3: "<button id='choice3'>3. Ser Pounce</button>",
				  multChoice4: "<button id='choice4'>4. Prince Fuzzy</button>"},
	explanation: '<p>In Season 4, Ser Pounce is introduced. Its appearance caused something of a stir on the Internet, with fans demanding that Ser Pounce be featured in future episodes. According to one writer, that likely will not happen. "I will say that cat was a nightmare to work with."</p>',
	correct: function() {
			return this.multChoices.multChoice3;
			},
	gif: "https://media.giphy.com/media/G5tv78Lpmkmu4/giphy.gif",
	dataButtons: function() {
			$("#choice1").attr("data-multChoice", this.multChoices.multChoice1);
			$("#choice2").attr("data-multChoice", this.multChoices.multChoice2);
			$("#choice3").attr("data-multChoice", this.multChoices.multChoice3);
			$("#choice4").attr("data-multChoice", this.multChoices.multChoice4);

			for (var i = 1; i <=4; i++) {
				$("#choice" + i).addClass("btn button");
			}
	},
	next: function() {
		return question6;
	}
};

var question6 = {
	question: "<p>What was the name of Ned Stark's great sword?</p>",
	multChoices: {multChoice1: "<button id='choice1'>1. Ice</button>", 
				  multChoice2: "<button id='choice2'>2. Widow's Wail</button>",
				  multChoice3: "<button id='choice3'>3. Oathkeeper</button>",
				  multChoice4: "<button id='choice4'>4. Northguard</button>"},
	explanation: "<p>Ice was the official sword of the Lord of Winterfell, forged from Valyrian steel and handed down over the ages. After being used to behead Ned Stark at the end of Season 1, it was subsequently melted down to forge two new swords – the Oathkeeper and Widow's Wail.</p>",
	correct: function() {
			return this.multChoices.multChoice1;
			},
	gif: "https://media.giphy.com/media/kzlGvANuSMs0M/giphy.gif",
	dataButtons: function() {
			$("#choice1").attr("data-multChoice", this.multChoices.multChoice1);
			$("#choice2").attr("data-multChoice", this.multChoices.multChoice2);
			$("#choice3").attr("data-multChoice", this.multChoices.multChoice3);
			$("#choice4").attr("data-multChoice", this.multChoices.multChoice4);

			for (var i = 1; i <=4; i++) {
				$("#choice" + i).addClass("btn button");
			}
	},
	next: function() {
		return question7;
	}
};

var question7 = {
	question: "<p>Who shoots the flaming arrow that subsequently destroy's Stannis' fleet in Blackwater Bay?</p>",
	multChoices: {multChoice1: "<button id='choice1'>1. Tyrion Lannister</button>", 
				  multChoice2: "<button id='choice2'>2. King Joffrey</button>",
				  multChoice3: "<button id='choice3'>3. Jaime Lannister</button>",
				  multChoice4: "<button id='choice4'>4. Bronn</button>"},
	explanation: "<p>After a signal from Tyrion, Bronn shoots a flaming arrow into a floating trap of wildfire around Stannis Baratheon's fleet. The explosion that follows destroys dozens of ships and effectively wins the battle for King Joffrey.</p>",
	correct: function() {
			return this.multChoices.multChoice4;
			},
	gif: "https://media.giphy.com/media/a8npXvq6M7Cqk/giphy.gif",
	dataButtons: function() {
			$("#choice1").attr("data-multChoice", this.multChoices.multChoice1);
			$("#choice2").attr("data-multChoice", this.multChoices.multChoice2);
			$("#choice3").attr("data-multChoice", this.multChoices.multChoice3);
			$("#choice4").attr("data-multChoice", this.multChoices.multChoice4);

			for (var i = 1; i <=4; i++) {
				$("#choice" + i).addClass("btn button");
			}
	},
	next: function() {
		return question8;
	}
};

var question8 = {
	question: "<p>Prince Oberyn Martell is nicknamed the 'Red Viper' because of his combat and: </p>",
	multChoices: {multChoice1: "<button id='choice1'>1. Pride in drawing blood first</button>", 
				  multChoice2: "<button id='choice2'>2. Knowledge of poisons</button>",
				  multChoice3: "<button id='choice3'>3. Nighttime attacks</button>",
				  multChoice4: "<button id='choice4'>4. Ruby-colored armor</button>"},
	explanation: '<p>Oberyn Martell is skilled not only in combat, but also in the use of deadly potions. In the battle against Ser Gregor Clegane that ultimately cost him his life, Martell managed to severely wound "the mountain" with a spear tip coated in poisonous Manticore venom.</p>',
	correct: function() {
			return this.multChoices.multChoice2;
			},
	gif: "https://media.giphy.com/media/iwVHUKnyvZKEg/giphy.gif",
	dataButtons: function() {
			$("#choice1").attr("data-multChoice", this.multChoices.multChoice1);
			$("#choice2").attr("data-multChoice", this.multChoices.multChoice2);
			$("#choice3").attr("data-multChoice", this.multChoices.multChoice3);
			$("#choice4").attr("data-multChoice", this.multChoices.multChoice4);

			for (var i = 1; i <=4; i++) {
				$("#choice" + i).addClass("btn button");
			}
	},
	next: function() {
		return question9;
	}
};

var question9 = {
	question: "<p>Arya's punishment for stealing from the Many-Face God is: </p>",
	multChoices: {multChoice1: "<button id='choice1'>1. Death</button>", 
				  multChoice2: "<button id='choice2'>2. Memory Loss</button>",
				  multChoice3: "<button id='choice3'>3. Blindness</button>",
				  multChoice4: "<button id='choice4'>4. Uncontrollable laughter</button>"},
	explanation: "<p>After Arya takes a life that was not hers to kill, she is rendered blind as punishment. The scene, at the end of Season 5, is a new twist on Arya's efforts to become a 'faceless' assassin.</p>",
	correct: function() {
			return this.multChoices.multChoice3;
			},
	gif: "https://media.giphy.com/media/ZTMyRjoNbPqWk/giphy.gif",
	dataButtons: function() {
			$("#choice1").attr("data-multChoice", this.multChoices.multChoice1);
			$("#choice2").attr("data-multChoice", this.multChoices.multChoice2);
			$("#choice3").attr("data-multChoice", this.multChoices.multChoice3);
			$("#choice4").attr("data-multChoice", this.multChoices.multChoice4);

			for (var i = 1; i <=4; i++) {
				$("#choice" + i).addClass("btn button");
			}
	},
	next: function() {
		return question10;
	}
};

var question10 = {
	question: "<p>Which Stark family direwolf was killed in retaliation for an attack on Prince Joffrey?</p>",
	multChoices: {multChoice1: "<button id='choice1'>1. Ghost</button>", 
				  multChoice2: "<button id='choice2'>2. Lady</button>",
				  multChoice3: "<button id='choice3'>3. Nymeria</button>",
				  multChoice4: "<button id='choice4'>4. Summer</button>"},
	explanation: '<p>After the direwolf Nymeria flees into the woods following a defensive attack against Prince Joffrey, Queen Cersei Lannister orders the execution of her pack sister, Lady. Now, two of the four remaining Stark family direwolves are in places unknown.</p>',
	correct: function() {
			return this.multChoices.multChoice2;
			},
	gif: "https://media.giphy.com/media/eT7uKeHH5EkOA/giphy.gif",
	dataButtons: function() {
			$("#choice1").attr("data-multChoice", this.multChoices.multChoice1);
			$("#choice2").attr("data-multChoice", this.multChoices.multChoice2);
			$("#choice3").attr("data-multChoice", this.multChoices.multChoice3);
			$("#choice4").attr("data-multChoice", this.multChoices.multChoice4);

			for (var i = 1; i <=4; i++) {
				$("#choice" + i).addClass("btn button btn");
			}
	},
	next: function() {
		return question1;
	}
};


function triviaQuestions(questionObject) {
	nextQ = questionObject.next();

	$(".start-page-container").empty();
	timer.clearTimeout();
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
						$(this).css("background-color", "#4CAF50");
						DOMexplanation.prepend("<p>Correct!</p>");
						correct++;
						count++;
						total = correct + incorrect;
						$("#score").html("Score: " + correct + "/" + total);
						gameOn = false;
						timer.stop();
						if (total < 10) {
							setTimeout(triviaQuestions, 1000, questionObject.next());
						} else {
							setTimeout(gameOver, 1000);
						}

					} else {
						DOMexplanation.prepend("<p>Incorrect!</p>");
						$(this).css("background-color", "red");
						incorrect++;
						count++;
						total = correct + incorrect;
						$("#score").html("Score: " + correct + "/" + total);
						gameOn = false;
						timer.stop();
						if (total < 10) {
							setTimeout(triviaQuestions, 1000, questionObject.next());
						} else {
							setTimeout(gameOver, 1000);
						}
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