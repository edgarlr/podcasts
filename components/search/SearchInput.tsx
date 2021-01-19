import { useRouter } from 'next/router'
import { colors, fontWeight } from 'styles/theme'
import { ChangeEvent, Dispatch, SetStateAction } from 'react'

type Props = {
  searchKeyword: string
  setSearchKeyword: Dispatch<SetStateAction<string>>
}

const SearchInput = ({ searchKeyword, setSearchKeyword }: Props) => {
  const router = useRouter()

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    setSearchKeyword(value)
    router.push(`/?search=${value}`, undefined, { shallow: true })
  }

  return (
    <>
      <input
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
          font-weight: ${fontWeight.bold};
          color: ${colors.black};
          width: 100%;
          border-bottom: 0;
          border-radius: 0;
        }
        input::-webkit-search-cancel-button {
          position: relative;
          right: 0.5rem;

          -webkit-appearance: none;
          height: 15px;
          width: 15px;
          border-radius: 10px;
          background: ${colors.gray};
          color: aliceblue;
        }
        input:placeholder-shown {
          border-bottom: 1px solid ${colors.lightGray};
        }
      `}</style>
    </>
  )
}

export default SearchInput
