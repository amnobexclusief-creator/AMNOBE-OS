import { MemoryService } from './memory.service';
import { MemoryType } from './memory.types';

// Example Express-like handlers (adapt to your framework)
const service = new MemoryService();

export async function createMemoryHandler(req: any, res: any) {
  const { type, content, title, ownerId } = req.body;
  if (!type || !content) return res.status(400).json({ error: 'type and content required' });
  const entry = await service.add(type as MemoryType, content, { title, ownerId });
  return res.status(201).json(entry);
}

export async function searchHandler(req: any, res: any) {
  const { q, type } = req.query;
  const results = await service.search(type ? (type as MemoryType) : null, q || '');
  return res.status(200).json(results);
}

export async function getHandler(req: any, res: any) {
  const { id } = req.params;
  const entry = await service.get(id);
  if (!entry) return res.status(404).json({ error: 'not found' });
  return res.status(200).json(entry);
}

export default { createMemoryHandler, searchHandler, getHandler };
