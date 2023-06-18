import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

import { WellKnownService } from './well-known.service';

@Controller('.well-known')
export class WellKnownController {
  constructor(private readonly wellKnownService: WellKnownService) {}
  @Get('ai-plugin.json')
  async aiPlugin(@Req() req: Request) {
    return this.wellKnownService.aiPlugin(req);
  }
}
