Memory Service
===============

Korte introductie en how-to voor de `services/memory` skeleton.

Bestanden:
- `memory.types.ts` — types en enum voor geheugen-categorieën
- `memory.repository.ts` — eenvoudige in-memory repository
- `memory.service.ts` — hogere laag die repository gebruikt
- `memory.search.ts` — simpele tekstsearch helper
- `memory.api.ts` — voorbeeld HTTP-handlers (Express-style)

Hoe te gebruiken (lokaal / development):
- Deze skeleton is in-memory en bedoeld om later naar Postgres/Redis/Vector DB te migreren.
- Koppel `memory.api` aan je API-server (Express/Fastify/FastAPI) of breid uit naar een gRPC-interface.

Volgende stappen:
- Vervang in-memory store door een persistente repository
- Voeg tests toe voor search en repo
- Voeg ACL en ownerschap toe

