			var Roll1 = 0;
			var Roll2 = 0;
			var ctrl;
			var Point = 0;
			var RollSum = 0;
			var NewGame = 1;
			
			function Roll(){
				// To generate a random number between a value, you take Math.random() * (Max value - Min Value + 1) + Min Value;
				Roll1 = Math.floor(Math.random() * (6)) + 1;
				Roll2 = Math.floor(Math.random() * (6)) + 1;
				RollSum = Roll1 + Roll2;
				// If this game is underway, check to see if the roll equaled the Point, or 7.
				if (NewGame == 0){
					if (RollSum == Point){
						Win();
					}else if (RollSum == 7){
						Lose();
					}else{
						RollAgain();
					}
				}else{
					// If this game is a new game, check to see if the roll equaled the win or loss values.
					if (RollSum == 7 || RollSum == 11){
						Win();
					}else if(RollSum == 2 || RollSum == 3 || RollSum == 12){
						Lose();
					}else{
						SetPoint();
					}
				}
				// console.log(Roll1);
				// console.log(Roll2);
					
				ctrl = document.getElementById("Roll1Value");
				ctrl.value = Roll1;
				ctrl = document.getElementById("Roll2Value");
				ctrl.value = Roll2;
				ctrl = document.getElementById("RollSumValue");
				ctrl.value = RollSum;
			
			}
			// In craps, the Point is the value of the first roll, assuming the first roll did not result in a win or loss.
			function SetPoint(){
				Point = RollSum;
				ctrl = document.getElementById("WinValue");
				ctrl.value = Point;
				ctrl = document.getElementById("LoseValue");
				ctrl.value = 7;
				NewGame = 0;
				ctrl = document.getElementById("theResult");
				ctrl.textContent = "The Point was set to " +Point+", please roll again.";
			}

			function Win(){
				NewGame = 1;
				ctrl = document.getElementById("theResult");
				ctrl.textContent = "You win!";
			}
			
			function Lose(){
				NewGame = 1;
				ctrl = document.getElementById("theResult");
				ctrl.textContent = "You lose...";
			}

			function RollAgain(){
				ctrl = document.getElementById("theResult");
				ctrl.textContent = "Please roll again.";
			}

		
	
