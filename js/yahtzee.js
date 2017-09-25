			//Array for the five dice roll values
			var Rolls = new Array (0, 0, 0, 0, 0);
			//Array for running upper score
			var UpperScore = [0];
			//Array for running lower score
			var LowerScore = [0];
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
			//Variable to be used by the upper section Add*** functions to know which number(s) should be 
			//checked for
			var NumberCheck = 0;
			//Variable used by lower section 3 of a kind, 4 of a kind, full house, and yahtzee to store
			//the number of times number matched.
			var Matches = 0;
			//Booelean used to track whether any rolls have been made.
			var RollBoolean = false;
			//Boolean used to indicate whether the UpperTally() should check if the user earned the 35
			//bonus points for the Upper section.
			var UpperBoolean = true;
			//Booleans used to make it user for LowerCheck() to know what it is trying to add points to.
			var FullBoolean = false;
			var KindBoolean = false;
			var SmStraightBoolean = false;
			var LgStraightBoolean = false;	
			var YahtzeeBoolean = false;

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
				NumberCheck = 1;
				
				UpperCheck();
			}

			//Adds all of the dice that are twos to the box for twos, when the checkbox is checked,
			//so long as the user has not done so already.  If the user has already added a score
			//value, the AddAlert() function is called to let them know they can't do that.
			function AddTwos(){
				checkCtrl = document.getElementById("keepTwos");
				boxCtrl = document.getElementById("TwosValue");
				NumberCheck = 2;

				UpperCheck();
			}

			//Adds all of the dice that are threes to the box for threes, when the checkbox is checked,
			//so long as the user has not done so already.  If the user has already added a score
			//value, the AddAlert() function is called to let them know they can't do that.
			function AddThrees(){
				checkCtrl = document.getElementById("keepThrees");
				boxCtrl = document.getElementById("ThreesValue");
				NumberCheck = 3;

				UpperCheck();
			}

			//Adds all of the dice that are fours to the box for fours, when the checkbox is checked,
			//so long as the user has not done so already.  If the user has already added a score
			//value, the AddAlert() function is called to let them know they can't do that.
			function AddFours(){
				checkCtrl = document.getElementById("keepFours");
				boxCtrl = document.getElementById("FoursValue");
				NumberCheck = 4;

				UpperCheck();
			}

			//Adds all of the dice that are fives to the box for fives, when the checkbox is checked,
			//so long as the user has not done so already.  If the user has already added a score
			//value, the AddAlert() function is called to let them know they can't do that.
			function AddFives(){
				checkCtrl = document.getElementById("keepFives");
				boxCtrl = document.getElementById("FivesValue");
				NumberCheck = 5;
			
				UpperCheck();
			}

			//Adds all of the dice that are sixes to the box for sixes, when the checkbox is checked,
			//so long as the user has not done so already.  If the user has already added a score
			//value, the AddAlert() function is called to let them know they can't do that.
			function AddSixes(){
				checkCtrl = document.getElementById("keepSixes");
				boxCtrl = document.getElementById("SixesValue");
				NumberCheck = 6;
			
				UpperCheck();
			}

			//Unlike the above functions, AddThreeKind, AddFourKind, AddFullHouse, and AddYahtzee use
			//NumberCheck to store the minimum number of matches needed to add points to
			//the respective boxes (because the LowerCheck method uses two for loops
			//to compare every number in Rolls[] against each other, this means that a Three
			//of a kind needs 9 matches (3*3), a Four of a kind needs 16 (4*4), Full House needs 
			//13 (3*3 + 2*2), and Yahtzee needs 25 (5*5)).
			function AddThreeKind(){
				checkCtrl = document.getElementById("keepThreeKind");
				boxCtrl = document.getElementById("ThreeKindValue");
				NumberCheck = 9;
				KindBoolean == true;

				LowerCheck();
			}

			function AddFourKind(){
				checkCtrl = document.getElementById("keepFourKind");
				boxCtrl = document.getElementById("FourKindValue");
				NumberCheck = 16;
				KindBoolean = true;

				LowerCheck();
			}

			function AddFullHouse(){
				checkCtrl = document.getElementById("keepFullHouse");
				boxCtrl = document.getElementById("FullHouseValue");
				FullBoolean = true;
				NumberCheck = 13;

				LowerCheck();
			}

			function AddSmStraight(){
				checkCtrl = document.getElementById("keepSmStraight");
				boxCtrl = document.getElementById("SmStraightValue");
				NumberCheck = 2;
				SmStraightBoolean = true;

				LowerCheck();
			}

			function AddLgStraight(){
				checkCtrl = document.getElementById("keepLgStraight");
				boxCtrl = document.getElementById("LgStraightValue");
				NumberCheck = 0;
				LgStraightBoolean = true;

				LowerCheck();
			}

			function AddYahtzee(){
				checkCtrl = document.getElementById("keepYahtzee");
				boxCtrl = document.getElementById("YahtzeeValue");
				NumberCheck = 25;
				YahtzeeBoolean = true;

				LowerCheck();
			}

			//Unlike the other Add*** functions, we are not checking for a specific value,
			//we are simply adding the Sum of Rolls[] to the box
			function AddChance(){
				checkCtrl = document.getElementById("keepChance");
				boxCtrl = document.getElementById("ChanceValue");

				if(boxCtrl.value == -1){
					Sum = Rolls[0] + Rolls[1] + Rolls[2] + Rolls[3] + Rolls[4];
					boxCtrl.value = Sum;
					ResetAfterAdd();
				}else{
					AddAlert();
				}
			}

			//This function is called by all of the Lower section functions (except for Chance) to
			//check to see if the numbers in the Rolls[] have the correct number of matches (9 for a
			//Three of a kind, 16 for a Four of kind, 13 for Full House, 25 for Yahtzee).
			function LowerCheck(){
				Matches = 0;
				if(boxCtrl.value == -1){
					for (var LoopCounter1 = 0; LoopCounter1 < Rolls.length; LoopCounter1++){
						for (var LoopCounter2 = 0; LoopCounter2 < Rolls.length; LoopCounter2++){
							if (Rolls[LoopCounter1] == Rolls[LoopCounter2]){
								Matches++;
							}
						}
						LoopCounter2 = 0;
					}
					//First, we check to see if the number of Matches is 13 on the nose (9 Matches
					//from having 3 of the same number, and 4 more Matches from 2 of the same number).
					//We combine this with a check to see if the FullBoolean variable is set to true,
					//which it will be if the user clicked on the button for Full House (important to
					//do so because the same dice that qualify as a Full House can also be used as
					//a Three of a kind).
					if ((Matches == NumberCheck) && (YahtzeeBoolean == false) && (FullBoolean == true)){
						Sum = 25;
					}else if ((LgStraightBoolean == true) || (SmStraightBoolean == true)){
						//If the user clicked the Small Straight button, we want to be able to
						//make sure it is a Small Straight.  So, we make a duplicate array, run
						//it through a loop splice() out any duplicates, and do an if check to
						//make sure that each value in the array differs by 1.
						var points = Rolls;
						points.sort(function(a, b){return a-b});
						// var MaxRoll = Math.max.apply( null, points);
						// var MinRoll = Math.min.apply( null, points);
						// console.log("LgStraightBoolean is " + LgStraightBoolean + " and SmStraightBoolean is " + SmStraightBoolean);
						if (LgStraightBoolean == true){							
							if ((points[4] - points[3]) == 1 && (points[3] - points[2]) == 1 && (points[2] - points[1]) == 1 && (points[1] - points[0]) == 1){
								Sum = 40;
							}
						}
						if (SmStraightBoolean == true){
							for (var LoopCounter1 = 0; LoopCounter1 < (points.length - 1); LoopCounter1++){
								if (points[LoopCounter1] == points[(LoopCounter1 + 1)]){
									points.splice(LoopCounter1, 1);
								}
							}
							if (points.length >= 4){
								if ((points[3] - points[2]) == 1 && (points[2] - points[1]) == 1 && (points[1] - points[0]) == 1){
									Sum = 30;
								}
							}
						}
					
					//If it is a Three or Four of a kind, add the numbers in Rolls[] to get the
					//Sum.  If it is a Yahtzee, the Sum is 50 points.
					}else if (Matches >= NumberCheck && (YahtzeeBoolean == false) && KindBoolean == true){
						Sum = Rolls[0] + Rolls[1] + Rolls[2] + Rolls[3] + Rolls[4];						
					}else if ((Matches == 25) && (YahtzeeBoolean == true)){
						Sum = 50;
					}
					boxCtrl.value = Sum;
					LowerScore.push(Sum);
					ResetAfterAdd();
					}else{
						AddAlert();
					}
			}

			//Time to reset everything back to square one.
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
				boxCtrl = document.getElementById("UpperFinalValue");
				boxCtrl.value = 0;
				boxCtrl = document.getElementById("GrandValue");
				boxCtrl.value = 0;

				UpperBoolean = true;
			}

			//As part of the functions that add to the score boxes, they will call this function
			//to reset the sum of the dice rolls, the dice roll values themselves, the number of rolls
			//and uncheck the boxes that would have locked their values.
			function ResetAfterAdd(){
				TallyUpper();
				TallyLower();
				TallyGrand();

				Sum = 0;
				NumberRolls = 0;
				document.getElementById("keepRoll1").checked = false;
				document.getElementById("keepRoll2").checked = false;
				document.getElementById("keepRoll3").checked = false;
				document.getElementById("keepRoll4").checked = false;
				document.getElementById("keepRoll5").checked = false;
				
				boxCtrl = document.getElementById("Roll1Value");
				boxCtrl.value = -1;
				boxCtrl = document.getElementById("Roll2Value");
				boxCtrl.value = -2;
				boxCtrl = document.getElementById("Roll3Value");
				boxCtrl.value = -3;
				boxCtrl = document.getElementById("Roll4Value");
				boxCtrl.value = -4;
				boxCtrl = document.getElementById("Roll5Value");
				boxCtrl.value = -5;
				boxCtrl = document.getElementById("NumberRollsValue");
				boxCtrl.value = 0;

				RollBoolean = false;
				FullBoolean = false;
				KindBoolean == false;
				SmStraightBoolean = false;
			    LgStraightBoolean = false;
			    YahtzeeBoolean = false;				
			}

			//This function rolls the five dice (or however many do not have a checked box next to them),
			//and displays their values, provided the player has not exceeded the max of three rolls.
			function Roll(){
				if(NumberRolls < 3){
					RollBoolean = true;
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
					// console.log(Rolls[0]);
					// console.log(Rolls[1]);
					// console.log(Rolls[2]);
					// console.log(Rolls[3]);
					// console.log(Rolls[4]);
					
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

			//If the user tries to roll before they enter a score, alert them to
			//the need to enter a score.
			function RollAlert(){
				alert("You must enter a score before continuing.");
			}

			//For the TallyUpper(), TallyLower(), and TallyGrand(), we use "reduce" to call an anoymous function
			//that returns a single value for the numbers in the array.  It does this by adding the current value
			//in the array to the previous one in the array (think +=).
			function TallyUpper(){
				Sum = UpperScore.reduce(function(previous, current) {
    				return previous + current;
				});

				boxCtrl = document.getElementById("UpperValue");
				boxCtrl.value = Sum;

				//UpperBoolean is used to check if the UpperScore array should have the 35 bonus points
				//pushed to it.  We only want this to be able to happen once, otherwise, with the current
				//code, the extra 35 points would continue to be added on should the UpperScore.reduce
				//value exceed 63.
				if (Sum >= 63 && UpperBoolean == true){
					boxCtrl = document.getElementById("BonusValue");
					boxCtrl.value = 35;
					Sum += 35;
					boxCtrl = document.getElementById("UpperBonusValue");
					boxCtrl.value = Sum;
					UpperScore.push(35);
					UpperBoolean = false;
				}else{					
					boxCtrl = document.getElementById("BonusValue");
					boxCtrl.value = 0;
					boxCtrl = document.getElementById("UpperBonusValue");
					boxCtrl.value = Sum;
				}

				boxCtrl = document.getElementById("UpperFinalValue");
				boxCtrl.value = Sum;
			}

			function TallyLower(){
				Sum = 0;
				Sum = LowerScore.reduce(function(previous, current) {
    				return previous + current;
				});

				if (Sum > -1){
					boxCtrl = document.getElementById("LowerValue");
					boxCtrl.value = Sum;
				}
			}

			function TallyGrand(){
				Sum = (UpperScore.reduce(function(previous, current) {
    					return previous + current;
						})) 
					+ (LowerScore.reduce(function(previous, current) {
    					return previous + current;
						}));

				if (Sum > 0){
					boxCtrl = document.getElementById("GrandValue");
					boxCtrl.value = Sum;
				}
			}
			
			//This function is called by the Add*** functions for the upper section,
			//in order to tally the number of a particular number has been rolled.
			function UpperCheck(){
				if(boxCtrl.value == -1){
					for (var LoopCounter1 = 0; LoopCounter1 < Rolls.length; LoopCounter1++){
					 	if (Rolls[LoopCounter1] == NumberCheck){					 		
					 		Sum += Rolls[LoopCounter1];					 	
					 	}
					}					
					boxCtrl.value = Sum;
					UpperScore.push(Sum);
					ResetAfterAdd();
				}else{
					AddAlert();
				}
			}