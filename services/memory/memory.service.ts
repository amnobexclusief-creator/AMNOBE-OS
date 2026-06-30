import { MemoryRepository } from './memory.repository';
import { MemoryEntry, MemoryType } from './memory.types';
import { simpleSearch } from './memory.search';

export class MemoryService {
  constructor(private repo = new MemoryRepository()) {}

  async add(type: MemoryType, content: string, opts?: Partial<MemoryEntry>) {
    return this.repo.create({ type, content, ...opts });
  }

  async get(id: string) {
    return this.repo.get(id);
  }

  async search(type: MemoryType | null, q: string) {
    const entries = type ? await this.repo.listByType(type) : await this.repo.all();
    return simpleSearch(entries, q);
  }

  async listType(type: MemoryType) {
    return this.repo.listByType(type);
  }
}

export default MemoryService;
