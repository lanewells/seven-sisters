import { useState } from "react"
import type { Sister, Page } from "./types"
import { Footer } from "./components/Footer"
import { Navbar } from "./components/Navbar"
import { PleiadesMap } from "./components/PleiadesMap"
import { SisterPage } from "./components/SisterPage"
import { AboutPage } from "./components/AboutPage"
import { GalleryPage } from "./components/GalleryPage"
import { ContactPage } from "./components/ContactPage"

function App() {
  const [selectedSister, setSelectedSister] = useState<Sister | null>(null)
  const [page, setPage] = useState<Page>("home")

  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Navbar onNavigate={setPage} />

        <div className="flex-1">
          {page === "about" ? (
            <AboutPage onBack={() => setPage("home")} />
          ) : page === "gallery" ? (
            <GalleryPage onBack={() => setPage("home")} />
          ) : page === "contact" ? (
            <ContactPage onBack={() => setPage("home")} />
          ) : selectedSister ? (
            <SisterPage
              sister={selectedSister}
              onBack={() => setSelectedSister(null)}
            />
          ) : (
            <PleiadesMap onEnterSister={setSelectedSister} />
          )}
        </div>

        <Footer />
      </div>
    </>
  )
}

export default App
