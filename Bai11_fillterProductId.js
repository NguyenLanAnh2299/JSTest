
function filterProductById(id, list) {
    var result = [];
    list.forEach(function(item) {
        if (item.id == id) {
            result.push(item);
        }
    });
    return result[0].name;
}

//ES6
function filterProductByIdES6(list, id) {
    var result = list.find(list => list.id == id);
    return result.name;
}