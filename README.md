# Zero Space 

## Features

### Document Processing & AI Chat
- 📄 Contract Upload: Upload and process contract documents to 0g platform
- 🤖 Agent Deployment: Deploy intelligent agents to 0g for document processing
- 💬 AI Chat Interface: Interactive chat interface powered by 0g
- 🔍 Context-Aware: Agents provide responses based on processed documents

## Project Structure

### Apps

- `apps/web`: dapp web application built with Next.js and shadcn/ui
  - Interactive UI for document upload
  - Chat interface for interacting with AI agents
  - Document management dashboard
  
- `apps/agent`: Agent application for 0g platform integration

### Packages

- `packages/ui`: Shared UI components library built with shadcn/ui
- `packages/contracts`: Shared type definitions and contracts between applications
- `packages/eslint-config`: Shared ESLint configurations
- `packages/typescript-config`: Shared TypeScript configurations

## Getting Started

Then install dependencies:

```bash
bun install
```

## Adding Components

To add shadcn/ui components to your app, run the following command:

```bash
bunx shadcn-ui@latest add button -c apps/web
```

This will place the UI components in the `packages/ui/src/components` directory.

## Using Components

To use the components in your apps, import them from the `ui` package:

```tsx
import { Button } from "@workspace/ui/components/button"
```

## Development

To run the web application:

```bash
bun dev
```

## Usage Guide

### Document Upload
1. Navigate to the document upload section
2. Select your contract or document files
3. The system will automatically process and upload them to 0g

### Agent Deployment
1. Agents are automatically deployed to 0g platform
2. Each agent specializes in specific document types and queries
3. Agents utilize RAG for enhanced response accuracy

### Chat Interface
1. Access the chat interface from the main dashboard
2. Start a conversation with the AI agent
3. The agent will provide context-aware responses based on:
   - Uploaded documents
   - Previous conversation context
   - RAG-enhanced knowledge base

### RAG Features
- Automatic document indexing
- Semantic search capabilities
- Context-aware response generation
- Real-time document reference

```bash
bun dev --filter web
```

To run the agent:

```bash
bun dev --filter agent
```
