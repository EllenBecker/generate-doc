"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentService = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
const path_1 = require("path");
const fs = require("fs");
const PdfPrinter = require("pdfmake");
const template_document_1 = require("./template/template-document");
let DocumentService = class DocumentService {
    constructor(templateDocument) {
        this.templateDocument = templateDocument;
    }
    async report() {
        const _templateDocument = this.templateDocument;
        return new Promise(function (resolve) {
            const fonts = {
                Helvetica: {
                    normal: 'Helvetica',
                    bold: 'Helvetica-Bold',
                    italics: 'Helvetica-Oblique',
                    bolditalics: 'Helvetica-BoldOblique',
                },
            };
            const dir = (0, path_1.join)(process.cwd(), 'downloads', 'documents');
            console.log(dir);
            const printer = new PdfPrinter(fonts);
            const docDefinitions = _templateDocument.templateDocument(printer);
            const pdfDoc = printer.createPdfKitDocument(docDefinitions);
            const numberRandom = (0, crypto_1.randomInt)(1000);
            const fileName = {
                nomeArquivo: `DOCUMENT_${numberRandom}.pdf`,
                url: [`${dir}/DOCUMENT_${numberRandom}.pdf`],
            };
            const completeFilePath = (0, path_1.join)(dir, fileName.nomeArquivo);
            const stream = pdfDoc.pipe(fs.createWriteStream(completeFilePath));
            pdfDoc.end();
            stream.on('finish', function () {
                resolve(fileName);
            });
        });
    }
};
DocumentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [template_document_1.TemplateDocument])
], DocumentService);
exports.DocumentService = DocumentService;
//# sourceMappingURL=document.service.js.map