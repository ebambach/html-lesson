			var Roll1 = 0;
			var Roll2 = 0;
			var Roll3 = 0;
			var Roll4 = 0;
			var Roll5 = 0;
			var ctrl;
			var Score = 0;
			var Counter = 0;
			var TotalRolls = 0;
			var HighScore = 0;
			console.log(Roll1);
			// console.log(Roll2);
			// console.log(Roll3);
			// console.log(Roll4);
			// console.log(Roll5);
			function Roll(){
				// To generate a random number between a value, you take Math.random() * (Max value - Min Value + 1) + Min Value;
				console.log("Entering loop");
				while (Roll1 != 1){
					Roll1 = Math.floor(Math.random() * (6)) + 1;
				// Roll2 = Math.floor(Math.random() * (6)) + 1;
				// Roll3 = Math.floor(Math.random() * (6)) + 1;
				// Roll4 = Math.floor(Math.random() * (6)) + 1;
				// Roll5 = Math.floor(Math.random() * (6)) + 1;
					console.log(Roll1);
				// console.log(Roll2);
				// console.log(Roll3);
				// console.log(Roll4);
				// console.log(Roll5);
					if(Roll1 != 1){
						Score += Roll1;
					}
					
					ctrl = document.getElementById("Roll1Value");
					ctrl.value = Score;
				// ctrl = document.getElementById("Roll2Value");
				// ctrl.value = Roll2;
				// ctrl = document.getElementById("Roll3Value");
				// ctrl.value = Roll3;
				// ctrl = document.getElementById("Roll4Value");
				// ctrl.value = Roll4;
				// ctrl = document.getElementById("Roll5Value");
				// ctrl.value = Roll5;
					Counter++;
					TotalRolls++;
				}
				if (Roll1 == 1){
					var resultCtrl = document.getElementById("theResult");
					resultCtrl.textContent = "After " + Counter + " rolls in this round, and " +TotalRolls+ " total rolls, the score was " + Score + "!";
						if (HighScore < Score){
							HighScore = Score;
							var highCtrl = document.getElementById("theHighScore");
							highCtrl.textContent = "The high score is " +HighScore+"!";
						}
					Counter = 0;
					Roll1 = 0;
					Score = 0;
				}
			}