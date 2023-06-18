import * as rawbody from 'raw-body';
import {
  createParamDecorator,
  HttpException,
  HttpStatus,
  ExecutionContext,
} from '@nestjs/common';

export const PlainBody = createParamDecorator(
  async (_, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();
    if (req.readable) {
      return (await rawbody(req)).toString().trim();
    }
    throw new HttpException(
      'Body aint text/plain',
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  },
);
