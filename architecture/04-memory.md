# Memory Service

Doel: centrale, schaalbare opslag van verschillende geheugen-types.

Memory types:
- Conversations
- Knowledge
- User Profile
- Projects
- Tasks
- Files (meta)
- Ideas
- Goals
- AI Decisions

API voorbeelden:
- `POST /memory/{type}` → create entry
- `GET /memory/{type}?q=` → search

Consistency: gebruik versioning en immutable audit-trails voor belangrijke entries.

