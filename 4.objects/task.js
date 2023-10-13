function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if(Array.isArray(this.marks)) {
    this.marks.push(...marks);
     }
}


Student.prototype.getAverage = function () { 
  let sum = 0;
  if(Array.isArray(this.marks)) {
    for (let i = 0; i < this.marks.length; i++) {
      sum += this.marks[i] / this.marks.length;
    }
  }
  return sum;
}


Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
