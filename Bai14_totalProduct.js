
function totalQuantity(list) {
    var total = 0;
        list.forEach(function(item) {
            total += item.qulity;
        });
        return total;
    }

//using reduce
function (list){
	var reducer = (accumulator, currentValue) => accumulator + currentValue.qulity;
	return list.reduce(reducer, 0);
}
