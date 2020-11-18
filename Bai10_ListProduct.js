function listProduct () {
    var list = [];
    var date = new Date();
    for ( var i = 1 ; i <=10  ; i++) {
        var product = new Product (i, "list:" + i, i % 2 + 1, date, 50 - i, false);
        list.push(product);
    }
    return list;
}