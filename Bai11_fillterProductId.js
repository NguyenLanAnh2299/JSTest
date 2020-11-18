
var Products = [];
Products.forEach(fillterProductById);

function fillterProductById( item){
	if (item.id == id) {
		Products.push(item);
	};
	return Products[0].name;
}

//ES6
function filterProductByIdES6(list, id) {
    var result = list.find(list => list.id == id);
    return result.name;
}