/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-02-06 11:57:24
 * @version $Id$
 */

function Person(name, age, job) {
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = function(){
		console.log(this.name);
	}
}


//当做构造函数使用
var person = new Person("Nicholas", 29, "Software Engineer");
person.sayName();  //Nicholas

//当做普通函数调用
Person("Greg", 27, "Doctor"); //添加到window
window.sayName(); //Greg

//在另一个对象的作用域中调用
var  o  = new Object();
Person.call(o,"Kristen", 25, "Nurse");
o.sayName(); //Kristen