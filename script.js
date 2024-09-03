const p1Name = document.querySelector(".player1Name");
const p2Name = document.querySelector(".player2Name");
const p1Score = document.querySelector(".p1Score");
const p2Score = document.querySelector(".p2Score");
const reset = document.querySelector(".reset");
const playAgain = document.querySelector(".playAgain");
const uwu = document.querySelectorAll(".uwu");
p1Score.textContent = 0;
p2Score.textContent = 0;

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
		}else if(!(arr.includes(""))){
			console.log("The array is Full!");
		}
	}

	const winCheck = function(){
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
				return true;
			}
		}
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

	return {edit,displayArray,isNowFilled,winCheck,resetArray};
})();



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


uwu.forEach((item,index,array) => {
	while((!game.check()) || (!game.isNowFilled())){
		if(game.check() === true){
			break;
		}else if(game.isNowFilled() === true){
			console.log("The gameBoard is now filled");
			break;
		}

		item.addEventListener("click",() => {
			item.textContent = player2.symbol;
			game.edit(index,player2.symbol);
			game.winCheck()
			game.isNowFilled();
		})
		
		if(game.check() === true){
			break;
		}else if(game.isNowFilled() === true){
			console.log("The gameBoard is now filled");
			break;
		}
		if(game.check() === true){
			break;
		}else if(game.isNowFilled() === true){
			console.log("The gameBoard is now filled");
			break;
		}
	}
})

p1Name.addEventListener("input", () => {
	player1.name = p1Name.value;
})

p2Name.addEventListener("input", () => {
	player2.name = p2Name.value;
});


reset.addEventListener("click",() => {
	p1Name.value = "Player1";
	p2Name.value = "Player2";
	player1.setScore(0);
	player2.setScore(0);	
	p1Score.textContent = 0;
	p2Score.textContent = 0;
	game.resetArray();

	uwu.forEach((item) => {
		item.textContent = "";
	})
});
