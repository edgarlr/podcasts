import ErrorMessage from 'components/ui/ErrorMessage';

export default function Custom404() {
  return (
    <ErrorMessage
      title={`404. Page Not Found`}
      subtitle="Try searching again using a different keyword"
    />
  );
}
