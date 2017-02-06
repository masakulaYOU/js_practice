/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-02-06 12:41:03
 * @version $Id$
 */

/*
稳妥对象，指的是没有公共属性，而且其方法也不引用this的对象
稳妥对象适合用在一些安全的环境中，这些环境禁止使用this和new，或者防止数据被其他应用程序改动时使用
稳妥构造函数遵循与寄生构造函数类似的模式，但是有两点不同：
1. 新创建的对象的实例方法不引用this
2. 不使用new操作符调用构造函数
*/


function Person(name, age, job) {
	var o = new Object();
	o.name = name;
	o.age = age;
	o.job = job;

	o.sayName = function() {
		console.log(name);
	}

	return o;
}

var friend = Person("Nicholas", 29, "Software Engineer");
friend.sayName();  //Nicholas

//friend是一个稳妥对象，除了调用sayName外，没有其他方法可以访问其内部成员