import { Injectable } from '@nestjs/common';
import { randomInt } from 'crypto';
import { join } from 'path';
import * as fs from 'fs';
import PdfPrinter = require('pdfmake');

import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { TemplateDocument } from './template/template-document';

@Injectable()
export class GenerateService {
  constructor(private readonly templateDocument: TemplateDocument) {}

  async generateDocument() {
    const _templateDocument = this.templateDocument;
    return new Promise<any>(function (r) {
      const fonts = {
        Helvetica: {
          normal: 'Helvetica',
          bold: 'Helvetica-Bold',
          italics: 'Helvetica-Oblique',
          bolditalics: 'Helvetica-BoldOblique',
        },
      };

      const dir = join(process.cwd(), 'downloads', 'documents');
      console.log(dir);
      const printer = new PdfPrinter(fonts);
      const docDefinitions: TDocumentDefinitions =
        _templateDocument.templateDocument();
      const pdfDoc = printer.createPdfKitDocument(docDefinitions);
      const documentName = `DOCUMENT_${randomInt(1000)}.pdf`;
      const fileName = {
        nomeArquivo: documentName,
        url: [`${dir}/${documentName}`],
      };
      const completeFilePath = join(dir, fileName.nomeArquivo);
      const stream = pdfDoc.pipe(fs.createWriteStream(completeFilePath));
      pdfDoc.end();
      stream.on('finish', function () {
        r(fileName);
      });
    });
  }
}
