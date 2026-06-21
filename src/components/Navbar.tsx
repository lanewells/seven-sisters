export function Navbar() {
  const navItems = ["About", "Volunteer", "Gallery", "Contact"]

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-6 py-6 md:px-10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        {/* <a
          href="#home"
          className="text-xs font-medium uppercase tracking-[0.35em] text-white/70 transition hover:text-white"
        >
          Home
        </a> */}

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs font-medium uppercase tracking-[0.32em] text-white/60 transition hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
