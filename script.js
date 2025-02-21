//complete this code
class Person {
	const person = new person("kartik",30);
	console.log(person.kartik);
	person.age = 25;
	console.log(person.age);
}

class Student extends Person {
	const student =  new student("frank",20);
	student.study();
}

class Teacher extends Person {
	const teacher = new Teacher("boby",45);
	teacher.teach();
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
