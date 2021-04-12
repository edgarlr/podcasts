import { useRouter } from 'next/router'
import { ChangeEvent, Dispatch, SetStateAction, useEffect, useRef } from 'react'

type Props = {
  searchKeyword: string
  setSearchKeyword: Dispatch<SetStateAction<string>>
}

const SearchInput = ({ searchKeyword, setSearchKeyword }: Props) => {
  const router = useRouter()
  const searchInputRef = useRef<HTMLInputElement | null>(null)

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    setSearchKeyword(value)
    router.replace(`/search?q=${value}`, undefined, { shallow: true })
  }

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [])
  return (
    <>
      <input
        ref={searchInputRef}
        type="search"
        name="main-search"
        id="searchInput"
        placeholder="Search..."
        value={searchKeyword}
        onChange={onSearchChange}
      />

      <style jsx>{`
        input {
          border: none;
          outline: none;
          font-size: 2em;
          padding: 1rem 0;
          margin: 0;
          font-weight: bold;
          color: var(--primary);
          width: 100%;
          border-bottom: 0;
          border-radius: 0;
        }
        input::-webkit-search-cancel-button {
          -webkit-appearance: none;
          height: 24px;
          width: 24px;
          margin-right: 0.5rem;
          background-size: 24px;
          background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20class%3D%22feather%20feather-delete%22%3E%3Cpath%20d%3D%22M21%204H8l-7%208%207%208h13a2%202%200%200%200%202-2V6a2%202%200%200%200-2-2z%22%3E%3C/path%3E%3Cline%20x1%3D%2218%22%20y1%3D%229%22%20x2%3D%2212%22%20y2%3D%2215%22%3E%3C/line%3E%3Cline%20x1%3D%2212%22%20y1%3D%229%22%20x2%3D%2218%22%20y2%3D%2215%22%3E%3C/line%3E%3C/svg%3E');
          background-repeat: no-repeat;
          cursor: pointer;
          opacity: 0.8;
        }
        input:placeholder-shown {
          border-bottom: var(--default-border);
        }
        input::placeholder {
          color: var(--primary-20);
        }
      `}</style>
    </>
  )
}

export default SearchInput
