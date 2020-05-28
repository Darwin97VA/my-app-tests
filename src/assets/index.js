
const { PdfReader } = require('pdfreader')
const pdfLector = new PdfReader()


const callback = str => console.log(str)

pdfLector.parseFileItems('ejemplo.pdf', function(err, item) {
    if (err) callback(err);
    else if (!item) callback();
    else if (item.text) console.log(item.text);
})