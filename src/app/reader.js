import PdfReader from 'pdfreader'

const pdfLector = new PdfReader()

pdfLector.parseFileItems('/assets/ejemplo.pdf', function(err, item) {
    if (err) callback(err);
    else if (!item) callback();
    else if (item.text) console.log(item.text);
})