import { Component, OnInit } from '@angular/core';
import pdfjsLib from 'pdfjs-dist';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';
import Pdf2TextObj from './dist';

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

function getWindows_():any {
  return window
}
@Component({
  selector: 'app-lector-pdf-js',
  templateUrl: './lector-pdf-js.component.html',
  styleUrls: ['./lector-pdf-js.component.css']
})
export class LectorPdfJsComponent implements OnInit {

  PDF_URL = './../../../assets/ejemplo.pdf';
  textPage1: string = '';
  textPage2: string = '';
  
  constructor() {
    // pdfjsLib.getDocument(this.pdf).promise.then(function(pdf) {
    //   pdf.getPage(1).then(function(page) {
    //     // you can now use *page* here
    //     console.log
    //   });
    // })
    
    this.readerPDF().then(console.log)
    // this.reader2();
  }

  async readerPDF() {
    try {
      const PDFDocumentInstance = await pdfjsLib.getDocument(this.PDF_URL);
      var totalPages = PDFDocumentInstance._pdfInfo.numPages;
      var pageNumber = 1;
      
      // Extract the text
      const textPage: string = await getPageText(pageNumber , PDFDocumentInstance);
      // Show the text of the page in the console
      this.textPage1 = textPage;
      return this.textPage1
    } catch(e) {
      return e
    }
  }
  reader2() {
    let toText = Pdf2TextObj();
    let onPageDone = function() {}; // don't want to do anything between pages
    let onFinish = function(data){
      this.textPage2 = data;
    }
    console.log(toText)
    toText.pdfToText(this.PDF_URL, onPageDone, onFinish);
  }
  ngOnInit(): void {
  }

}

function getPageText(pageNum, PDFDocumentInstance): Promise<string> {
  // Return a Promise that is solved once the text of the page is retrieven
  return new Promise(function (resolve, reject) {
      PDFDocumentInstance.getPage(pageNum)
        .then(function (pdfPage) {
          // The main trick to obtain the text of the PDF page, use the getTextContent method
          pdfPage.getTextContent().then(function (textContent) {
            var textItems = textContent.items;
            var finalString: string = "";

            // Concatenate the string of the item to the final string
            for (var i = 0; i < textItems.length; i++) {
                var item = textItems[i];

                finalString += item.str + " ";
            }

            // Solve promise with the text retrieven from the page
            resolve(finalString);
        })
        .catch((e)=>{
          return '';
        })
      });
  });
}