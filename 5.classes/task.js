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

    fix() {
        this.state = Math.min(this.state * 1.5, 100); // Увеличиваем состояние, не превышая 100
    }


    set state(value) {
        if (value < 0) {
            this._state = 0;
        } else if (value > 100) {
            this._state = 100;
        } else {
            this._state = value;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine'; // Тип журнала
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author; // Добавляем автора
        this.type = 'book'; // Тип книги
    }
}

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
