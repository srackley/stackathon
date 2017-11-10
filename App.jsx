import axios from 'axios';
import EPub from 'epub';

async function loadBook() {
  const book = await axios.get('/books/book1.epub', { responseType: 'arraybuffer' })
    .then(_ => window.buf = Buffer.from(_.data))
    .then(_ => new EPub(_));

  console.log(book);
  window.book = book;


// epubParser.open(book, (err, epubData) => {
//   if (err) return console.log(err);
//   console.log(epubData.easy);
//   console.log(epubData.raw.json.ncx);
// });
}

loadBook();

export default () => '🔥 Ready.';
