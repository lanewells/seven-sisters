type GalleryPageProps = {
  onBack: () => void
}

export function GalleryPage({ onBack }: GalleryPageProps) {
  const images = [
    "/assets/render-1.png",
    "/assets/render-2.png",
    "/assets/render-3.png",
    "/assets/render-4.png",
    "/assets/render-5.png",
    "/assets/render-6.jpg",
    "/assets/render-7.jpg",
    "/assets/render-8.jpg",
    "/assets/render-9.jpg",
    "/assets/render-10.jpg"
  ]
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
          Seven Sisters
        </p>

        <h1 className="mt-6 text-5xl font-light uppercase tracking-[0.18em] md:text-7xl">
          Gallery
        </h1>

        <div className="border-t border-white/10 py-16">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div className="grid gap-4 md:grid-cols-2">
              {images.map((src, index) => (
                <div key={index} className="relative">
                  <div className="absolute -inset-4 rounded-2xl bg-sky-400/20 blur-3xl" />
                  <div className="relative overflow-hidden rounded-xl border border-white/20">
                    <img
                      src={src}
                      alt={`Night render ${index}`}
                      className="block w-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
