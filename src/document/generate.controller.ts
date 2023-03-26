import { Controller, Post } from '@nestjs/common';
import { GenerateService } from './generate.service';

@Controller('generate')
export class GenerateController {
  constructor(private readonly generateService: GenerateService) { }

  @Post('/document')
  generateDocument() {
    return this.generateService.generateDocument();
  }
}
