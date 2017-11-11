import axios from 'axios';
import EPub from 'epub';
import { writeBookData } from './firebase';

const chapters = [];
async function loadBook() {
  for (let i = 1; i < 56; i++) {
    const epub = await axios.get(`/books/book${i}.epub`, { responseType: 'arraybuffer' })
      .then(_ => window.buf = Buffer.from(_.data))
      .then(_ => new EPub(_));

    epub.on('end', (err) => {
      for (let i = 0; i < epub.spine.contents.length; i++) {
        epub.getChapter(epub.spine.contents[i].id, (err, data) => {
          if (err) {
            console.log(err);
            return;
          }
          chapters.push(data);
        });

        writeBookData(i, epub.metadata.title, epub.metadata.creator, epub.spine.contents, chapters);
      }
    });

    epub.parse();
  }
}

loadBook();
