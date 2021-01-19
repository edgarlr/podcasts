import Close from 'components/icons/Close';
import IconButton from 'components/ui/IconButton';
import { useRouter } from 'next/router';

const ClearSearchButton = () => {
  const router = useRouter();

  const onCloseClick = () => {
    router.push('/?search=', undefined, { shallow: true });
  };

  return (
    <IconButton handleOnClick={onCloseClick} ariaLabel="Search">
      <Close />
    </IconButton>
  );
};

export default ClearSearchButton;
