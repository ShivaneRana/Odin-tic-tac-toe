const game = (function(){
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
	const edit = function(pos,symbol){
	const choice = arr[pos];
	if(choice !== " "){
		console.log(`${pos} already occupied`);
		return false;
	}else{
		arr[pos] = symbol;
		return true;
	}}
	
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
				return true;
				}else{
			}
		}
		return false;
	}
	
	return {render,edit,check,reset}
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


//controls the flow of the game
const gameFlow = (function(){
	const play = function(){
		console.log("Let's Play Tic Tac Toe!");
		
	};
	
	return {play};
})();
