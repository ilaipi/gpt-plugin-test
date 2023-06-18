import { Global, Module } from '@nestjs/common';

const chatgptPlugin = {
  provide: 'chatgpt-plugin',
  useFactory: async () => {
    const pkg = await import('chatgpt-plugin');
    return pkg;
  },
};

@Global()
@Module({
  providers: [chatgptPlugin],
  exports: [chatgptPlugin],
})
export class PkgModule {}
