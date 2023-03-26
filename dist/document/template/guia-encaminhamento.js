"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateGuiaEncaminhamento = void 0;
class TemplateGuiaEncaminhamento {
    templateGuiaEncaminhamento(agendamento) {
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
                            h: 750,
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
                        body: [
                            this.getLogo(),
                            this.getCabecalho(agendamento),
                            this.getCorpo(agendamento),
                        ],
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
                corpo: {
                    margin: [5, 1, 5, 1],
                    alignment: 'left',
                    fontSize: 8,
                    color: '#464646',
                },
                lista: {
                    margin: [0, 0, 0, 0],
                    alignment: 'center',
                    fontSize: 8,
                    color: '#464646',
                },
                tituloLista: {
                    bold: true,
                    fontSize: 8,
                    color: '#464646',
                },
            },
        };
    }
    getLogo() {
        return [
            {
                image: 'data:image/png;base64,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',
                width: 60,
                alignment: 'left',
                margin: [10, 0, 0, 0],
                border: [false, false, false, false],
            },
        ];
    }
    getCabecalho(agendamento) {
        return [
            {
                text: ['Guia de Encaminhamento de Exames \n'],
                bold: true,
                color: 'black',
                fontSize: 15,
                alignment: 'center',
                absolutePosition: { x: 60, y: 70 },
                border: [false, false, false, false],
            },
        ];
    }
    getCorpo(agendamento) {
        return [
            {
                style: 'tabela',
                border: [false, false, false, false],
                table: {
                    widths: ['100%'],
                    border: [false, false, false, false],
                    body: [
                        [
                            {
                                table: {
                                    widths: ['95%'],
                                    body: [
                                        [
                                            {
                                                text: 'Funcionário',
                                                border: [false, false, false, false],
                                                fillColor: '#E3E3E3',
                                            },
                                        ],
                                    ],
                                },
                                absolutePosition: { x: 60, y: 130 },
                                border: [false, false, false, false],
                            },
                        ],
                        [
                            {
                                table: {
                                    widths: ['95%'],
                                    body: [
                                        [
                                            {
                                                text: 'Exames à Realizar',
                                                border: [false, false, false, false],
                                                fillColor: '#E3E3E3',
                                            },
                                        ],
                                    ],
                                },
                                style: 'estilo',
                                border: [false, false, false, false],
                                absolutePosition: { x: 60, y: 230 },
                            },
                        ],
                    ],
                },
            },
        ];
    }
}
exports.TemplateGuiaEncaminhamento = TemplateGuiaEncaminhamento;
//# sourceMappingURL=guia-encaminhamento.js.map