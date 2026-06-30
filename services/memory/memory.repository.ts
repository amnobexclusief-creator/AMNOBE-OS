import { MemoryEntry, MemoryType, UUID } from './memory.types';

function genId(): UUID {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

export class MemoryRepository {
  private store: Map<UUID, MemoryEntry> = new Map();

  async create(entry: Omit<MemoryEntry, 'id' | 'createdAt' | 'updatedAt'>) {
    const id = genId();
    const now = new Date().toISOString();
    const full: MemoryEntry = { id, createdAt: now, updatedAt: now, ...entry };
    this.store.set(id, full);
    return full;
  }

  async get(id: UUID) {
    return this.store.get(id) ?? null;
  }

  async update(id: UUID, patch: Partial<MemoryEntry>) {
    const existing = this.store.get(id);
    if (!existing) return null;
    const updated = { ...existing, ...patch, updatedAt: new Date().toISOString() };
    this.store.set(id, updated);
    return updated;
  }

  async delete(id: UUID) {
    return this.store.delete(id);
  }

  async listByType(type: MemoryType) {
    return Array.from(this.store.values()).filter((e) => e.type === type);
  }

  // Expose all entries (careful in production)
  async all() {
    return Array.from(this.store.values());
  }
}
