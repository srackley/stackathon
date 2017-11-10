import axios from 'axios';
import EPub from 'epub';
import { writeBookData } from './firebase';

async function loadBook() {
  for (let i = 1; i < 56; i++) {
    const epub = await axios.get(`/books/book${i}.epub`, { responseType: 'arraybuffer' })
      .then(_ => window.buf = Buffer.from(_.data))
      .then(_ => new EPub(_));

    epub.on('end', (err) => {
      console.log('METADATA:\n');
      console.log(epub.spine);

      epub.getChapter(epub.spine.contents[10].id, (err, data) => {
        console.log(data);
      });

      writeBookData(epub.metadata.title, epub.metadata.creator, i);
    });

    epub.parse();
  }
}

loadBook();
