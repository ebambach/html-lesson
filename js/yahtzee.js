			var Rolls = new Array (0, 0, 0, 0, 0);
			var NumberRolls = 0;
			var HighScore = 0;
			var Ctrl;
			var checkCtrl;
			var LoopCounter = 0;
			var CheckedCounter = 0;
			var Sum = 0;
			// console.log(Roll2);
			// console.log(Roll3);
			// console.log(Roll4);
			// console.log(Roll5);
			function Roll(){
				// To generate a random number between a value, you take Math.random() * (Max value - Min Value + 1) + Min Value;
				Rolls[0] = Math.floor(Math.random() * (6)) + 1;
				Rolls[1] = Math.floor(Math.random() * (6)) + 1;
				Rolls[2] = Math.floor(Math.random() * (6)) + 1;
				Rolls[3] = Math.floor(Math.random() * (6)) + 1;
				Rolls[4] = Math.floor(Math.random() * (6)) + 1;
				NumberRolls++;
				console.log(Rolls[0]);
				console.log(Rolls[1]);
				console.log(Rolls[2]);
				console.log(Rolls[3]);
				console.log(Rolls[4]);
					
				Ctrl = document.getElementById("Roll1Value");
				Ctrl.value = Rolls[0];
				Ctrl = document.getElementById("Roll2Value");
				Ctrl.value = Rolls[1];
				Ctrl = document.getElementById("Roll3Value");
				Ctrl.value = Rolls[2];
				Ctrl = document.getElementById("Roll4Value");
				Ctrl.value = Rolls[3];
				Ctrl = document.getElementById("Roll5Value");
				Ctrl.value = Rolls[4];
				Ctrl = document.getElementById("NumberRollsValue");
				Ctrl.value = NumberRolls;
			}

			function AddOnes(){
				Ctrl = document.getElementById("keepOnes");
				if(checkCtrl.checked){
					console.log("checked!");
					for (var roll of Rolls){
						if (Roll[LoopCounter] == 1){
							Sum += Roll[LoopCounter];
						}
					}
					Ctrl = document.getElementById("OnesValue");
					Ctrl.value = Sum;
				}
				LoopCounter = 0;
				Sum = 0;
			}

			function AddTwos(){
				Ctrl = document.getElementById("keepTwos");
				if(checkCtrl.checked){
					for (var roll of Rolls){
						if (Roll[LoopCounter] == 2){
							Sum += Roll[LoopCounter];
						}
					console.log("checked!");
					}
					Ctrl = document.getElementById("TwosValue");
					Ctrl.value = Sum;
				}
				LoopCounter = 0;
				Sum = 0;
			}

			function AddThrees(){
				Ctrl = document.getElementById("keepThrees");
				if(checkCtrl.checked){
					for (var roll of Rolls){
						if (Roll[LoopCounter] == 3){
							Sum += Roll[LoopCounter];
						}
					console.log("checked!");
					}
					Ctrl = document.getElementById("ThreesValue");
					Ctrl.value = Sum;
				}
				LoopCounter = 0;
				Sum = 0;
			}

			function AddFours(){
				Ctrl = document.getElementById("keepFours");
				if(checkCtrl.checked){
					for (var roll of Rolls){
						if (Roll[LoopCounter] == 4){
							Sum += Roll[LoopCounter];
						}
					console.log("checked!");
					}
					Ctrl = document.getElementById("FoursValue");
					Ctrl.value = Sum;
				}
				LoopCounter = 0;
				Sum = 0;
			}

			function AddFives(){
				Ctrl = document.getElementById("keepFives");
				if(checkCtrl.checked){
					for (var roll of Rolls){
						if (Roll[LoopCounter] == 5){
							Sum += Roll[LoopCounter];
						}
					console.log("checked!");
					}
					Ctrl = document.getElementById("FivesValue");
					Ctrl.value = Sum;
				}
				LoopCounter = 0;
				Sum = 0;
			}

			function AddSixes(){
				Ctrl = document.getElementById("keepSixes");
				if(checkCtrl.checked){
					for (var roll of Rolls){
						if (Roll[LoopCounter] == 6){
							Sum += Roll[LoopCounter];
						}
					console.log("checked!");
					}
					Ctrl = document.getElementById("SixesValue");
					Ctrl.value = Sum;
				}
				LoopCounter = 0;
				Sum = 0;
			}

			function NewGame() {
				Ctrl = document.getElementById("Roll1Value");
				Ctrl.value = 0;
				Ctrl = document.getElementById("Roll2Value");
				Ctrl.value = 0;
				Ctrl = document.getElementById("Roll3Value");
				Ctrl.value = 0;
				Ctrl = document.getElementById("Roll4Value");
				Ctrl.value = 0;
				Ctrl = document.getElementById("Roll5Value");
				Ctrl.value = 0;
				Ctrl = document.getElementById("NumberRollsValue");
				Ctrl.value = 0;

				Ctrl = document.getElementById("OnesValue");
				Ctrl.value = 0;
				Ctrl = document.getElementById("TwosValue");
				Ctrl.value = 0;
				Ctrl = document.getElementById("ThreesValue");
				Ctrl.value = 0;
				Ctrl = document.getElementById("FoursValue");
				Ctrl.value = 0;
				Ctrl = document.getElementById("FivesValue");
				Ctrl.value = 0;
				Ctrl = document.getElementById("SixesValue");
				Ctrl.value = 0;

				Ctrl = document.getElementById("UpperValue");
				Ctrl.value = 0;
				Ctrl = document.getElementById("BonusValue");
				Ctrl.value = 0;
				Ctrl = document.getElementById("UpperBonusValue");
				Ctrl.value = 0;

				Ctrl = document.getElementById("ThreeKindValue");
				Ctrl.value = 0;
				Ctrl = document.getElementById("FourKindValue");
				Ctrl.value = 0;
				Ctrl = document.getElementById("FullHouseValue");
				Ctrl.value = 0;
				Ctrl = document.getElementById("SmStraightValue");
				Ctrl.value = 0;
				Ctrl = document.getElementById("LgStraightValue");
				Ctrl.value = 0;
				Ctrl = document.getElementById("YahtzeeValue");
				Ctrl.value = 0;
				Ctrl = document.getElementById("ChanceValue");
				Ctrl.value = 0;

				Ctrl = document.getElementById("LowerValue");
				Ctrl.value = 0;
				Ctrl = document.getElementById("UpperBonusValue");
				Ctrl.value = 0;
				Ctrl = document.getElementById("GrandValue");
				Ctrl.value = 0;
			}

