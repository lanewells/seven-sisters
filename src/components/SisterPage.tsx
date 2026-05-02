import type { Sister } from "../types"

type SisterPageProps = {
  sister: Sister
  onBack: () => void
}

export function SisterPage({ sister, onBack }: SisterPageProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020106] px-6 py-28 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_24%,rgba(88,28,135,0.35),transparent_28%),radial-gradient(circle_at_72%_68%,rgba(30,64,175,0.22),transparent_32%),#020106]" />
      <div className="stars-bg absolute inset-0 opacity-60" />

      <div className="pointer-events-none absolute left-1/2 top-32 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-blue-900/20 blur-3xl" />

      <section className="relative z-10 mx-auto max-w-6xl">
        <button
          type="button"
          onClick={onBack}
          className="mb-16 text-xs uppercase tracking-[0.35em] text-white/45 transition hover:text-white"
        >
          ← Back to constellation
        </button>

        <div className="grid min-h-[68vh] gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left">
            <p className="text-xs uppercase tracking-[0.5em] text-white/40">
              Sister {String(sister.order).padStart(2, "0")}
            </p>

            <div className="relative mt-12 flex h-56 w-56 items-center justify-center">
              <div className="absolute h-full w-full rounded-full border border-white/10" />
              <div className="absolute h-36 w-36 rounded-full border border-white/10" />
              <div className="absolute h-20 w-20 rounded-full border border-white/10" />

              <div
                className={`h-6 w-6 rounded-full ${sister.color} shadow-2xl ${sister.glow}`}
              />
            </div>

            <p
              className={`mt-10 text-xs uppercase tracking-[0.45em] ${sister.accentText}`}
            >
              {sister.subtitle}
            </p>
          </div>

          <div>
            <h1 className="max-w-3xl text-5xl font-light uppercase leading-tight tracking-[0.18em] md:text-7xl">
              {sister.name}
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-blue-100/65 md:text-lg">
              {sister.description}
            </p>

            <ul className="mt-8 flex flex-wrap gap-3">
              {sister.keywords.map((keyword) => (
                <li
                  key={keyword}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/55"
                >
                  {keyword}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <section className="grid gap-5 border-t border-white/10 py-16 md:grid-cols-3">
          <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
            <p
              className={`text-xs uppercase tracking-[0.35em] ${sister.accentText}`}
            >
              the story
            </p>

            <h2 className="mt-5 text-2xl font-light tracking-[0.08em]">
              myth / archive
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/55">
              placeholder for text
            </p>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
            <p
              className={`text-xs uppercase tracking-[0.35em] ${sister.accentText}`}
            >
              material
            </p>

            <h2 className="mt-5 text-2xl font-light tracking-[0.08em]">
              images / obj
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/55">
              placeholder for visual stuff or anecdote about the build
            </p>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
            <p
              className={`text-xs uppercase tracking-[0.35em] ${sister.accentText}`}
            >
              entry
            </p>

            <h2 className="mt-5 text-2xl font-light tracking-[0.08em]">
              volunteer / donate
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/55">
              placeholder for whatever action
            </p>
          </article>
        </section>

        <section className="border-t border-white/10 py-16">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/35">
                gallery
              </p>

              <h2 className="mt-4 text-3xl font-light uppercase tracking-[0.16em]">
                description of gallery
              </h2>
            </div>

            <p className="hidden max-w-xs text-right text-xs uppercase leading-6 tracking-[0.25em] text-white/35 md:block">
              placeholder - the imgs could link to other sources
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="flex aspect-[4/5] items-center justify-center rounded-3xl border border-white/10 bg-white/[0.025] text-xs uppercase tracking-[0.3em] text-white/25"
              >
                image {item}
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  )
}
