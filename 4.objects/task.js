function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
    this.subject = null;
    this.excluded = false;
    this.excludeReason = null;
}

Student.prototype.setSubject = function(subjectName) {
    this.subject = subjectName;
};

Student.prototype.addMarks = function(...marksToAdd) {
    if (!this.excluded) {
        this.marks.push(...marksToAdd);
    }
};


Student.prototype.getAverage = function() {
    if (this.marks.length > 0) {
        const sum = this.marks.reduce((accum, mark) => accum + mark, 0);
        return sum / this.marks.length;
    }
    return 0;
};

Student.prototype.exclude = function(reason) {
    this.subject = undefined;
    this.marks = undefined;
    this.excluded = true;
    this.excludeReason = reason;
};

let student1 = new Student("Василиса", "женский", 19);
student1.setSubject("Algebra");
console.log(student1.getAverage()); // 0
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage()); // 4.5
 

let student2 = new Student("Артём", "мужской", 25);
student2.setSubject("Geometry");
student2.exclude('плохая учёба');
console.log(student2);

