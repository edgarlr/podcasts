import { useRouter } from 'next/router';
import { MdClose } from 'react-icons/md';
import { colors } from 'styles/theme';

const ClearSearchButton = () => {
  const router = useRouter();

  const onCloseClick = () => {
    router.push('/?search=', undefined, { shallow: true });
  };

  return (
    <button onClick={onCloseClick} aria-label="Search">
      <MdClose size="2rem" color={colors.black} aria-hidden="true" />
    </button>
  );
};

export default ClearSearchButton;
