import { GenerateService } from './generate.service';
export declare class GenerateController {
    private readonly generateService;
    constructor(generateService: GenerateService);
    generateDocument(): Promise<any>;
    atividade(a: string[]): void;
    poligono(string: string): boolean;
    verificaPoligono(string: string): void;
}
