import { MemoryEntry } from './memory.types';

export function simpleSearch(entries: MemoryEntry[], query: string) {
  const q = query.toLowerCase();
  return entries.filter((e) => {
    return (
      (e.title && e.title.toLowerCase().includes(q)) ||
      e.content.toLowerCase().includes(q) ||
      Object.values(e.metadata || {}).some((v) => String(v).toLowerCase().includes(q))
    );
  });
}
