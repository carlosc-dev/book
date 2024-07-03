'use strict'


import './flipbook-viewer.js';

const book = "../books/pdfcoffee.com_the-art-of-landscape-photography-pdf-free.pdf";

console.log("test log mi pana", flipbook)


flipbook.init(book, 'div-id', (err, viewer) => {
  if (err) console.error(err);

  console.log('Number of pages: ' + viewer.page_count);
  viewer.on('seen', n => console.log('page number: ' + n));

  next.onclick = () => viewer.flip_forward();
  prev.onclick = () => viewer.flip_back();
  zoom.onclick = () => viewer.zoom();

});
