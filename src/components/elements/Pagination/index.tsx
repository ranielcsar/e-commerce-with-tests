export function Pagination({ currentPage, onClick, totalPages }: any) {
  const pageButtonsLength = totalPages / 10 - 1

  return (
    <nav
      className="isolate inline-flex -space-x-px rounded-md shadow-sm row-2 self-start justify-self-center"
      aria-label="Pagination"
    >
      <PreviousButton />

      {Array.from({ length: pageButtonsLength }, (_, index) => (
        <PageButton
          key={`page-${index + 1}`}
          page={index + 1}
          onClick={() => onClick(index + 1)}
          currentPage={currentPage}
        />
      ))}

      <NextButton />
    </nav>
  )
}

function PageButton({
  page,
  currentPage,
  onClick
}: {
  page: number
  currentPage: number
  onClick: () => void
}) {
  const mainStyle =
    'relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20'
  const activeStyle =
    'relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20'

  const isCurrentPage = page === currentPage
  const currentStyle = isCurrentPage ? activeStyle : mainStyle

  return (
    <a href="#" aria-current="page" className={currentStyle} onClick={onClick}>
      {page}
    </a>
  )
}

function PreviousButton() {
  return (
    <a
      href="#"
      className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
    >
      <span className="sr-only">Previous</span>

      <svg
        className="h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
          clipRule="evenodd"
        />
      </svg>
    </a>
  )
}

function NextButton() {
  return (
    <a
      href="#"
      className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
    >
      <span className="sr-only">Next</span>

      <svg
        className="h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
          clipRule="evenodd"
        />
      </svg>
    </a>
  )
}
