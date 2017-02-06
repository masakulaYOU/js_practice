/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-02-06 12:08:44
 * @version $Id$
 */

/*
我们创建的每一个函数都有一个prototype属性，这个属性是一个指针，指向一个对象，而这个对象的用途是包含可以由特定类型的所有实例共享的属性和方法，
按字面意思，prototype就是通过调用构造函数而创价的那个对象实例的原型对象，使用原型对象可以让所有对象实例共享它所包含的属性和方法，就是不必再构造函数中定义对象实例的信息，而是可以将这些信息直接添加到原型对象中。
*/

function Person(){

}

Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function() {
	console.log(this.name);
}

var person1 = new Person();
person1.sayName(); //Nicholas

var person2 = new Person();
person2.sayName(); //Nicholas

console.log(person1.sayName == person2.sayName); //true