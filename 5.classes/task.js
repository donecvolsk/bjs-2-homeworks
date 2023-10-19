
/*Задача 1. Печатное издание*/
class PrintEditionItem {

    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    
    fix() {      
        return this.state = this._state * 1.5;
    } 

    set state(newValue) {
        if(newValue < 0) {
           return this._state = 0;
        }
        else if(newValue > 100) {
            return this._state = 100;
        }
        return this._state = newValue;
    }
    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, type) {
        super(name, releaseDate, pagesCount, type);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, type) {
        super(name, releaseDate, pagesCount, type);
        this.type = "book";
        this.author = author;
    }  
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, type) {
        super(author, name, releaseDate, pagesCount, type);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, type) {
        super(author, name, releaseDate, pagesCount, type);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, type) {
        super(author, name, releaseDate, pagesCount, type);
        this.type = "detective";
    }
}

/*Задача 2. Библиотека*/

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if(book._state > 30) {
            this.books.push(book);
        }   
    }

    findBookBy(type, value) {
        let searchResult = this.books.find((book) => book[type] === value);
        if(searchResult) {
          return searchResult;
        }
        return null;
      }

      giveBookByName(bookName) {
        let result = this.books.find((book) => book.name === bookName);
        if (result) {
            let index = this.books.indexOf(result);
            this.books.splice(index, 1);
            return result;
        }
         return null;
      }
}


/* код для проверки */
/*const library = new Library("Библиотека имени Ленина");

library.addBook(
 new DetectiveBook(
   "Артур Конан Дойл",
   "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
   2019,
   1008
 )
);
library.addBook(
 new FantasticBook(
   "Аркадий и Борис Стругацкие",
   "Пикник на обочине",
   1972,
   168
 )
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3*/




