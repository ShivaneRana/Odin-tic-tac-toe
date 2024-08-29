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
	let choice = arr[pos];
	//the target is out of bound so no changes
	if(pos > 8){
		console.log("The target position is out of bound");
		return false
	}
	//the target is occupied so no changes
	else if(choice !== " "){
		console.log("The target is already Occupied");
		return false;
	}
	//the value has been assigned
	arr[pos] = symbol;
	return true;
	};
	
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


game.edit(0,1);
game.edit(1,1);
game.edit(2,1);
game.edit(3,1);
game.edit(4,1);
game.edit(5,1);
game.edit(6,1);
game.edit(7,1);
game.edit(8,1);
game.render()

