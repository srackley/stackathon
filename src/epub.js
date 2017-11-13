import axios from 'axios';
import EPub from 'epub';

const books = [];

async function loadBook(i) {
  const chapters = [];

  const epub = await axios.get(`/books/book${i}.epub`, { responseType: 'arraybuffer' })
    .then(_ => window.buf = Buffer.from(_.data))
    .then(_ => new EPub(_));

  epub.on('end', (err) => {
    console.log(books);
    for (let j = 0; j < epub.spine.contents.length; j++) {
      epub.getChapter(epub.spine.contents[j].id, (err, data) => {
        if (err) {
          console.log(err);
          return;
        }
        chapters.push(data);
      });
    }

    const book = {
      title: epub.metadata.title,
      author: epub.metadata.creator,
      chapters,
      contents: epub.spine.contents
    };
    books.push(book);
  });

  epub.parse();
}

for (let i = 1; i < 30; i++) {
  loadBook(i);
}

export default books;
