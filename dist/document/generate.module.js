"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateModule = void 0;
const common_1 = require("@nestjs/common");
const generate_service_1 = require("./generate.service");
const generate_controller_1 = require("./generate.controller");
const template_document_1 = require("./template/template-document");
let GenerateModule = class GenerateModule {
};
GenerateModule = __decorate([
    (0, common_1.Module)({
        controllers: [generate_controller_1.GenerateController],
        providers: [generate_service_1.GenerateService, template_document_1.TemplateDocument],
        exports: [generate_service_1.GenerateService],
    })
], GenerateModule);
exports.GenerateModule = GenerateModule;
//# sourceMappingURL=generate.module.js.map