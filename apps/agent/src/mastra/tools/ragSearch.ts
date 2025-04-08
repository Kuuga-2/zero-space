import { Agent } from '@mastra/core/agent';
import { createVectorQueryTool } from '@mastra/rag';
import { embeddingModel } from '../models/siliconflow';
import { deepseek } from '@ai-sdk/deepseek';
 
// Create a tool for semantic search over our paper embeddings
const vectorQueryTool = createVectorQueryTool({
  vectorStoreName: 'pgVector',
  indexName: 'papers',
  model: embeddingModel,
});
 
export const researchAgent = new Agent({
  name: 'Research Assistant',
  instructions: 
    `You are a helpful research assistant that analyzes User uploaded documents.
    Use the provided vector query tool to find relevant information from your knowledge base, 
    and provide accurate, well-supported answers based on the retrieved content.
    Focus on the specific content available in the tool and acknowledge if you cannot find sufficient information to answer a question.
    Base your responses only on the content provided, not on general knowledge.`,
  model: deepseek('deepseek-chat'),
  tools: {
    vectorQueryTool,
  },
});