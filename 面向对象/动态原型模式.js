/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-02-06 12:25:03
 * @version $Id$
 */

/*
动态原型模式将所有的信息都封装在了构造函数中，而通过在构造函数中初始化原型，又保持了同时使用构造函数和原型的优点
*/

function Person(name, age, job) {
	//属性
	this.name = name;
	this.age = age;
	this.job = job;

	//方法
	if (typeof this.sayName != "function") {
		Person.prototype.sayName = function(){
			console.log(this.name);
		}
	}
}

var friend = new Person("Nicholas", 29, "Software Engineer");
friend.sayName();//Nicholas