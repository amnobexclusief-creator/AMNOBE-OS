import { NextResponse } from 'next/server';
import { ask } from '../../../services/ai/router';
import { memoryService as memory } from '../../../services/memory';
import { MemoryType } from '../../../services/memory/memory.types';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { prompt, userId, conversationId } = body;
    if (!prompt) return NextResponse.json({ error: 'prompt required' }, { status: 400 });

    // Save user message
    const userEntry = await memory.add(MemoryType.Conversation, prompt, { title: 'user message', ownerId: userId });

    // Ask AI Router (mock)
    const aiRes = await ask({ prompt, userId, conversationId });
    const assistantText = aiRes.text || String(aiRes);

    // Save assistant reply
    const assistantEntry = await memory.add(MemoryType.Conversation, assistantText, { title: 'assistant reply', ownerId: userId });

    return NextResponse.json({ reply: assistantText, userEntry, assistantEntry });
  } catch (err: any) {
    console.error('api/buddy error', err);
    return NextResponse.json({ error: err?.message || String(err) }, { status: 500 });
  }
}
