import { TemplateDocument } from './template/template-document';
export declare class DocumentService {
    private readonly templateDocument;
    constructor(templateDocument: TemplateDocument);
    report(): Promise<any>;
}
