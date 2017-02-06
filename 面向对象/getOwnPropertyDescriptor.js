/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-02-05 20:50:56
 * @version $Id$
 */

var book = {};
Object.defineProperties(book, {
    _year:{
        value:2004
    },
    edition:{
        value:1
    },
    year:{
        get:function(){
            return this._year;
        },
        set:function(newValue) {
            if (newValue > 2004) {
                this._year = newValue;
                this.edition += newValue - 2004;
            }
        }
    }
});
var descriptor = Object.getOwnPropertyDescriptor(book, "_year");
console.log(descriptor.value); //2004
console.log(descriptor.configurable); //true
console.log(typeof descriptor.get); //"undefined"
var descriptor = Object.getOwnPropertyDescriptor(book, "year");
console.log(descriptor.value); // undefined
console.log(descriptor.enumerable); //true
console.log(typeof descriptor.get); //"function"