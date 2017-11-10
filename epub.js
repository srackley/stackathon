import axios from 'axios';
import EPub from 'epub';
import { writeBookData } from './firebase';

async function loadBook() {
  const epub = await axios.get('/books/book1.epub', { responseType: 'arraybuffer' })
    .then(_ => window.buf = Buffer.from(_.data))
    .then(_ => new EPub(_));

  epub.on('end', (err) => {
    console.log('METADATA:\n');
    console.log(epub.metadata.creator);

    writeBookData(epub.metadata.title, epub.metadata.creator);
  });


  epub.parse();

  window.book = epub;
}

loadBook();
