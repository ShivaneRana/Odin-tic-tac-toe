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
	const clear = function(){
		
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
	
	
	return {render,edit,clear}
})();

game.edit(0,0);
game.edit(1,1);
game.edit(2,2);
game.edit(3,3);
game.edit(4,4);
game.edit(5,5);
game.edit(6,6);
game.edit(7,7);
game.edit(8,8);
game.render();
game.clear();
game.render();