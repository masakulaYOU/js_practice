/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-02-06 12:02:02
 * @version $Id$
 */

function Person(name, age, job) {
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = function(){
		console.log(this.name);
	}
	/*
	this.sayName = new Function("console.log(this.name)")
	*/
}

var person1 = new Person("Nicholas", 29, "Software Engineer");
var person2 = new Person("Greg", 27, "Doctor");

console.log(person1.sayName == person2.sayName); //false


//////改进//////

function Book(name, edition) {
	this.name = name;
	this.edition = edition;
	this.sayName = sayName;
}

function sayName() {
	console.log(this.name);
}

var book1 = new Book("aaa", 1);
var book2 = new Book("bbb", 2);

console.log(book1.sayName == book2.sayName); //true
//两者共享了全局作用域中的sayName函数