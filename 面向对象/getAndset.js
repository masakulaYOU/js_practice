/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-02-05 20:49:25
 * @version $Id$
 */
var book = {
    _year:2004,
    edition:1
}
Object.defineProperty(book, "year", {
    get:function() {
        return this._year;
    },
    set:function(newValue) {
        if (newValue > 2004) {
            this._year = newValue;
            this.edition += newValue - 2004;
        }
    }
})
book.year = 2005;
console.log(book.edition); //2


var book = {
    _year:2004,
    edition:1
};
book.__defineGetter__("year", function(){
    return this._year;
})
book.__defineSetter__("year", function(newValue){
    if (newValue > 2004) {
        this._year = newValue;
        this.edition += newValue - 2004;
    }
})
book.year = 2005;
console.log(book.edition); //2