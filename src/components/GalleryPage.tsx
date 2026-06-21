type GalleryPageProps = {
  onBack: () => void
}

export function GalleryPage({ onBack }: GalleryPageProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020106] px-6 py-28 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_24%,rgba(88,28,135,0.25),transparent_28%),radial-gradient(circle_at_72%_68%,rgba(30,64,175,0.18),transparent_32%),#020106]" />

      <div className="stars-bg absolute inset-0 opacity-50" />

      <section className="relative z-10 mx-auto max-w-3xl">
        <button
          type="button"
          onClick={onBack}
          className="mb-16 text-xs uppercase tracking-[0.35em] text-white/45 transition hover:text-white"
        >
          ← Back to constellation
        </button>

        <p className="text-xs uppercase tracking-[0.5em] text-white/40">
          Gallery
        </p>

        <p className="mt-12 text-lg leading-9 text-blue-100/70">
          Gallery content coming soon...
        </p>
      </section>
    </main>
  )
}
