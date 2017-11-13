import axios from 'axios';
import EPub from 'epub';

async function loadBook() {
  const books = [];
  for (let i = 1; i < 54; i++) {
    const epub = await axios.get(`/books/book${i}.epub`, { responseType: 'arraybuffer' })
      .then(_ => window.buf = Buffer.from(_.data))
      .then(_ => new EPub(_));

    epub.on('end', (err) => {
      const book = {
        title: epub.metadata.title,
        author: epub.metadata.creator,
        contents: epub.spine.contents
      };
      books.push(book);
    });

    epub.parse();
  }
  return books;
}

async function getAllTheBooks() {
  const answer = await loadBook();
  return answer;
}


export default getAllTheBooks;
