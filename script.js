const p1Name = document.querySelector(".player1Name");
const p2Name = document.querySelector(".player2Name");
const p1Score = document.querySelector(".p1Score");
const p2Score = document.querySelector(".p2Score");
const reset = document.querySelector(".reset");
const playAgain = document.querySelector(".playAgain");
const uwu = document.querySelectorAll(".uwu");
p1Score.textContent = 0;
p2Score.textContent = 0;
p1Name.value = "Player1";
p2Name.value = "Player2";

// player1 module
const player1 = (function(){
	let name = p1Name.value;
	const symbol = "X";
	let score = 0;

	const getScore = function(){
		return score;
	}

	const setScore = function(value){
		score = value;
	}

	const incrementScore = function(){
		score++;
	}

	return {getScore,name,symbol,incrementScore,setScore};
})();

// player2 module 
const player2 = (function(){
	let name = p2Name.value;
	const symbol = "O";
	let score = 0;

	const getScore = function(){
		return score;
	}

	const setScore = function(value){
		score = value;
	}

	const incrementScore = function(){
		score++;
	}

	return {getScore,name,symbol,incrementScore,setScore};
})();

// to keep player1 name upto date
p1Name.addEventListener("input", () => {
	player1.name = p1Name.value;
})

// to keep player2 name upto date
p2Name.addEventListener("input", () => {
	player2.name = p2Name.value;
});

// all kind of condition to be checked for gameFlow
const conditions = (function(){
	let turn = 0;
	let allowed = true;
	const getTurn = function(){
		return turn;
	}

	const incrementTurn = function(){
		turn++;
	}

	const getAllowed = function(){
		return allowed;
	}

	const setAllowed = function(value){
		allowed = value;
	}

	return {getTurn,incrementTurn,getAllowed,setAllowed};
})()

const game = (function(){
	const arr = ["","","","","","","","",""];


	const edit = function(num,Symbol){
		if(num > 8){
			console.log("num is out of bound");
			return false;
		}else if(arr[num] !== ""){
			console.log("Target is already occupied");
			return false;
		}else{
			arr.splice(num,1,Symbol);
			console.log(arr);
			return true;
		}
	};

	const isNowFilled = function(){
		if(arr.includes("")){
			console.log("The array is not full yet!");
			return false;
		}else if(!(arr.includes(""))){
			console.log("The array is Full!");
			conditions.setAllowed(false);
			return true;
		}
	}

	const check = function(){
		const winning = [
			[0,1,2],
			[3,4,5],
			[6,7,8],
			[0,3,6],
			[1,4,7],
			[2,5,8],
			[0,4,8],
			[2,4,6],
		]

		for(let i of winning){
			const [a,b,c] = i;
			if((arr[a] !== "") && ((arr[a] === arr[b]) && (arr[a] === arr[c]))){
				if(arr[a] === "X"){
					console.log(`${player1.name} wins!`);
					player1.incrementScore();
					p1Score.textContent = player1.getScore();
				}else if(arr[a] === "O"){
					console.log(`${player2.name} wins!`);
					player2.incrementScore();
					p2Score.textContent = player2.getScore();
				}
				conditions.setAllowed(false);
				return true;
			}
		}
		console.log("No wins yet!")
		return false;

	}

	const resetArray = function(){
		arr.forEach((item,index,arr) => {
			arr[index] = "";
		})
		console.log("Array had a reset");
	}

	const displayArray = function(){
		console.log(arr);
	}

	return {edit,displayArray,isNowFilled,check,resetArray};
})();

// reset the entire game
reset.addEventListener("click",() => {
	p1Name.value = "Player1";
	p2Name.value = "Player2";
	player1.setScore(0);
	player2.setScore(0);	
	p1Score.textContent = 0;
	p2Score.textContent = 0;
	game.resetArray();
	conditions.setAllowed(true);
	uwu.forEach((item) => {
		item.textContent = "";
	})
});


uwu.forEach((item,index,array) => {
	item.addEventListener("click",() => {
	if(conditions.getAllowed() === true){
		if(conditions.getTurn() % 2 !== 0){
			item.textContent = player2.symbol;	
			game.edit(index,player2.symbol);
			conditions.incrementTurn();
			game.check()
			game.isNowFilled();
		}else if(conditions.getTurn() % 2 === 0){
			item.textContent = player1.symbol;
			game.edit(index,player1.symbol);
			game.check()
			game.isNowFilled();
			conditions.incrementTurn();
		}
	}
	})
});

playAgain.addEventListener("click",() => {
	game.resetArray();
	conditions.setAllowed(true);
	uwu.forEach((item) => {
		item.textContent = "";
	})
})