// Only change code below this line
class Book {
    constructor(title) {
      this._title = title;
    }
  // getter
    get title() {
      return this._title;
    }
  // setter
    set title(newTitle) {
      this._title = newTitle;
    }
  }
  // Only change code above this line
  const littlePrince = new Book("The Little Prince");
  console.log(littlePrince.title);
  littlePrince.title = "Le Petit Prince";
  console.log(littlePrince.title);//Tesla
  module.exports = Book;