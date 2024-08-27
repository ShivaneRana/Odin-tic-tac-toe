function gameBoard(){
	//const arr = [" "," "," "," "," "," "," "," "," "];
	const arr = [1,1,1,1,1,1,1,1,1]
	
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
	
	//to edit the gameBoard array
	const edit = function(pos,symbol){
	const choice = arr[pos];
	if(choice !== " "){
		console.log("No changes were made");	
	}else{
		arr[pos] = symbol;
	}}
	
	//check for winning condition
	
	
	return {render,edit}
}

const game1 = gameBoard();

