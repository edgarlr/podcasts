import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import FullModal from 'components/ui/FullModal';
import SearchInput from 'components/search/SearchInput';
import SearchResults from 'components/search/SearchResults';
import { MdClose, MdSearch } from 'react-icons/md';
import { colors } from 'styles/theme';
import IconButton from 'components/ui/IconButton';

const SearchModal = () => {
  const router = useRouter();
  const { search } = router.query;

  const [isOpen, setIsOpen] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    if (search !== undefined) {
      setIsOpen(true);
      setSearchKeyword(search);
    }
  }, []);

  const closeModal = () => {
    router.push('/', undefined, { shallow: true });
    setIsOpen(false);
    setSearchKeyword('');
  };

  let buttonIcon = (
    <IconButton handleOnClick={() => setIsOpen(true)}>
      <MdSearch size="2rem" color={colors.darkGray} />
    </IconButton>
  );

  if (isOpen) {
    buttonIcon = (
      <IconButton handleOnClick={closeModal}>
        <MdClose size="2rem" color={colors.darkGray} />
      </IconButton>
    );
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
  );
};

export default SearchModal;
