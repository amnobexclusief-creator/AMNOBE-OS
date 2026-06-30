import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 bg-black text-white p-10">
        <h1 className="text-5xl font-bold text-yellow-400">
          Dashboard
        </h1>

        <p className="mt-6 text-gray-300">
          Welkom bij AMNOBE OS
        </p>
      </main>
    </div>
  );
}