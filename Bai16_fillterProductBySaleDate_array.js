//map
var pro = [];
var date = new Date().valueOf();

function getProductBySale(item){
	var result = [item.id, item.name];
	if (result.saleDate > date && result.quantity > 0) {
		pro.push(result);
	}
	return pro;
}
function fillterProductBySaleDate(){
	var list = pro.map(getProductBySale);
    return list;
}

//
function filterProductBySaleDates(list) {
    var pro = [];
    var date = new Date().valueOf();

    list.forEach(function (item) {
        if (item.quantity > 0 && item.saleDate >= date) {
            var list_new = [item.id, item.name];
            pro.push(lists);
        }
    });
    return pro;
    
}