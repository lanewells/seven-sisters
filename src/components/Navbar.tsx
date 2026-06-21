type NavbarProps = {
  onNavigate: (page: "about" | "gallery" | "contact") => void
}

export function Navbar({ onNavigate }: NavbarProps) {
  const navItems = ["About", "Gallery", "Contact"] as const

  return (
    <header
      className="fixed left-0 top-0 z-50 w-full bg-[#020106]/40 backdrop-blur-xl px-6 py-6 md:px-10"
      style={{
        maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, black 80%, transparent 100%)"
      }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        {/* <a
          href="#home"
          className="text-xs font-medium uppercase tracking-[0.35em] text-white/70 transition hover:text-white"
        >
          Constellation
        </a> */}

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() =>
                onNavigate(
                  item.toLowerCase() as "about" | "gallery" | "contact"
                )
              }
              className="text-xs font-medium uppercase tracking-[0.32em] text-white/60 transition hover:text-white"
            >
              {item}
            </button>
          ))}
        </div>
      </nav>
    </header>
  )
}
