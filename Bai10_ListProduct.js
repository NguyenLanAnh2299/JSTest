function listProduct (count) {
    var list = [];
    var date = new Date();
    for ( var i = 1 ; i < count  ; i++) {
        var product = new Product (i, "list:" + i, i % 2, date, 10+ i);
        list.push(product);
    }
    return list;
}