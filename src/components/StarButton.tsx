import type { Sister } from "../types"

type StarButtonProps = {
  sister: Sister
  isActive: boolean
  onHover: (sister: Sister | null) => void
  onSelect?: (sister: Sister) => void
  onEnter?: (sister: Sister) => void
}

export function StarButton({
  sister,
  isActive,
  onHover,
  onSelect
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
        onClick={(e) => {
          e.stopPropagation()
          onSelect?.(sister)
        }}
        className="relative -translate-x-1/2 -translate-y-1/2 p-4 -m-4"
        aria-label={sister.name}
      >
        <span
          className={`block h-3 w-3 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.85)] transition duration-500 ${
            isActive
              ? `scale-[2.15] ${sister.color} shadow-2xl ${sister.glow}`
              : ""
          }`}
        />

        <span
          className={`absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 transition duration-500 ${
            isActive ? "scale-150 opacity-100" : "opacity-0"
          }`}
        />

        <span className="absolute left-1/2 top-8 w-44 -translate-x-1/2 text-center">
          <span
            className={`block text-[0.65rem] uppercase tracking-[0.28em] transition duration-500 ${
              isActive
                ? "translate-y-0 text-white/80"
                : "translate-y-2 text-white/0"
            }`}
          >
            {sister.name}
          </span>
        </span>
      </button>
    </div>
  )
}
