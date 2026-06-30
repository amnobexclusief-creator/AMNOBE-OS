import { NextResponse } from 'next/server';
import { memoryService } from '../../../services/memory';
import { MemoryType } from '../../../services/memory/memory.types';

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const type = url.searchParams.get('type');
    if (type === 'conversation') {
      const entries = await memoryService.listType(MemoryType.Conversation);
      return NextResponse.json(entries);
    }
    // return all for now
    const all = await memoryService.listType(MemoryType.Conversation);
    return NextResponse.json(all);
  } catch (err: any) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}


