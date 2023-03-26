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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateController = void 0;
const common_1 = require("@nestjs/common");
const generate_service_1 = require("./generate.service");
let GenerateController = class GenerateController {
    constructor(generateService) {
        this.generateService = generateService;
    }
    generateDocument() {
        return this.generateService.generateDocument();
    }
    atividade(a) {
        console.log('\n \n ********************');
        console.log(a);
        for (let i = 0; i < a.length; i++) {
            const poligono = this.poligono(a[i]);
            if (!poligono) {
                this.verificaPoligono(a[i]);
            }
            else {
                console.log('É POLIGONO');
            }
        }
    }
    poligono(string) {
        if (string == string.split('').reverse().join('')) {
            return true;
        }
        else {
            return false;
        }
    }
    verificaPoligono(string) {
        let poligono = false;
        console.log('verificando poligono ' + string);
        console.log(string.split('').length);
        const arrayString = string.split('');
        for (let j = 0; poligono == true || j < arrayString.length; j++) {
            const caractereRetirado = arrayString.splice(j, 1);
            console.log(arrayString.toString());
            poligono = this.poligono(arrayString.toString());
            poligono
                ? console.log('SE TORNA POLIGONO SE TIRAR O ' + string[j])
                : string
                    .split('')
                    .push(...caractereRetirado)
                    .toString();
        }
    }
};
__decorate([
    (0, common_1.Post)('/document'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GenerateController.prototype, "generateDocument", null);
__decorate([
    (0, common_1.Post)('/atividade'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], GenerateController.prototype, "atividade", null);
GenerateController = __decorate([
    (0, common_1.Controller)('generate'),
    __metadata("design:paramtypes", [generate_service_1.GenerateService])
], GenerateController);
exports.GenerateController = GenerateController;
//# sourceMappingURL=generate.controller.js.map