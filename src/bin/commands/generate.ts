import { CommandBuilder } from 'yargs';

export const command = `generate <swaggerUrl> <outDir>`;

export const describe = '根据 swaggerUrl 中的 swagger 定义自动生成到 outDir 中';

export const builder: CommandBuilder = {
  swaggerUrl: {
    description: 'swagger 定义文件的 url',
  },
  outDir: {
    description: '输出目录',
  },
};

interface Params {
  swaggerUrl: string;
  outDir: string;
}

export const handler = function ({ swaggerUrl, outDir }: Params) {
  // TODO: 根据 swagger 定义生成文件
};
