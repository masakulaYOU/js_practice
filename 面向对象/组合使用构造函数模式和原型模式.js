/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-02-06 12:16:22
 * @version $Id$
 */

/*
创建自定义类的最常见的方式，就是组合使用构造函数模式和原型模式，构造函数模式用于定义实例属性，原型模式用于定义方法和共享的属性。
*/
function Person(name, age, job) {
	this.name = name;
	this.age = age;
	this.job = job;
	this.friends = ["Shelby", "Court"];
}

Person.prototype = {
	constructor: Person,
	sayName:function(){
		console.log(this.name);
	}
}

var person1 = new Person("Nicholas", 29, "Software Engineer");
var person2 = new Person("Greg", 27, "Doctor");

person1.friends.push("Van");
console.log(person1.friends); //["Shelby","Court","Van"]
console.log(person2.friends); //["Shelby","Court"]
console.log(person1.friends == person2.friends); //false
console.log(person1.sayName == person2.sayName); //true

