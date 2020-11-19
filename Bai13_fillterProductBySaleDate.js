
function filterProductBySaleDate(list) {
	var date = new Date().valueOf();
     list.forEach(function (item) {
       if (item.qulity > 0 && item.isDelete == false) {
            result.push(item);
        }
    });
    return result;
}


//ES6
function fillterProductBySaleDateES6(list, id) {
	var date = new Date();
    var result = list.find(list => list.saleDate > date.valueOf() && list.isDelete == false);
    return result.name;
}
