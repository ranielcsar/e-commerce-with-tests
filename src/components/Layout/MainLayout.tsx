import { PropsWithChildren } from 'react'

export function MainLayout({ children }: PropsWithChildren<any>) {
  return (
    <main className="grid grid-cols-[15rem_1fr] grid-rows-[5rem_1fr] h-screen w-screen">
      <header className="col-span-full bg-gray-900">CABEÇA</header>
      <aside className="col-[1] row-[2] bg-gray-900">SIDEBAR</aside>

      <section className="col-[2] row-[2] p-5 overflow-y-auto w-full h-full bg-slate-700">
        {children}
      </section>
    </main>
  )
}
