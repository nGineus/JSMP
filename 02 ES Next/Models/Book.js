export class Book {
  title;
  author;
  textContent: [];

  constructor({
    author,
    title,
    textContent: [];
              }) {
    this.readAuthor();
    this.readThitle();
    this.readTextContent();
  }

  readAuthor() {
    console.log(`This book was wroten by ${this.author}`);
  }

  readThitle() {
    console.log(`This book was wroten by ${this.title}`);
  }

  readTextContent() {
    console.log(`This book was wroten by ${this.title}`);
  }


}
