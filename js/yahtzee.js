			//Array for the five dice roll values
			var Rolls = new Array (0, 0, 0, 0, 0);
			//Stores the current number of rolls, can be 0-3
			var NumberRolls = 0;
			//High score for multiple games
			var HighScore = 0;
			//Ctrl for values inside the readonly input boxes
			var boxCtrl;
			//Ctrl for the checkboxes
			var checkCtrl;
			//Stores the value of dice rolls for the top portion, 3 of a kind, 4 of a kind,
			//chance, the top total, and the bottom total when doing calcuations
			var Sum = 0;			

			//If a user checks/unchecks a box they already checked, they will be informed
			//that they already added a score value to that box.
			function AddAlert(){
				alert("You already added a score of " + boxCtrl.value + " to this box.");
			}

			//Adds all of the dice that are ones to the box for ones, when the checkbox is checked,
			//so long as the user has not done so already.  If the user has already added a score
			//value, the AddAlert() function is called to let them know they can't do that.
			function AddOnes(){
				checkCtrl = document.getElementById("keepOnes");
				boxCtrl = document.getElementById("OnesValue");

				if(checkCtrl.checked && boxCtrl.value == -1){
					for (var LoopCounter = 0; LoopCounter < Rolls.length; LoopCounter++){
					 	if (Rolls[LoopCounter] == 1){					 		
					 		Sum += Rolls[LoopCounter];					 	
					 	}
					}					
					boxCtrl.value = Sum;
					ResetAfterAdd();
				}else{
					AddAlert();
				}				
			}

			//Adds all of the dice that are twos to the box for twos, when the checkbox is checked,
			//so long as the user has not done so already.  If the user has already added a score
			//value, the AddAlert() function is called to let them know they can't do that.
			function AddTwos(){
				checkCtrl = document.getElementById("keepTwos");
				boxCtrl = document.getElementById("TwosValue");

				if(checkCtrl.checked && boxCtrl.value == -1){
					for (var LoopCounter = 0; LoopCounter < Rolls.length; LoopCounter++){
					 	if (Rolls[LoopCounter] == 2){					 		
					 		Sum += Rolls[LoopCounter];					 	
					 	}
					}
					boxCtrl.value = Sum;
					ResetAfterAdd();
				}else{
					AddAlert();
				}
			}

			//Adds all of the dice that are threes to the box for threes, when the checkbox is checked,
			//so long as the user has not done so already.  If the user has already added a score
			//value, the AddAlert() function is called to let them know they can't do that.
			function AddThrees(){
				checkCtrl = document.getElementById("keepThrees");
				boxCtrl = document.getElementById("ThreesValue");

				if(checkCtrl.checked && boxCtrl.value == -1){
					for (var LoopCounter = 0; LoopCounter < Rolls.length; LoopCounter++){
					 	if (Rolls[LoopCounter] == 3){					 		
					 		Sum += Rolls[LoopCounter];					 	
					 	}
					}					
					boxCtrl.value = Sum;
					ResetAfterAdd();
				}else{
					AddAlert();
				}
			}

			//Adds all of the dice that are fours to the box for fours, when the checkbox is checked,
			//so long as the user has not done so already.  If the user has already added a score
			//value, the AddAlert() function is called to let them know they can't do that.
			function AddFours(){
				checkCtrl = document.getElementById("keepFours");
				boxCtrl = document.getElementById("FoursValue");

				if(checkCtrl.checked && boxCtrl.value == -1){
					for (var LoopCounter = 0; LoopCounter < Rolls.length; LoopCounter++){
					 	if (Rolls[LoopCounter] == 4){					 		
					 		Sum += Rolls[LoopCounter];					 	
					 	}
					}
					boxCtrl.value = Sum;
					ResetAfterAdd();
				}else{
					AddAlert();
				}
			}

			//Adds all of the dice that are fives to the box for fives, when the checkbox is checked,
			//so long as the user has not done so already.  If the user has already added a score
			//value, the AddAlert() function is called to let them know they can't do that.
			function AddFives(){
				checkCtrl = document.getElementById("keepFives");
				boxCtrl = document.getElementById("FivesValue");

				if(checkCtrl.checked && boxCtrl.value == -1){
					for (var LoopCounter = 0; LoopCounter < Rolls.length; LoopCounter++){
					 	if (Rolls[LoopCounter] == 5){					 		
					 		Sum += Rolls[LoopCounter];					 	
					 	}
					}
					boxCtrl.value = Sum;
					ResetAfterAdd();
				}else{
					AddAlert();
				}
			}

			//Adds all of the dice that are sixes to the box for sixes, when the checkbox is checked,
			//so long as the user has not done so already.  If the user has already added a score
			//value, the AddAlert() function is called to let them know they can't do that.
			function AddSixes(){
				checkCtrl = document.getElementById("keepSixes");
				boxCtrl = document.getElementById("SixesValue");

				if(checkCtrl.checked && boxCtrl.value == -1){
					for (var LoopCounter = 0; LoopCounter < Rolls.length; LoopCounter++){
					 	if (Rolls[LoopCounter] == 6){					 		
					 		Sum += Rolls[LoopCounter];					 	
					 	}
					}
					boxCtrl.value = Sum;
					ResetAfterAdd();
				}else{
					AddAlert();
				}
			}

			function NewGame() {
				//Normally, this function gets called after adding a score, but it works
				//nicely as part of the general function to setup a new game too.
				ResetAfterAdd();

				boxCtrl = document.getElementById("OnesValue");
				boxCtrl.value = -1;
				boxCtrl = document.getElementById("TwosValue");
				boxCtrl.value = -1;
				boxCtrl = document.getElementById("ThreesValue");
				boxCtrl.value = -1;
				boxCtrl = document.getElementById("FoursValue");
				boxCtrl.value = -1;
				boxCtrl = document.getElementById("FivesValue");
				boxCtrl.value = -1;
				boxCtrl = document.getElementById("SixesValue");
				boxCtrl.value = -1;

				boxCtrl = document.getElementById("UpperValue");
				boxCtrl.value = 0;
				boxCtrl = document.getElementById("BonusValue");
				boxCtrl.value = 0;
				boxCtrl = document.getElementById("UpperBonusValue");
				boxCtrl.value = 0;

				boxCtrl = document.getElementById("ThreeKindValue");
				boxCtrl.value = -1;
				boxCtrl = document.getElementById("FourKindValue");
				boxCtrl.value = -1;
				boxCtrl = document.getElementById("FullHouseValue");
				boxCtrl.value = -1;
				boxCtrl = document.getElementById("SmStraightValue");
				boxCtrl.value = -1;
				boxCtrl = document.getElementById("LgStraightValue");
				boxCtrl.value = -1;
				boxCtrl = document.getElementById("YahtzeeValue");
				boxCtrl.value = -1;
				boxCtrl = document.getElementById("ChanceValue");
				boxCtrl.value = -1;

				boxCtrl = document.getElementById("LowerValue");
				boxCtrl.value = 0;
				boxCtrl = document.getElementById("UpperBonusValue");
				boxCtrl.value = 0;
				boxCtrl = document.getElementById("GrandValue");
				boxCtrl.value = 0;
			}

			//As part of the functions that add to the score boxes, they will call this function
			//to reset the sum of the dice rolls, the dice roll values themselves, the number of rolls
			//and uncheck the boxes that would have locked their values.
			function ResetAfterAdd(){
				Sum = 0;
				NumberRolls = 0;
				document.getElementById("keepRoll1").checked = false;
				document.getElementById("keepRoll2").checked = false;
				document.getElementById("keepRoll3").checked = false;
				document.getElementById("keepRoll4").checked = false;
				document.getElementById("keepRoll5").checked = false;
				
				boxCtrl = document.getElementById("Roll1Value");
				boxCtrl.value = 0;
				boxCtrl = document.getElementById("Roll2Value");
				boxCtrl.value = 0;
				boxCtrl = document.getElementById("Roll3Value");
				boxCtrl.value = 0;
				boxCtrl = document.getElementById("Roll4Value");
				boxCtrl.value = 0;
				boxCtrl = document.getElementById("Roll5Value");
				boxCtrl.value = 0;
				boxCtrl = document.getElementById("NumberRollsValue");
				boxCtrl.value = 0;
			}

			//This function rolls the five dice (or however many do not have a checked box next to them),
			//and displays their values, provided the player has not exceeded the max of three rolls.
			function Roll(){
				if(NumberRolls < 3){
					// To generate a random number between a value, you take Math.random() * (Max value - Min Value + 1) + Min Value;
					checkCtrl = document.getElementById("keepRoll1");
					if(!checkCtrl.checked){
						Rolls[0] = Math.floor(Math.random() * (6)) + 1;
					}
					checkCtrl = document.getElementById("keepRoll2");
					if(!checkCtrl.checked){
						Rolls[1] = Math.floor(Math.random() * (6)) + 1;
					}
					checkCtrl = document.getElementById("keepRoll3");
					if(!checkCtrl.checked){
						Rolls[2] = Math.floor(Math.random() * (6)) + 1;
					}
					checkCtrl = document.getElementById("keepRoll4");
					if(!checkCtrl.checked){
						Rolls[3] = Math.floor(Math.random() * (6)) + 1;
					}
					checkCtrl = document.getElementById("keepRoll5");
					if(!checkCtrl.checked){
						Rolls[4] = Math.floor(Math.random() * (6)) + 1;
					}
					NumberRolls++;
					console.log(Rolls[0]);
					console.log(Rolls[1]);
					console.log(Rolls[2]);
					console.log(Rolls[3]);
					console.log(Rolls[4]);
					
					boxCtrl = document.getElementById("Roll1Value");
					boxCtrl.value = Rolls[0];
					boxCtrl = document.getElementById("Roll2Value");
					boxCtrl.value = Rolls[1];
					boxCtrl = document.getElementById("Roll3Value");
					boxCtrl.value = Rolls[2];
					boxCtrl = document.getElementById("Roll4Value");
					boxCtrl.value = Rolls[3];
					boxCtrl = document.getElementById("Roll5Value");
					boxCtrl.value = Rolls[4];
					boxCtrl = document.getElementById("NumberRollsValue");
					boxCtrl.value = NumberRolls;
				}else{
					RollAlert();
				}
			}

			function RollAlert(){
				alert("You must enter a score before continuing.");
			}