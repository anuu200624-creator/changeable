export default function Page() {
  return (
    <main className="h-screen w-full overflow-hidden bg-black">
      <iframe
        title="CreationsXAI website"
        src="/creationsxai.html"
        loading="eager"
        fetchPriority="high"
        className="h-full min-h-dvh w-full border-0"
      />
    </main>
  )
}
