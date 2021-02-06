import Layout from 'components/common/Layout'
import ErrorMessage from 'components/ui/ErrorMessage'
import Link from 'next/link'

export default function Custom404() {
  return (
    <div style={{ textAlign: 'center' }}>
      <Layout
        navigation={false}
        pageTitle="404. Page not found"
        headerText="404. Page not found"
      >
        <ErrorMessage
          title={`404. Page Not Found`}
          subtitle="We couldn't find this page"
        />
        <Link href="/">
          <a>Go back to home</a>
        </Link>
      </Layout>
    </div>
  )
}
