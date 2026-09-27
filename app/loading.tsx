export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050008] px-6 text-center text-purple-100">
      <div className="flex flex-col items-center gap-4">
        <div className="size-9 animate-spin rounded-full border-2 border-purple-500/25 border-t-purple-400" aria-hidden="true" />
        <p className="text-sm text-purple-200/70">Loading CreationsXAI</p>
      </div>
    </main>
  )
}
