# Agents

Architectuur:
- Agent runtime (Buddy, Lena, etc.) connecteert naar Memory Service en AI Router.
- Agents maken calls via `AI.ask(...)` en ontvangen responses.

AI Router:
- Adapter-pattern voor OpenAI, Ollama, Claude, Gemini, etc.
- Policy: cost/latency/accuracy basada selectie

Voorbeeld:
- `AI.ask({prompt, prefer: 'local' | 'cloud'})`

