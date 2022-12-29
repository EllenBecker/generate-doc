import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GenerateModule } from './document/generate.module';

@Module({
  imports: [GenerateModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
