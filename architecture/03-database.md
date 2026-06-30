# Database ontwerp

Aanbeveling:
- Gebruik PostgreSQL voor relationele data
- Gebruik ElasticSearch of Milvus voor full-text / vector search

Belangrijke tabellen/collections:
- users
- projects
- tasks
- conversations
- memory_entries (voor snelle lookup)

Backup strategie: dagelijkse dumps + point-in-time recovery voor belangrijke tabellen.

