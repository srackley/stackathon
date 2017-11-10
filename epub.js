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

    // get first chapter
    epub.getChapter(epub.spine.contents[10].id, (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(epub);
      console.log(`${data.substr(0, 512)}...`); // first 512 bytes
    });

    epub.getImage(epub.id, (err, data) => {
      console.log('Image, ', data);
    });
    writeBookData(epub.metadata.title, epub.metadata.creator);
  });


  epub.parse();

  window.book = epub;
}

loadBook();
