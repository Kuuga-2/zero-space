import { createOpenAI } from '@ai-sdk/openai';

export const siliconflowLLM = createOpenAI({
    baseURL: 'https://api.siliconflow.cn/v1',
    apiKey: process.env.SILICONFLOW_API_KEY,
});

export const embeddingModel = siliconflowLLM.embedding('netease-youdao/bce-embedding-base_v1');