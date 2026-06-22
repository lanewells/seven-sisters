import { useState } from "react"

type NavbarProps = {
  onNavigate: (page: "home" | "about" | "gallery" | "contact") => void
}

export function Navbar({ onNavigate }: NavbarProps) {
  const navItems = ["About", "Gallery", "Contact"] as const
  const [open, setOpen] = useState(false)

  const go = (page: "home" | "about" | "gallery" | "contact") => {
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
      <nav className="mx-auto flex max-w-7xl items-center justify-end">
        {/* desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() =>
                go(item.toLowerCase() as "about" | "gallery" | "contact")
              }
              className="text-xs font-medium uppercase tracking-[0.32em] text-white/60 transition hover:text-white"
            >
              {item}
            </button>
          ))}
        </div>

        {/* mobile toggle */}
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

      {/* mobile dropdown */}
      {open && (
        <div className="mt-8 flex flex-col gap-6 pb-4 md:hidden">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() =>
                go(item.toLowerCase() as "about" | "gallery" | "contact")
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
