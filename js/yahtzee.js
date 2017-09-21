			var Roll1 = 0;
			var Roll2 = 0;
			var Roll3 = 0;
			var Roll4 = 0;
			var Roll5 = 0;
			var HighScore = 0;
			// console.log(Roll2);
			// console.log(Roll3);
			// console.log(Roll4);
			// console.log(Roll5);
			function Roll(){
				// To generate a random number between a value, you take Math.random() * (Max value - Min Value + 1) + Min Value;
				Roll1 = Math.floor(Math.random() * (6)) + 1;
				Roll2 = Math.floor(Math.random() * (6)) + 1;
				Roll3 = Math.floor(Math.random() * (6)) + 1;
				Roll4 = Math.floor(Math.random() * (6)) + 1;
				Roll5 = Math.floor(Math.random() * (6)) + 1;
				console.log(Roll1);
				console.log(Roll2);
				console.log(Roll3);
				console.log(Roll4);
				console.log(Roll5);
					
				var Roll1Ctrl = document.getElementById("Roll1Value");
				Roll1Ctrl.value = Roll1;
				var Roll2Ctrl = document.getElementById("Roll2Value");
				Roll2Ctrl.value = Roll2;
				var Roll3Ctrl = document.getElementById("Roll3Value");
				Roll3Ctrl.value = Roll3;
				var Roll4Ctrl = document.getElementById("Roll4Value");
				Roll4Ctrl.value = Roll4;
				var Roll5Ctrl = document.getElementById("Roll5Value");
				Roll5Ctrl.value = Roll5;
			}