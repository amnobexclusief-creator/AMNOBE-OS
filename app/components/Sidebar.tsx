export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-zinc-900 text-white p-6">
      <h2 className="text-2xl font-bold text-yellow-400">
        AMNOBE
      </h2>

      <nav className="mt-8 space-y-4">
        <button className="block w-full text-left hover:text-yellow-400">
          🧠 Buddy
        </button>

        <button className="block w-full text-left hover:text-yellow-400">
          💾 Memory
        </button>

        <button className="block w-full text-left hover:text-yellow-400">
          👥 Experts
        </button>

        <button className="block w-full text-left hover:text-yellow-400">
          ⚙️ Automations
        </button>
      </nav>
    </aside>
  );
}
