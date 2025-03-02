// Define your models here.

export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
}

export const models: Array<Model> = [
  {
    id: 'gpt-4o',
    label: 'GPT 4o',
    apiIdentifier: 'gpt-4o',
    description: 'For complex, multi-step tasks',
  },
  {
    id: 'hybrid-o3-perplexity',
    label: 'Hybrid O3 Perplexity',
    apiIdentifier: 'hybrid-o3-perplexity',
    description: 'Hybrid O3 model integrated with perplexity.ai for lower latency',
  }
  // {
  //   id: 'gpt-4o',
  //   label: 'GPT 4o',
  //   apiIdentifier: 'gpt-4o',
  //   description: 'For complex, multi-step tasks',
  // },
] as const;

export const DEFAULT_MODEL_NAME: string = 'gpt-4o';
