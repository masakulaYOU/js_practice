/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-02-06 12:31:33
 * @version $Id$
 */

/*
寄生构造函数模式的思想是创建一个函数，该函数的作用仅仅是封装创建对象的代码，然后再返回新创建的对象，但是从表面上看，又像典型的构造函数
*/

function Person(name, age, job) {
	var o = new Object();
	o.name = name;
	o.age = age;
	o.job = job;
	o.sayName = function(){
		console.log(this.name);
	}
	return o;
}

var person1 = new Person("Nicholas", 29, "Software Engineer");
var person2 = new Person("Greg", 27, "Doctor");

person1.sayName();  //Nicholas
person2.sayName();  //Greg
console.log(person1.sayName == person2.sayName); //false

//注意
//返回的对象与构造函数或者与构造函数的原型属性之间没有联系，也就是说，构造函数返回的对象与在构造函数外部创建的对象没有什么不同
//因此，不能依赖instanceof操作符来确定对象类型