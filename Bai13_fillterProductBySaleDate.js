
var products = [];
var date = new Date();
products.forEach(fillterProductBySaleDate);

function fillterProductBySaleDate( item){
	if (item.saleDate > date.valueOf() && item.isDelete == false) {
		products.push(item);
	};
	return products;
}


//ES6
function fillterProductBySaleDateES6(list, id) {
	var date = new Date();
    var result = list.find(list => list.saleDate > date.valueOf() && list.isDelete == false);
    return result.name;
}
