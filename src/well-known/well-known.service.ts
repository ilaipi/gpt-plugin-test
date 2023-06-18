import { Inject, Injectable } from '@nestjs/common';
import { Request } from 'express';

import { DESCRIPTION_FOR_MODEL } from './description_for_model';

@Injectable()
export class WellKnownService {
  constructor(
    @Inject('chatgpt-plugin')
    private readonly chatgptPlugin: any, // if it's ok, what type shold here be?
  ) {}
  async aiPlugin(req: Request) {
    const url = new URL(req.url);
    const host = req.headers.host;
    const openAPIUrl = `${url.protocol}//${host}/openapi.json`;
    const legalUrl = `${url.protocol}//${host}/legal`;
    const logoUrl = `${url.protocol}//${host}/logo.svg`;
    const pluginManifest = this.chatgptPlugin(
      {
        description_for_human: 'Create and edit diagrams directly in chat.',
        name_for_human: 'Show Me Diagrams',
        logo_url: logoUrl,
        contact_email: 'mz.yyam@gmail.com',
        legal_info_url: legalUrl,
        description_for_model: DESCRIPTION_FOR_MODEL,
      },
      { openAPIUrl },
    );
    return JSON.stringify(pluginManifest, null, 2);
  }
}
