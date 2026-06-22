type AboutPageProps = {
  onBack: () => void
}

export function AboutPage({ onBack }: AboutPageProps) {
  return (
    <main className="relative min-h-full overflow-hidden bg-[#020106] px-6 py-28 text-white">
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
          About
        </p>

        <h1 className="mt-6 text-5xl font-light uppercase tracking-[0.18em] md:text-7xl">
          Seven Sisters
        </h1>

        <div className="mt-16 space-y-8">
          <p className="text-lg leading-9 text-blue-100/70">
            For millennia, cultures around the world have told strikingly
            similar stories about a small group of stars in the night sky being
            seven sisters. Whether known as Pleaides, Subaru, Karatgurk,
            Dilγéhé, Makali'i, or countless other names, this constellation has
            held deep spiritual and mythological significance for peoples around
            the world, with some centering their calendar around its rising. The
            Seven Sisters is a three-dimensional model of this star cluster,
            allowing participants to see a familiar constellation from new
            perspectives and learn about the convergent myths told about it.
          </p>
        </div>
      </section>
    </main>
  )
}
