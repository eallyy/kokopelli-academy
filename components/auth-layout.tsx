import type React from 'react'

export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex bg-black min-h-dvh flex-col p-2">
      <div className="flex grow items-center justify-center p-6 lg:rounded-lg lg:p-10 lg:shadow-xs lg:ring-1 ring-white/10 bg-gradient-to-b from-cyan-950 to-black">
        {children}
      </div>
    </main>
  )
}
