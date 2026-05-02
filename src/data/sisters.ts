import type { Sister } from "../types"

export const sisters: Sister[] = [
  {
    id: "first-sister",
    name: "Alcyone",
    order: 1,
    position: {
      xPercent: 44,
      yPercent: 26
    },
    coordinates: {
      rightAscension: "3h 47m 29s",
      declination: `+24° 6' 18"`
    },
    color: "bg-cyan-200",
    glow: "shadow-cyan-300/80",
    accentText: "text-cyan-200",
    subtitle: "B7IIIe blue giant",
    description:
      "The brightest member of the Pleiades cluster, Alcyone is an eclipsing binary system made up of two blue giant stars, with three smaller dwarf stars orbiting around them.",
    keywords: ["origin", "signal", "threshold"]
  },
  {
    id: "second-sister",
    name: "Electra",
    order: 2,
    position: {
      xPercent: 57,
      yPercent: 31
    },
    coordinates: {
      rightAscension: "3h 44m 53s",
      declination: `+24° 6' 48"`
    },
    color: "bg-violet-300",
    glow: "shadow-violet-400/80",
    accentText: "text-violet-300",
    subtitle: "B6III blue giant",
    description:
      "Like the other stars in the Pleiades cluster, Electra is a hot, blue star surrounded by a faint cloud of nebulous material. It spins very quickly and is believed to release a disc of matter that spreads outward before gradually falling back into the star, a cycle that takes roughly ten years.",
    keywords: ["memory", "orbit", "pull"]
  },
  {
    id: "third-sister",
    name: "Merope",
    order: 3,
    position: {
      xPercent: 51,
      yPercent: 44
    },
    coordinates: {
      rightAscension: "3h 46m 20s",
      declination: `+23° 56' 54"`
    },
    color: "bg-blue-200",
    glow: "shadow-blue-300/80",
    accentText: "text-blue-200",
    subtitle: "B6IVe blue subgiant",
    description:
      "The southernmost bright star in the Pleiades, also called the Seven Sisters, sits in the constellation Taurus. It is a Beta Cephei-type pulsating variable star, with some uncertain evidence suggesting it may have one or more stellar companions.",
    keywords: ["depth", "reflection", "blue hour"]
  },
  {
    id: "fourth-sister",
    name: "Maia",
    order: 4,
    position: {
      xPercent: 39,
      yPercent: 49
    },
    coordinates: {
      rightAscension: "3h 45m 50s",
      declination: `+24° 22' 4"`
    },
    color: "bg-fuchsia-300",
    glow: "shadow-fuchsia-400/80",
    accentText: "text-fuchsia-300",
    subtitle: "B8III blue giant",
    description:
      "Maia is one of the four giant stars in the Pleiades, alongside Alcyone, Atlas, and Electra. Although the cluster looks tightly grouped from Earth, its stars are actually scattered across many light years, with Maia among the Pleiades members closest to our Solar System.",
    keywords: ["voice", "heat", "devotion"]
  },
  {
    id: "fifth-sister",
    name: "Taygeta",
    order: 5,
    position: {
      xPercent: 61,
      yPercent: 56
    },
    coordinates: {
      rightAscension: "3h 45m 13s",
      declination: `+24° 28' 2"`
    },
    color: "bg-indigo-200",
    glow: "shadow-indigo-300/80",
    accentText: "text-indigo-200",
    subtitle: "B6IV blue subgiant",
    description:
      "Taygeta is a blue-white star located toward the western side of the Pleiades cluster. It is the cluster's sixth-brightest star and is usually the dimmest of the Pleiades stars visible without a telescope. Its name comes from Greek mythology: Taygete was one of the daughters of Atlas and Pleione, and the mother of Lacedaemon, the legendary founder of Sparta.",
    keywords: ["distance", "shape", "night"]
  },
  {
    id: "sixth-sister",
    name: "Celaeno",
    order: 6,
    position: {
      xPercent: 46,
      yPercent: 63
    },
    coordinates: {
      rightAscension: "3h 44m 48s",
      declination: `+24° 17' 22"`
    },
    color: "bg-purple-200",
    glow: "shadow-purple-300/80",
    accentText: "text-purple-200",
    subtitle: "B7IV blue subgiant",
    description:
      "Celaeno, like the other stars in the Pleiades cluster, is a young, hot blue star. The cluster itself is thought to be around 130 million years old. Celaeno also seems to have a binary companion: a small white star orbiting at roughly the same distance that Earth orbits the Sun.",
    keywords: ["field", "echo", "gesture"]
  },
  {
    id: "seventh-sister",
    name: "Asterope (& Sterope)",
    order: 7,
    position: {
      xPercent: 34,
      yPercent: 67
    },
    coordinates: {
      rightAscension: "3h 45m 54s",
      declination: `+24° 33' 16"`
    },
    color: "bg-sky-200",
    glow: "shadow-sky-300/80",
    accentText: "text-sky-200",
    subtitle: "B8 Blue Dwarf",
    description: `Asterope and Sterope are two nearby stars in the northern part of the Pleiades, forming a close optical double rather than a true binary system. Asterope, also known as 21 Tauri, is the slightly brighter northwestern star, while Sterope, or 22 Tauri, lies just southeast of it. Because Asterope was also traditionally called Sterope, the pair are sometimes labelled Sterope I and Sterope II. Sterope's spectral class is A0Vn white main sequence star, with a right ascension of 3h 46m 3s and declination of +24° 31' 40".`,
    keywords: ["return", "constellation", "elsewhere"]
  }
]
