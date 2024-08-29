;const game = (function(){
	const arr = [" "," "," "," "," "," "," "," "," "];
	
	//to display the array in 2d
	const render = function(){
		let pattern = "\n";
		for(let i = 0;i<arr.length;i++){
			pattern += arr[i];
			if(pattern.length % 4 === 0){
				pattern += "\n";
			}
		}
		console.log(pattern);
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
		if(choice > 8 || choice === null || choice === undefined){
			console.log("The target value is out of bound");
			game.render();
		}else if(arr[choice] !== " "){
			console.log("The value is pre occupied");
			game.render();
		}else{
			arr[choice] = symbol;
			console.log("gameBoard has been edited");
			isValid = true;
			game.render();
		}}};

	
	//check if filled without a win
	const isNowFilled = function(){
	for(let i = 0;i<arr.length;i++){
		if(arr[i] === " "){
			//the array still hase space to fill
			return false;
		}
	}
	//the array has been filled
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
	const getScore = function(){
		return score;
	}
	return {getScore,symbol,name}
})();

const player2 = (function(name = "Player2"){
	const symbol = "O";
	let score = 0;
	function getScore(){
		return score;
	}
	return {name,symbol,getScore};
})();

game.edit(player1.symbol); //1
game.edit(player2.symbol); //2
game.edit(player1.symbol); //3
game.edit(player2.symbol); //4
game.edit(player1.symbol); //5
game.edit(player2.symbol); //6
game.edit(player1.symbol); //7
game.edit(player2.symbol); //8
game.edit(player1.symbol); //9

