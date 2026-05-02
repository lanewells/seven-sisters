export type Sister = {
  id: string
  name: string
  order: number
  position: {
    xPercent: number
    yPercent: number
  }
  coordinates: {
    rightAscension: string
    declination: string
  }
  color: string
  glow: string
  accentText: string
  subtitle: string
  description: string
  keywords: string[]
}
