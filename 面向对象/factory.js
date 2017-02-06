/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-02-05 12:52:16
 * @version $Id$
 */

var person = {};
Object.defineProperty(person, "name", {
    writable:false,
    value:"Nicholas"
})
console.log(person.name); //Nicholas
person.name = "Greg";
console.log(person.name); //Nicholas
//把对象的属性设为只读，在尝试指定新值时，在非严格模式下，赋值操作将被忽略，严格而模式下，会抛出错误