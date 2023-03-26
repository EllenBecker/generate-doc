import { TDocumentDefinitions } from 'pdfmake/interfaces';
export declare class TemplateDocument {
    templateDocument(): TDocumentDefinitions;
    getTitulo(): {
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
    getRodape(): {
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
}
