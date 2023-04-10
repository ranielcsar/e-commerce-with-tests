import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className="grid grid-cols-[17rem,6fr,1.5fr] col-span-full bg-gray-900 items-center">
      <div className="col-start-2 rounded-full bg-blue-gray-600 w-12 h-12" />

      <nav className="col-start-3 text-white">
        <ul className="flex items-center justify-evenly">
          <Link to="cart">Carrinho</Link>
        </ul>
      </nav>
    </header>
  )
}
