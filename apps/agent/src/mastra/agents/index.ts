import { deepseek } from "@ai-sdk/deepseek";
import { Agent } from "@mastra/core/agent";

export const spaceAgent =  new Agent({
    name: 'space-agent',
    instructions: 'A space agent that can answer questions about zero-space',
    // tools: [searchTool],
    model: deepseek('deepseek-chat')
});
