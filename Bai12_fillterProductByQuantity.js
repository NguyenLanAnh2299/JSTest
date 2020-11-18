var products = [];
products.forEach(fillterProductByQuantity);

function fillterProductByQuantity( item){
	if (item.quantity > 0 && item.isDelete == false) {
		Products.push(item);
	};
	return products;
}

//ES6
function filterProductByIdQuantity(list, id) {
    var result = list.find(list => list.quantity > 0 && list.isDelete == false);
    return result.name;
}