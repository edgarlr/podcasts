import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import SearchInput from 'components/search/SearchInput'
import SearchResults from 'components/search/SearchResults'
import IconButton from 'components/ui/IconButton'
import Close from 'components/icons/Close'
import Layout from '@components/common/Layout'

export default function SearchPage() {
  const router = useRouter()
  const { q } = router.query

  const [searchKeyword, setSearchKeyword] = useState('')

  useEffect(() => {
    if (q !== undefined) {
      setSearchKeyword(q as string)
    }
  }, [q])

  const buttonIcon = (
    <IconButton onClick={() => router.back()} ariaLabel="Close Search">
      <Close />
    </IconButton>
  )

  return (
    <Layout
      headerText={searchKeyword ? `"${searchKeyword}" in search` : 'Search'}
      navigation={false}
      pageTitle="Search"
      button={buttonIcon}
    >
      <SearchInput
        setSearchKeyword={setSearchKeyword}
        searchKeyword={searchKeyword}
      />

      {searchKeyword.length > 2 && <SearchResults keyword={searchKeyword} />}
    </Layout>
  )
}
