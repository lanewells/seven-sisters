export function Footer() {
  return (
    <footer
      className="fixed bottom-0 left-0 z-50 w-full px-6 py-5 md:px-10 backdrop-blur-sm"
      style={{
        maskImage: "linear-gradient(to top, black 50%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to top, black 50%, transparent 100%)"
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 text-[0.65rem] uppercase tracking-[0.28em] text-white/45">
        <a
          href="mailto:7sisters.stars@gmail.com"
          className="transition hover:text-white"
        >
          7sisters.stars@gmail.com
        </a>
      </div>
    </footer>
  )
}
