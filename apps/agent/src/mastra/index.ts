
import { createLogger, Mastra } from '@mastra/core';
import { spaceAgent } from './agents';
import { zeroGLLM } from './models/0g';
import { siliconflowLLM } from './models/siliconflow';

export const mastra = new Mastra({
    agents: { spaceAgent },
    logger: createLogger({
        name: 'Mastra',
        level: 'debug',
    }),
});
