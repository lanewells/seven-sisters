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
    <main className="min-h-screen bg-neutral-950 text-neutral-100 flex items-center justify-center px-6">
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
        className="w-full max-w-sm rounded-2xl border border-neutral-800 bg-neutral-900/80 p-8 shadow-2xl"
      >
        <div className="mb-6">
          <p className="mb-2 text-sm uppercase tracking-[0.25em] text-neutral-500">
            Private access
          </p>

          <h1 className="text-3xl font-semibold tracking-tight">
            Continue to site
          </h1>

          <p className="mt-3 text-sm leading-6 text-neutral-400">
            This site is currently password protected. Enter password to
            continue.
          </p>
        </div>

        <div className="space-y-4">
          <label htmlFor="preview-password" className="sr-only">
            Password
          </label>

          <input
            id="preview-password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
              setError("")
            }}
            placeholder="Password"
            className="w-full rounded-xl border border-neutral-700 bg-neutral-950 px-4 py-3 text-sm text-neutral-100 outline-none transition placeholder:text-neutral-600 focus:border-neutral-400 focus:ring-2 focus:ring-neutral-400/20"
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-neutral-100 px-4 py-3 text-sm font-medium text-neutral-950 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:ring-offset-neutral-950"
          >
            Enter
          </button>

          {error && (
            <p className="text-sm text-red-400" role="alert">
              {error}
            </p>
          )}
        </div>
      </form>
    </main>
  )
}
