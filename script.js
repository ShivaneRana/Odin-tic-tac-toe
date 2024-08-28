// const game = (function(){
// 	const arr = [" "," "," "," "," "," "," "," "," "];
	
// 	//to display the array in 2d
// 	const render = function(){
// 		let pattern = "\n";
// 		for(let i = 0;i<arr.length;i++){
// 			pattern += arr[i];
// 			if(pattern.length % 4 === 0){
// 				pattern += "\n";
// 			}
// 		}
// 		console.log(pattern);
// 	}
	
// 	//clear the gameboard
// 	const clear = function(){
// 		arr.forEach((item) => item*2);
// 	}
	
// 	//to edit the gameBoard array
// 	const edit = function(pos,symbol){
// 	const choice = arr[pos];
// 	if(choice !== " "){
// 		console.log(`${pos} already occupied`);
// 		return false;
// 	}else{
// 		arr[pos] = symbol;
// 		return true;
// 	}}
	
// 	//check for winning condition
// 	const check = function(){
// 		const winning = [
// 			[0,1,2],
// 			[3,4,5],
// 			[6,7,8],
// 			[0,3,6],
// 			[1,4,7],
// 			[2,5,8],
// 			[0,4,8],
// 			[2,4,6]
// 		]
		
// 		for(let i of winning){
// 			const [a,b,c] = i;
// 			if(arr[c] !== " " && (arr[a] === arr[b] && arr[a] === arr[c])){
// 				return true;
// 				}else{
// 			}
// 		}
// 		return false;
// 	}
	
// 	return {render,edit,clear,check}
// })();

// game.edit(0,1);
// game.edit(1,1);
// game.edit(2,1);
// game.edit(3,4);
// game.edit(4,4);
// game.edit(5,4);
// game.edit(6,9);
// game.edit(7,9);
// game.edit(8,9);
// game.render();


const arr = [0,1,2,3,4,5,6,7,8];
let pattern = "";
arr.forEach
console.log(pattern)