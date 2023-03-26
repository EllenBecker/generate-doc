"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateDocument = void 0;
class TemplateDocument {
    templateDocument() {
        return {
            defaultStyle: {
                font: 'Helvetica',
            },
            content: [
                {
                    canvas: [
                        {
                            type: 'rect',
                            x: 5,
                            y: 5,
                            w: 510,
                            h: 80,
                            r: 8,
                            lineColor: '#E3E3E3',
                            lineWidth: 1,
                        },
                    ],
                },
                {
                    style: 'tabela',
                    table: {
                        widths: ['100%'],
                        body: [this.getTitulo(), this.getRodape()],
                    },
                    absolutePosition: { x: 45, y: 60 },
                },
            ],
            styles: {
                tabela: {
                    alignment: 'center',
                    fontSize: 10,
                    color: '#464646',
                },
            },
        };
    }
    getTitulo() {
        return [
            {
                text: ['Documento emitido via generate-doc\n '],
                bold: true,
                color: 'black',
                fontSize: 15,
                alignment: 'center',
                absolutePosition: { x: 60, y: 70 },
                border: [false, false, false, false],
            },
        ];
    }
    getRodape() {
        return [
            {
                text: ['By Ellen Becker'],
                bold: true,
                color: 'black',
                fontSize: 9,
                alignment: 'right',
                absolutePosition: { x: 60, y: 110 },
                border: [false, false, false, false],
            },
        ];
    }
}
exports.TemplateDocument = TemplateDocument;
//# sourceMappingURL=template-document.js.map