import type { MemoryEntry } from '../services/memory/memory.types';

export type AskParams = {
  prompt: string;
  userId?: string;
  conversationId?: string;
};

export async function ask({ prompt, userId, conversationId }: AskParams) {
  // Mock implementation: quick deterministic reply. Replace with adapters later.
  const reply = `Buddy (mock): ${prompt.trim().slice(0, 120)}${prompt.length > 120 ? '...' : ''}`;

  // Simulate latency
  await new Promise((r) => setTimeout(r, 300));

  return {
    text: reply,
    meta: {
      provider: 'mock',
      length: reply.length,
    },
  } as { text: string; meta: Record<string, unknown> };
}

export default { ask };