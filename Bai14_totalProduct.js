
var sum = 0;
var result = [];
result.forEach(totalQuantity);

function totalQuantity(item){
	 sum += item;
	 document.getElementById("").innerHTML = sum; //<p id=""></p>
}

//using reduce
var result= [];
function getSum(total, num){
	return total + num;
}
function totalQuantityReduct(item){
	document.getElementById("").innerHTML = result.reduce(getSum);//<p id=""></p>
}