export function Header() {
  return (
    <header className="grid grid-cols-[1fr,6fr,1.5fr] col-span-full bg-gray-900 items-center">
      <div className="col-start-2 rounded-full bg-blue-gray-600 w-12 h-12" />

      <nav className="col-start-3 text-white">
        <ul className="flex items-center justify-evenly">
          <li>Menu 1</li>
          <li>Menu 2</li>
          <li>Menu 3</li>
          <li>Menu 4</li>
        </ul>
      </nav>
    </header>
  )
}
