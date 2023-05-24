// Constructor (ES5)
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// getSummary
Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

// Magazine constructor
function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);

  this.month = month;
}

// Inherit prototype
Magazine.prototype = Object.create(Book.prototype);

// Instantiate Magazine object
const mag1 = new Magazine("Mag One", "John Doe", 2017, "Jan");

Magazine.prototype.constructor = Magazine;

console.log(mag1.getSummary());
console.log(mag1);
