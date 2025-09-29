//Задание 1
// Базовый класс для печатных изданий
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100; // состояние по умолчанию
        this.type = null; // тип по умолчанию
    }

    // Метод для улучшения состояния
    fix() {
        this.state = Math.min(this.state * 1.5, 100); // Увеличиваем состояние, не превышая 100
    }

    // 'Setter' для свойства state
    set state(value) {
        if (value < 0) {
            this._state = 0;
        } else if (value > 100) {
            this._state = 100;
        } else {
            this._state = value;
        }
    }

    // 'Getter' для свойства state
    get state() {
        return this._state;
    }
}

// Класс для журналов
class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine'; // Тип журнала
    }
}

// Класс для книг
class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author; // Добавляем автора
        this.type = 'book'; // Тип книги
    }
}

// Классы для различных подтипов книг
class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel'; // Тип романа
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic'; // Тип фантастики
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective'; // Тип детектива
    }
}

//Задание 2
class Library {
    constructor(name) {
        this.name = name;
        this.books = []; // Хранилище книг
    }

    // Метод для добавления книги
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        } else {
            console.log(`Книга "${book.name}" не может быть добавлена. Состояние низкое.`);
        }
    }

    // Метод для нахождения книги
    findBookBy(type, value) {
        return this.books.find(book => book[type] === value) || null;
    }

    // Метод для выдачи книги
    giveBookByName(bookName) {
        const bookIndex = this.books.findIndex(book => book.name === bookName);
        if (bookIndex !== -1) {
            return this.books.splice(bookIndex, 1)[0]; // Убираем и возвращаем книгу
        }
        return null; // Если книга не найдена
    }
}

// Задание 3

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {}; // Объект для хранения оценок по предметам
    }

    addMark(mark, subject) {
        if (mark < 2 || mark > 5) {
            console.log(`Оценка ${mark} не может быть добавлена. Она должна быть в пределах от 2 до 5.`);
            return; // Если оценка не в диапазоне, завершаем метод
        }

        // Если предмет отсутствует, добавляем его с пустым массивом
        if (!this.marks[subject]) {
            this.marks[subject] = [];
        }

        // Добавляем оценку в соответствующий предмет
        this.marks[subject].push(mark);
    }

    // Метод для получения средней оценки по предмету
    getAverageBySubject(subject) {
        const marks = this.marks[subject];
        if (!marks || marks.length === 0) {
            return 0; // Если предмета нет или нет оценок, возвращаем 0
        }

        // Считаем сумму оценок
        const total = marks.reduce((acc, mark) => acc + mark, 0);
        return total / marks.length; // Возвращаем среднюю оценку
    }

    // Метод для получения общей средней оценки
    getAverage() {
        const subjects = Object.keys(this.marks);
        if (subjects.length === 0) {
            return 0; // Если нет ни одного предмета, возвращаем 0
        }

        // Считаем общую среднюю оценку по всем предметам
        const totalAverage = subjects.reduce((acc, subject) => acc + this.getAverageBySubject(subject), 0);
        return totalAverage / subjects.length; // Возвращаем среднюю оценку по всем предметам
    }
}