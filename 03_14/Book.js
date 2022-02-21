class Book {
  constructor(numPages, author, publicationDate) {
    this.numPages = numPages;
    this.author = author;
    this.publicationDate = publicationDate;
    this.numEditions = 1;
    this.copiesSold = 0;
  }

  addEdition() {
    this.numEditions += 1;
  }

  addCopiesSold(numCopies) {
    this.copiesSold += numCopies;
  }
}

export default Book;
