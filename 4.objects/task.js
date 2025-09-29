function Student(name, gender, age) {
    this.name = name;        // Имя студента
    this.gender = gender;    // Пол студента
    this.age = age;          // Возраст студента
    this.marks = [];         // Массив оценок
    this.subject = null;     // Предмет
    this.excluded = false;   // статус отчисления
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
console.log(student1); // Студент

let student2 = new Student("Артём", "мужской", 25);
student2.setSubject("Geometry");
student2.exclude('плохая учёба');
console.log(student2); // Студент