import ErrorMessage from 'components/ui/ErrorMessage';

const SearchErrorMessage = ({ keyword }) => {
  return (
    <ErrorMessage
      title={`Couldn't find "${keyword}"`}
      subtitle="Try searching again using a different keyword"
    />
  );
};

export default SearchErrorMessage;
