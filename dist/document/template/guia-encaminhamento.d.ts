import { TDocumentDefinitions } from 'pdfmake/interfaces';
export declare class TemplateGuiaEncaminhamento {
    templateGuiaEncaminhamento(agendamento: any): TDocumentDefinitions;
    getLogo(): {
        image: string;
        width: number;
        alignment: string;
        margin: number[];
        border: boolean[];
    }[];
    getCabecalho(agendamento: any): {
        text: string[];
        bold: boolean;
        color: string;
        fontSize: number;
        alignment: string;
        absolutePosition: {
            x: number;
            y: number;
        };
        border: boolean[];
    }[];
    getCorpo(agendamento: any): {
        style: string;
        border: boolean[];
        table: {
            widths: string[];
            border: boolean[];
            body: ({
                table: {
                    widths: string[];
                    body: {
                        text: string;
                        border: boolean[];
                        fillColor: string;
                    }[][];
                };
                absolutePosition: {
                    x: number;
                    y: number;
                };
                border: boolean[];
            }[] | {
                table: {
                    widths: string[];
                    body: {
                        text: string;
                        border: boolean[];
                        fillColor: string;
                    }[][];
                };
                style: string;
                border: boolean[];
                absolutePosition: {
                    x: number;
                    y: number;
                };
            }[])[];
        };
    }[];
}
