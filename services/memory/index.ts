import MemoryService from './memory.service';

// Shared singleton used by API routes so in-memory store persists across handlers
export const memoryService = new MemoryService();

export default memoryService;
