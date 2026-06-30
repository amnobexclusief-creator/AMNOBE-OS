export type UUID = string;

export enum MemoryType {
  Conversation = 'conversation',
  Project = 'project',
  Task = 'task',
  Document = 'document',
  Knowledge = 'knowledge',
  Goal = 'goal',
  Idea = 'idea',
  Preference = 'preference',
}

export interface MemoryEntry {
  id: UUID;
  type: MemoryType;
  title?: string;
  content: string;
  ownerId?: string;
  createdAt: string; // ISO
  updatedAt?: string; // ISO
  metadata?: Record<string, unknown>;
}
