// Object literal
// const book1 = {
//   title: "Book One",
//   author: "John Doe",
//   year: 2019,
//   getSummary: function () {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
//   },
// };

// console.log(book1.getSummary());

// Constructor
// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
// }

// Book.prototype.getSummary = function () {
//   return `${this.title} was written by ${this.author} in ${this.year}`;
// };

// Book.prototype.getAge = function () {
//   const years = new Date().getFullYear() - this.year;
//   return `${this.title} is ${years} years old`;
// };

// Book.prototype.revise = function (newYear) {
//   this.year = newYear;
//   this.revised = true;
// };

// const book1 = new Book("Book One", "John Doe", 2012);
// console.log(book1.revise(2020));
// console.log(book1.getSummary());
// console.log(book1.getAge());
// console.log(book1);

// Inheritance
// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
// }

// Book.prototype.getSummary = function () {
//   return `${this.title} was written by ${this.author} in ${this.year}`;
// };

// function Magazine(title, author, year, month) {
//   Book.call(this, title, author, year);
//   this.month = month;
// }

// Magazine.prototype = Object.create(Book.prototype);

// Magazine.prototype.constructor = Magazine;

// const mag = new Magazine("Magazine One", "John Doe", 2020, "Feb");

// console.log(mag);
// console.log(mag.getSummary());

// Object create
// const bookProtos = {
//   getSummary: function () {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
//   },
//   getAge: function () {
//     const years = new Date().getFullYear() - this.year;
//     return `${this.title} is ${years} years old`;
//   },
//   revise: function (newYear) {
//     this.year = newYear;
//     this.revised = true;
//   },
// };

// const book1 = Object.create(bookProtos, {
//   title: { value: "Book One" },
//   author: { value: "John Doe" },
//   year: { value: 2021 },
// });

// console.log(book1);
// console.log(book1);

// Classes
// class Book {
//   constructor(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//   }

//   getSummary() {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
//   }

//   getAge() {
//     const years = new Date().getFullYear() - this.year;
//     return `${this.title} is ${years} years old`;
//   }

//   revise(newYear) {
//     this.year = newYear;
//     this.revised = true;
//   }
// }

// const book1 = new Book("Book One", "John Doe", 2019);

// console.log(book1);
// console.log(book1.revise(2020));

// class Magazine extends Book {
//   constructor(title, author, year, month) {
//     super(title, author, year);
//     this.month = month;
//   }
// }

// const mag = new Magazine("Magazine One", "John Doe", 2023, "Jan");

// console.log(mag);
