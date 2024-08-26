// this is the real shit 
function gameBoard(){
	const arr = [[" "," "," "],[" "," ",""],[" "," "," "]];
	
	//To render the gameboard
	function render(){
		let pattern = "";
		for(let i in arr){
			pattern += "\n";
			pattern += arr[i];
		}
			pattern += '\n';
			console.log(pattern);
		}
		
	//To edit the gameboard
	function edit(postion1,postion2,symbol){
		let choice = arr[postion1][postion2];
    if(choice !== " "){
			console.log("Cannot overwritte value");
    }else{
			arr[postion1][postion2] = symbol;				
		}
		render();
		}
	
	return {edit,render};
	
}

function player1(name = "Player1"){
	const symbol = "X";
	return {name,symbol};
}

function player2(name = "Player2"){
	const symbol = "O";
	return {name,symbol}
}

const game1 = gameBoard();
const p1 = player1("Shivane");
const p2 = player2("Anuj");

game1.render();
