'use client';

import { useState } from 'react';
import { useEffect } from 'react';

type Msg = { id: string; role: 'user' | 'assistant'; text: string };

export default function BuddyChat() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Msg[]>([]);
  const [loading, setLoading] = useState(false);

  async function send() {
    if (!input.trim()) return;
    const text = input.trim();
    setInput('');
    const userMsg: Msg = { id: String(Date.now()), role: 'user', text };
    setMessages((m) => [...m, userMsg]);
    setLoading(true);

    try {
      const res = await fetch('/api/buddy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: text, userId: 'local-user' }),
      });
      const data = await res.json();
      const assistantText: string = data?.reply || 'Geen antwoord';
      const assistantMsg: Msg = { id: String(Date.now() + 1), role: 'assistant', text: assistantText };
      setMessages((m) => [...m, assistantMsg]);
    } catch (err) {
      setMessages((m) => [...m, { id: String(Date.now()), role: 'assistant', text: 'Fout bij server' }]);
    } finally {
      setLoading(false);
    }
  }

  // Load persisted conversation
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetch('/api/memory?type=conversation');
        const data = await res.json();
        if (!mounted) return;
        if (Array.isArray(data)) {
          const mapped: Msg[] = data.map((e: any) => ({
            id: e.id,
            role: e.title === 'assistant reply' ? 'assistant' : 'user',
            text: e.content,
          }));
          setMessages(mapped);
        }
      } catch (err) {
        // ignore
      }
    })();
    return () => { mounted = false; };
  }, []);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="border rounded-2xl p-4 mb-4 bg-white/5">
        <h2 className="text-2xl font-bold mb-2">Buddy</h2>
        <p className="text-sm text-gray-400">Kleine demo: chat met Buddy (mocked AI Router)</p>
      </div>

      <div className="space-y-3 mb-4">
        {messages.map((m) => (
          <div key={m.id} className={`p-3 rounded-xl ${m.role === 'user' ? 'bg-yellow-400 text-black self-end' : 'bg-zinc-800 text-white'}`}>
            <div className="text-sm">{m.text}</div>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') send(); }}
          className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none"
          placeholder="Typ je bericht..."
        />
        <button onClick={send} disabled={loading} className="px-4 py-3 rounded-xl bg-yellow-400 text-black font-medium">
          {loading ? '...' : 'Stuur'}
        </button>
      </div>
    </div>
  );
}
