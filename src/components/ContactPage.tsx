type ContactPageProps = {
  onBack: () => void
}

export function ContactPage({ onBack }: ContactPageProps) {
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
          Contact
        </h1>
        <p className="mt-16 text-lg leading-9 text-blue-100/70">
          If you'd like to be emailed regarding build updates, volunteer &
          fundraising opportunities, and on-playa event announcements, please
          reach out to us at
          <a
            href="mailto:7sisters.starts@gmail.com"
            className="transition hover:text-white"
          >
            <strong> 7sisters.stars@gmail.com</strong>
          </a>
          .
        </p>

        <p className="mt-10 text-sm text-white/40">Website by Lane Wells</p>
      </section>
    </main>
  )
}
