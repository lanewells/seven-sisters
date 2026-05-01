import type { Sister } from "../types"

type SisterPageProps = {
  sister: Sister
  onBack: () => void
}

export function SisterPage({ sister, onBack }: SisterPageProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020106] px-6 py-28 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(88,28,135,0.32),transparent_30%),radial-gradient(circle_at_65%_70%,rgba(30,64,175,0.2),transparent_30%),#020106]" />
      <div className="stars-bg absolute inset-0 opacity-60" />

      <section className="relative z-10 mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-white/45">
          Sister {String(sister.order).padStart(2, "0")}
        </p>

        <div
          className={`mt-10 h-5 w-5 rounded-full ${sister.color} shadow-2xl ${sister.glow}`}
        />

        <h1 className="mt-10 text-5xl font-light uppercase tracking-[0.22em] md:text-7xl">
          {sister.name}
        </h1>

        <p className="mt-8 max-w-xl text-base leading-8 text-blue-100/65">
          Page for {sister.name}. Add details -lore -significance -coordinates
          maybe
        </p>

        <button
          type="button"
          onClick={onBack}
          className="mt-12 rounded-full border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.35em] text-white/70 transition hover:border-white/60 hover:text-white"
        >
          Back to constellation
        </button>
      </section>
    </main>
  )
}
