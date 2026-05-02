import type { Sister } from "../types"

type StarButtonProps = {
  sister: Sister
  isActive: boolean
  onHover: (sister: Sister | null) => void
  onEnter: (sister: Sister) => void
}

export function StarButton({
  sister,
  isActive,
  onHover,
  onEnter
}: StarButtonProps) {
  return (
    <div
      className="absolute"
      style={{
        left: `${sister.position.xPercent}%`,
        top: `${sister.position.yPercent}%`
      }}
    >
      <button
        type="button"
        onMouseEnter={() => onHover(sister)}
        onMouseLeave={() => onHover(null)}
        onFocus={() => onHover(sister)}
        onBlur={() => onHover(null)}
        onClick={() => onEnter(sister)}
        className="group relative -translate-x-1/2 -translate-y-1/2"
        aria-label={`Enter ${sister.name}`}
      >
        <span
          className={`block h-3 w-3 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.85)] transition duration-500 group-hover:scale-[2.15] group-focus:scale-[2.15] ${
            isActive ? `${sister.color} shadow-2xl ${sister.glow}` : ""
          }`}
        />

        <span className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 opacity-0 transition duration-500 group-hover:scale-150 group-hover:opacity-100 group-focus:scale-150 group-focus:opacity-100" />

        <span className="absolute left-1/2 top-8 hidden w-44 -translate-x-1/2 text-center md:block">
          <span className="block translate-y-2 text-[0.65rem] uppercase tracking-[0.28em] text-white/0 transition duration-500 group-hover:translate-y-0 group-hover:text-white/80 group-focus:translate-y-0 group-focus:text-white/80">
            {sister.name}
          </span>
        </span>
      </button>
    </div>
  )
}
