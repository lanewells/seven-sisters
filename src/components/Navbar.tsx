import { useState } from "react"

type NavbarProps = {
  onNavigate: (page: "home" | "about" | "gallery" | "contribute") => void
}

export function Navbar({ onNavigate }: NavbarProps) {
  const navItems = ["About", "Gallery", "Contribute"] as const
  const [open, setOpen] = useState(false)

  const go = (page: "home" | "about" | "gallery" | "contribute") => {
    onNavigate(page)
    setOpen(false)
  }

  return (
    <header
      className="fixed left-0 top-0 z-50 w-full bg-[#020106]/40 backdrop-blur-lg px-6 py-6 md:px-10"
      style={{
        maskImage: "linear-gradient(to bottom, black 90%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, black 90%, transparent 100%)"
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Left */}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://crowdfundr.com/campaigns/72kDN5/pay?perk=9Z943"
          className="
        hidden md:inline-flex
        items-center
        rounded-full
        border border-white/15
        bg-white/[0.03]
        px-4 py-2
        text-xs font-medium uppercase tracking-[0.28em]
        text-white/75
        transition-all
        hover:border-white/30
        hover:bg-white/[0.08]
        hover:text-white
      "
        >
          Donate
        </a>

        <nav className="flex items-center">
          {/* desktop */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() =>
                  go(item.toLowerCase() as "about" | "gallery" | "contribute")
                }
                className="text-xs font-medium uppercase tracking-[0.32em] text-white/60 transition hover:text-white"
              >
                {item}
              </button>
            ))}
          </div>

          {/* mobile toggle lines */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="text-white/70 transition hover:text-white md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <div className="space-y-1.5">
              <span
                className={`block h-px w-6 bg-current transition ${open ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span
                className={`block h-px w-6 bg-current transition ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-px w-6 bg-current transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </div>
          </button>
        </nav>
      </div>
      {/* mobile dropdown */}
      {open && (
        <div className="mt-8 flex flex-col gap-6 pb-4 md:hidden">
          <a
            href="https://crowdfundr.com/campaigns/72kDN5/pay?perk=9Z943"
            target="_blank"
            rel="noopener noreferrer"
            className="
        mx-auto inline-flex items-center
        rounded-full
        border border-white/15
        bg-white/[0.03]
        px-5 py-2.5
        text-xs font-medium uppercase tracking-[0.28em]
        text-white/75
        transition-all
        hover:border-white/30
        hover:bg-white/[0.08]
        hover:text-white
      "
          >
            Donate
          </a>
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() =>
                go(item.toLowerCase() as "about" | "gallery" | "contribute")
              }
              className="text-center text-lg font-light uppercase tracking-[0.3em] text-white/80 transition hover:text-white"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}
