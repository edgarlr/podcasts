import IconButton from 'components/ui/IconButton';
import { useRouter } from 'next/router';
import { MdClose } from 'react-icons/md';
import { colors } from 'styles/theme';

const ClearSearchButton = () => {
  const router = useRouter();

  const onCloseClick = () => {
    router.push('/?search=', undefined, { shallow: true });
  };

  return (
    <IconButton handleOnClick={onCloseClick} ariaLabel="Search">
      <MdClose size="2rem" color={colors.black} aria-hidden="true" />
    </IconButton>
  );
};

export default ClearSearchButton;
