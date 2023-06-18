import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import config from '@gpt/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WellKnownModule } from './well-known/well-known.module';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true,
    }),
    WellKnownModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
