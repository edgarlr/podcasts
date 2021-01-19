import ErrorMessage from 'components/ui/ErrorMessage'
import PropTypes from 'prop-types'

const SearchErrorMessage = ({ keyword }) => {
  return (
    <ErrorMessage
      title={`Couldn't find "${keyword}"`}
      subtitle="Try searching again using a different keyword"
    />
  )
}

export default SearchErrorMessage

SearchErrorMessage.propTypes = {
  keyword: PropTypes.string.isRequired,
}
