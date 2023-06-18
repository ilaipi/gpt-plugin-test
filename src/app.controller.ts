import { Controller, Post } from '@nestjs/common';

import { AppService } from './app.service';
import { PlainBody } from './plain-text.body';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
}
