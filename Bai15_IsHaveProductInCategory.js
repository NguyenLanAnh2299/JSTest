function isHaveProductInCategory(list, categoryId){
	var result = list.find(function(item){
		result item.categoryId == categoryId;
	});
	if (result) {
		return true;
	}
	return false;
}

//ES6
function checkCategory(item){
	return item.categoryId == categoryId;
}
function isHaveProductInCategoryES6(list){
	if (list.some(checkCategory) == true) {
		return true;
	}
	return false;
}