import { openai } from '@ai-sdk/openai';
// Latency improvement: Default model updated to hybrid-o3-perplexity in lib/ai/models.ts
import { experimental_wrapLanguageModel as wrapLanguageModel } from 'ai';

import { customMiddleware } from './custom-middleware';

export const customModel = (apiIdentifier: string) => {
  return wrapLanguageModel({
    model: openai(apiIdentifier),
    middleware: customMiddleware,
  });
};
