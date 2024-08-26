function gameBoard(){
	const arr = [[" "," "," "],[" "," "," "],[" "," "," "]];
	
	const render = function(){
		let pattern = "\n";
		for(let i = 0;i<arr.length;i++){
			pattern += arr[i];
			pattern += "\n";
		}
		console.log(pattern);
	}
	
	const edit = function(pos1,pos2,symbol){
	const choice = arr[pos1][pos2];
	if(choice !== " "){
		console.log("No changes were made");	
	}else{
		arr[pos1][pos2] = symbol;
	}}
	
	return {render,edit}
}