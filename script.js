function gameBoard(){
	const arr = [" "," "," "," "," "," "," "," "," "];
	
	const render = function(){
		let pattern = "\n";
		for(let i = 0;i<arr.length;i++){
			pattern += arr[i];
			if(pattern.length % 4 === 0){
				pattern += "\n"
			}
		}
		console.log(pattern);
	}
	
	const edit = function(pos,symbol){
	const choice = arr[pos];
	if(choice !== " "){
		console.log("No changes were made");	
	}else{
		arr[pos] = symbol;
	}}
	
	return {render,edit}
}

const game1 = gameBoard();
game1.edit(0,"X");
game1.edit(1,"X");
game1.edit(2,"X");
game1.render();