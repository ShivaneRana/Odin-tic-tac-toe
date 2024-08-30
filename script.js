;const game = (function(){
	const arr = [" "," "," "," "," "," "," "," "," "];
	
	//to display the array in 2d
	const render = function(){
	let pattern = "\n";
	for(let i = 0;i<arr.length;i++){
		pattern += "|";
		pattern += arr[i];
		pattern += "|";
		if(pattern.length % 10 == 0){
			pattern += "\n";
		}
	}
	
	console.log("-".repeat(10));
	console.log(pattern);
	console.log("-".repeat(10));
	}
	
	//clear the gameboard
	const reset = function(){
		arr.forEach((item,index,ar) => ar[index] = " ");
	}
	
	//to edit the gameBoard array
	const edit = function(symbol){
	let isValid = false;
	while(isValid === false){
		let choice = prompt(`Enter a position from 0 to ${arr.length-1}`);
		choice = parseInt(choice);
		if(choice > 8 || choice === null){
			console.log("The target value is out of bound");
		}else if(arr[choice] !== " "){
			console.log("The value is pre occupied");
		}else{
			arr[choice] = symbol;
			console.log("gameBoard has been edited");
			isValid = true;
		}}};

	
	//check if filled without a win
	const isNowFilled = function(){
	for(let i = 0;i<arr.length;i++){
		if(arr[i] === " "){
			//the array still hase space to fill
			console.log("The gameBoard is not filled");
			return false;
		}
	}
	//the array has been filled
	console.log("the gameBoard has been filled")
	return true;
}

	
	//check for winning condition
	const check = function(){
		const winning = [
			[0,1,2],
			[3,4,5],
			[6,7,8],
			[0,3,6],
			[1,4,7],
			[2,5,8],
			[0,4,8],
			[2,4,6]
		]
		
		for(let i of winning){
			const [a,b,c] = i;
			if(arr[c] !== " " && (arr[a] === arr[b] && arr[a] === arr[c])){
				if(arr[b] === "X"){
					console.log("X has won!")
				}else{
					console.log("O has won!")
				}
				return true;
				}
		}
		return false;
	}
	
	return {render,edit,check,reset,isNowFilled}
})();


const player1 = (function(name = "Player1"){
	const symbol = "X";
	let score = 0;
	const incrementScore = function(){
		score++;
	};
	const getScore = function(){
		return score;
	}
	return {getScore,symbol,name,incrementScore}
})();

const player2 = (function(name = "Player2"){
	const symbol = "O";
	let score = 0;
	function getScore(){
		return score;
	}
	const incrementScore = function(){
		score++;
	};
	return {name,symbol,getScore,incrementScore};
})();

const gameFlow = (function(){
	const play = function(){
		console.log("Lets play tic-tac-toe");
		console.log("input position where you want to place your choice");
		let chooseName = prompt("Enter player1 name~ ");
		player1.name = chooseName;
		chooseName = prompt("Enter player2 name~");
		player2.name = chooseName;
		console.log(`Player1: ${player1.name} Symbol: ${player1.symbol}`);
		console.log(`Player2: ${player2.name} Symbol: ${player2.symbol}`);
		console.log("Game Start!")
	}

	return {play};
})();


game.render();
game.render();
