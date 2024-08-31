// ;const game = (function(){
// 	const arr = [" "," "," "," "," "," "," "," "," "];
	
// 	//to display the array in 2d
// 	const render = function(){
// 	let pattern = "\n";
// 	for(let i = 0;i<arr.length;i++){
// 		pattern += "|";
// 		pattern += arr[i];
// 		pattern += "|";
// 		if(pattern.length % 10 == 0){
// 			pattern += "\n";
// 		}
// 	}
	
// 	console.log("-".repeat(10));
// 	console.log(pattern);
// 	console.log("-".repeat(10));
// 	}
	
// 	//clear the gameboard
// 	const reset = function(){
// 		arr.forEach((item,index,ar) => ar[index] = " ");
// 		game.render();
// 	}
	
// 	//to edit the gameBoard array
// 	const edit = function(symbol){
// 	let isValid = false;
// 	while(isValid === false){
// 		let choice = prompt(`Enter a position from 0 to ${arr.length-1}`);
// 		choice = parseInt(choice);
// 		if(choice > 8 || choice === null){
// 			console.log("Target out-of-bound");
// 		}else if(arr[choice] !== " "){
// 			console.log("Target pre-occupied");
// 		}else{
// 			arr[choice] = symbol;
// 			isValid = true;
// 		}}};

	
// 	//check if filled without a win
// 	const isNowFilled = function(){
// 	for(let i = 0;i<arr.length;i++){
// 		if(arr[i] === " "){
// 			//the array still hase space to fill
// 			return false;
// 		}
// 	}
// 	//the array has been filled
// 	return true;
// }

	
// 	//check for winning condition
// 	const check = function(){
// 		const winning = [
// 			[0,1,2],
// 			[3,4,5],
// 			[6,7,8],
// 			[0,3,6],
// 			[1,4,7],
// 			[2,5,8],
// 			[0,4,8],
// 			[2,4,6]
// 		]
		
// 		for(let i of winning){
// 			const [a,b,c] = i;
// 			if(arr[c] !== " " && (arr[a] === arr[b] && arr[a] === arr[c])){
// 				if(arr[b] === "X"){
// 					console.log(`${player1.name} won the game!`);
// 					player1.incrementScore();
// 				}else{
// 					console.log(`${player2.name} won the game!`);
// 					player2.incrementScore();
// 				}
// 				// if someone has already won
// 				return true;
// 				}
// 		}
// 		// if there is no winner currently
// 		return false;
// 	}
	
// 	return {render,edit,check,reset,isNowFilled}
// })();

// // player1
// const player1 = (function(name = "Player1"){
// 	const symbol = "X";
// 	let score = 0;
// 	const incrementScore = function(){
// 		score++;
// 	};
// 	const getScore = function(){
// 		return score;
// 	};
// 	const setScore = function(value){
// 		score = value;
// 	}
// 	return {getScore,symbol,name,incrementScore,setScore}
// })();

// // player2
// const player2 = (function(name = "Player2"){
// 	const symbol = "O";
// 	let score = 0;
// 	function getScore(){
// 		return score;
// 	}
// 	const incrementScore = function(){
// 		score++;
// 	};
// 	const setScore = function(value){
// 		score = value;
// 	}
// 	return {name,symbol,getScore,incrementScore,setScore};
// })();

// const gameFlow = (function(){
// 	const play = function(){
// 		console.log("Lets play Tic-Tac-Toe");
// 		console.log("In each player turn enter a position from 0-8 to place your symbol in that position");
		
// 		//ask user name
// 		// let chooseName = prompt("What is player1 name?");
// 		// player1.name = chooseName;
// 		// chooseName = prompt("What is player2 name?");
// 		// player2.name = chooseName;
// 		player1.name = "Shivane";
// 		player2.name = "Mayank";
		
// 		//display user name
// 		console.log(`Player1: ${player1.name} Sign: ${player1.symbol}`);
// 		console.log(`Player2: ${player2.name} Sign: ${player2.symbol}`);
// 		console.log("Lets's Start!");

// 		// this will be used to check if the player wants to resatrt the game again
// 		let restart = false;
// 		while(restart === false){
// 			game.reset();
// 			while((!game.check()) || (!game.isNowFilled())){
// 				if(game.check() === true){
// 					break;
// 				}else if(game.isNowFilled() === true){
// 					console.log("The gameBoard is now filled");
// 					break;
// 				}
// 				game.edit(player1.symbol);
// 				game.render();
// 				if(game.check() === true){
// 					break;
// 				}else if(game.isNowFilled() === true){
// 					console.log("The gameBoard is now filled");
// 					break;
// 				}
	
// 				game.edit(player2.symbol);
// 				game.render();	
// 				if(game.check() === true){
// 					break;
// 				}else if(game.isNowFilled() === true){
// 					console.log("The gameBoard is now filled");
// 					break;
// 				}
// 			}
// 			let question = confirm("Do you want another round?");
// 			if(question === false){
// 				restart = true;
// 			}
// 		}

// 		console.log(`${player1.name} score: ${player1.getScore()}`);
// 		console.log(`${player2.name} score: ${player2.getScore()}`);
// 		console.log("Game has finished");
// 	}

// 	return {play};
// })();

// gameFlow.play()