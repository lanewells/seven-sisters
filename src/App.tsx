import { useState } from "react"
import type { Sister } from "./types"
import { Footer } from "./components/Footer"
import { Navbar } from "./components/Navbar"
import { PleiadesMap } from "./components/PleiadesMap"
import { SisterPage } from "./components/SisterPage"

function App() {
  const [selectedSister, setSelectedSister] = useState<Sister | null>(null)

  return (
    <>
      <Navbar />

      {selectedSister ? (
        <SisterPage
          sister={selectedSister}
          onBack={() => setSelectedSister(null)}
        />
      ) : (
        <PleiadesMap onEnterSister={setSelectedSister} />
      )}

      <Footer />
    </>
  )
}

export default App
