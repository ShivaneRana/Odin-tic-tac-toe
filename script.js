// this is the real shit 
function gameBoard(){
	const arr = [[" "," "," "],[" "," ",""],[" "," "," "]];
	
	//To render the gameboard
	function renderArray(){
		let pattern = "";
		for(let i in arr){
			pattern += "\n";
			pattern += arr[i];
		}
			pattern += '\n';
			console.log(pattern);
		}
		
	//To edit the gameboard
	function editArray(postion1,postion2){
		let choice = arr[postion1][postion2];
        if(choice === " "){
         		arr[postion1][postion2] = "X";   
        }else if(choice === "X"){
						arr[postion1][postion2] = "O";
		}

        renderArray();
	}
	
	return {editArray,renderArray};
	
}

const game1 = gameBoard();
game1.renderArray()
game1.editArray(1,1)
game1.editArray(0,1);
game1.editArray(2,1);