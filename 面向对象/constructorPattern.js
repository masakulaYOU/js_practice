/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-02-05 21:11:42
 * @version $Id$
 */

function person(name, age, job) {
	this.name = name;
	this.age = age;
	this.job = job;

	this.sayName = function(){
		console.log(this.name);
	}
}

var person1 = new person("Nicholas", 29, "Software Engineer");
var person2 = new person("Greg", 27, "Doctor");

person1.sayName();
person2.sayName();