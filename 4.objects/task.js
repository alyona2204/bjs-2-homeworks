function Student(name, gender, age) {
    this.name = name;        // Имя студента
    this.gender = gender;    // Пол студента
    this.age = age;          // Возраст студента
    this.marks = [];         // Массив оценок
    this.subject = null;     // Предмет (по умолчанию null)
}

Student.prototype.setSubject = function(subjectName) {
    this.subject = subjectName; 
};

Student.prototype.addMarks = function(...marksToAdd) {
    if (this.marks) {
        this.marks.push(...marksToAdd); 
    }
};

Student.prototype.getAverage = function() {
    if (this.marks.length === 0) {
        return 0; 
    }
    const sum = this.marks.reduce((accum, mark) => accum + mark, 0); 
    return sum / this.marks.length; 
};

Student.prototype.exclude = function(reason) {
    delete this.subject; 
    delete this.marks;   
    this.excluded = reason; 
};

