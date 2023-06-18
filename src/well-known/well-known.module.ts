import { Module } from '@nestjs/common';

import { PkgModule } from '@gpt/providers';

import { WellKnownController } from './well-known.controller';
import { WellKnownService } from './well-known.service';

@Module({
  imports: [PkgModule],
  controllers: [WellKnownController],
  providers: [WellKnownService],
})
export class WellKnownModule {}
