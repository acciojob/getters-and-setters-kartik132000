class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  get age() {
    return this._age;
  }

  set age(age) {
    this._age = age;
  }
}

class Student extends Person {
  study() {
    return `${this.name} is studying`;
  }
}

class Teacher extends Person {
  teach() {
    return `${this.name} is teaching`;
  }
}

function createPerson() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const person = new Person(name, age);
    displayOutput(`Created Person: ${person.name}, Age: ${person.age}`);
}

function createStudent() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const student = new Student(name, age);
    displayOutput(student.study());
}

function createTeacher() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const teacher = new Teacher(name, age);
    displayOutput(teacher.teach());
}

function displayOutput(message) {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `<p>${message}</p>`;
}
