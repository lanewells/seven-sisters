import { useState } from "react"
import type { Sister } from "../types"
import { sisters } from "../data/sisters"
import { StarButton } from "./StarButton"

type PleiadesMapProps = {
  onEnterSister?: (sister: Sister) => void
}

export function PleiadesMap({}: PleiadesMapProps) {
  const [hoveredSister, setHoveredSister] = useState<Sister | null>(null)

  const handleSelect = (sister: Sister) => {
    setHoveredSister(sister)
  }

  return (
    <section
      id="home"
      onClick={() => setHoveredSister(null)}
      className="relative flex min-h-full items-center justify-center overflow-hidden px-6 py-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(88,28,135,0.24),transparent_32%),radial-gradient(circle_at_70%_62%,rgba(30,64,175,0.18),transparent_28%),#020106]" />

      <div className="stars-bg absolute inset-0 opacity-70" />

      <div
        className={`pointer-events-none absolute h-[42rem] w-[42rem] rounded-full bg-violet-800/10 blur-3xl transition duration-700 ${
          hoveredSister ? "scale-125 opacity-100" : "scale-100 opacity-50"
        }`}
      />

      <div
        className={`relative z-10 flex w-full max-w-5xl flex-col items-center transition duration-700 ${
          hoveredSister ? "scale-105" : "scale-100"
        }`}
      >
        <p className="mb-5 text-center text-xs uppercase tracking-[0.5em] text-blue-100/50">
          A celestial experience landing in Black Rock City 2026
        </p>

        <h1 className="text-center text-5xl font-light uppercase tracking-[0.22em] text-white md:text-7xl">
          Seven Sisters
        </h1>

        <div className="relative mt-12 h-[24rem] w-full max-w-3xl md:h-[30rem]">
          <div
            className={`absolute inset-0 transition duration-700 ${
              hoveredSister ? "scale-110 opacity-100" : "scale-100 opacity-80"
            }`}
          >
            {sisters.map((sister) => (
              <StarButton
                key={sister.id}
                sister={sister}
                isActive={hoveredSister?.id === sister.id}
                onHover={setHoveredSister}
                onSelect={handleSelect}
              />
            ))}
          </div>

          {hoveredSister && (
            <div className="pointer-events-none absolute left-1/2 top-[78%] w-full max-w-md -translate-x-1/2 px-6 text-center">
              <p className="text-xs uppercase tracking-[0.45em] text-white/50">
                {String(hoveredSister.order).padStart(2, "0")}
              </p>

              <h2 className="mt-3 text-2xl font-light uppercase tracking-[0.2em] text-white">
                {hoveredSister.name}
              </h2>

              <p className="mt-4 text-sm leading-7 text-blue-100/60">
                {hoveredSister.subtitle}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
