class Patron {
    constructor(name, email){
        this.name = name;
        this.email = email;
        this.currentBook = null;
        this.balance = 0;
    }
    checkOut(book) {
        this.currentBook = book;
        book.patron = this;
        book.out = true;
    }

    returnBook(book) {
        this.currentBook = book;
        book.patron = null;
        book.dueDate = null;
        book.out = false;
    }
}
