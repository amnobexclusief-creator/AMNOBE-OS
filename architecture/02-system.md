# System Overview

Hoog-niveau componenten:

- apps/
  - web/ (Next.js)
  - api/ (FastAPI / Python)
  - worker/ (background jobs)
- packages/
  - ui/, types/, sdk/, config/
- services/
  - memory/, ai/, automation/, database/

Diagram: (tekening toevoegen)

Communicatiepatroon: HTTP/REST + gRPC voor interne services; events via message queue.

