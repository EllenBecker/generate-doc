import { TemplateDocument } from './template/template-document';
export declare class GenerateService {
    private readonly templateDocument;
    constructor(templateDocument: TemplateDocument);
    generateDocument(): Promise<any>;
}
