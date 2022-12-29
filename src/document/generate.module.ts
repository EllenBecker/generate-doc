import { Module } from '@nestjs/common';
import { GenerateService } from './generate.service';
import { GenerateController } from './generate.controller';
import { TemplateDocument } from './template/template-document';

@Module({
  controllers: [GenerateController],
  providers: [GenerateService, TemplateDocument],
  exports: [GenerateService],
})
export class GenerateModule {}
