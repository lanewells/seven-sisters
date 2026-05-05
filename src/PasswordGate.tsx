import { useState, type ReactNode } from "react"

type PasswordGateProps = {
  children: ReactNode
}

export default function PasswordGate({ children }: PasswordGateProps) {
  const [hasAccess, setHasAccess] = useState(
    localStorage.getItem("site_access") === "true"
  )

  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const correctPassword = import.meta.env.VITE_SITE_PASSWORD

  if (hasAccess) return <>{children}</>

  return (
    <main>
      <form
        onSubmit={(e) => {
          e.preventDefault()

          if (password === correctPassword) {
            localStorage.setItem("site_access", "true")
            setHasAccess(true)
            setError("")
          } else {
            setError("Wrong password.")
          }
        }}
      >
        <h1>Private preview</h1>
        <p>This site is currently password protected.</p>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />

        <button type="submit">Enter</button>

        {error && <p>{error}</p>}
      </form>
    </main>
  )
}
