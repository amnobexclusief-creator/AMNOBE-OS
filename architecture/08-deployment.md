# Deployment

Staging / Production:
- Gebruik Docker + Compose voor lokale ontwikkeling
- CI: GitHub Actions (build, test, lint, push image)
- Deploy: Vercel voor `web/`, Kubernetes / Fly / DigitalOcean voor services.

Dev workflow:
- `make dev` start services lokaal via Docker

