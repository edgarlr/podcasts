import ErrorMessage from 'components/ui/ErrorMessage'

const SearchErrorMessage = ({ keyword }: { keyword: string }) => {
  return (
    <ErrorMessage
      title={`Couldn't find "${keyword}"`}
      subtitle="Try searching again using a different keyword"
    />
  )
}

export default SearchErrorMessage
