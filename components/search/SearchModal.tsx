import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import FullModal from 'components/ui/FullModal'
import SearchInput from 'components/search/SearchInput'
import SearchResults from 'components/search/SearchResults'
import IconButton from 'components/ui/IconButton'
import Close from 'components/icons/Close'
import Search from 'components/icons/Search'

const SearchModal = () => {
  const router = useRouter()
  const { search } = router.query

  const [isOpen, setIsOpen] = useState(false)
  const [searchKeyword, setSearchKeyword] = useState('')

  useEffect(() => {
    if (search !== undefined) {
      setIsOpen(true)
      setSearchKeyword(search as string)
    }
  }, [])

  const closeModal = () => {
    router.push('/', undefined, { shallow: true })
    setIsOpen(false)
    setSearchKeyword('')
  }

  let buttonIcon = (
    <IconButton onClick={() => setIsOpen(true)} ariaLabel="Search">
      <Search />
    </IconButton>
  )

  if (isOpen) {
    buttonIcon = (
      <IconButton onClick={closeModal} ariaLabel="Close Search">
        <Close />
      </IconButton>
    )
  }

  return (
    <FullModal isOpen={isOpen} button={buttonIcon}>
      {isOpen && (
        <>
          <SearchInput
            setSearchKeyword={setSearchKeyword}
            searchKeyword={searchKeyword}
          />

          {searchKeyword.length > 2 && (
            <SearchResults keyword={searchKeyword} />
          )}
        </>
      )}
    </FullModal>
  )
}

export default SearchModal
