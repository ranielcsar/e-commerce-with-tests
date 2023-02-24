import { PropsWithChildren } from 'react'
import { Header } from './Header'
import { Sidebar } from './Sidebar'

export function MainLayout({ children }: PropsWithChildren<any>) {
  return (
    <main className="grid grid-cols-[17rem_1fr] grid-rows-[5rem_auto] h-screen overflow-hidden w-full relative">
      <Header />

      <Sidebar />

      <section className="col-[2] row-[2] w-full h-auto overflow-y-auto">
        {children}
      </section>
    </main>
  )
}
