function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
    this.subject = null;
    this.excluded = null; 
}

Student.prototype.setSubject = function(subjectName) {
    this.subject = subjectName;
};

Student.prototype.addMarks = function(...marksToAdd) {
    if (this.excluded) {
        return; 
    }
    this.marks.push(...marksToAdd);
};


Student.prototype.getAverage = function() {
    if (this.marks.length > 0) {
        const sum = this.marks.reduce((accum, mark) => accum + mark, 0);
        return sum / this.marks.length;
    }
    return 0;
};

Student.prototype.exclude = function(reason) {
    this.subject = null; 
    this.marks = []; 
    this.excluded = reason;
};