import ArrowLeft from '@components/icons/ArrowLeft'
import Layout from 'components/common/Layout'
import ErrorMessage from 'components/ui/ErrorMessage'
import Link from 'next/link'

export default function Custom404() {
  return (
    <Layout
      navigation={false}
      pageTitle="404. Page not found"
      headerText="404. Page not found"
    >
      <div className="container">
        <ErrorMessage
          title="404. Page Not Found"
          subtitle="We couldn't find this page"
        />
        <Link href="/">
          <a className="link">
            <span>
              <ArrowLeft />
            </span>
            Go back to home
          </a>
        </Link>
      </div>
      <style jsx>{`
        .container {
          text-align: center;
          margin: auto 0;
        }
        .link {
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: bold;
        }
        .link:hover {
          opacity: 0.5;
        }
        .link span {
          line-height: 0.5;
          padding-right: 0.5rem;
        }
      `}</style>
    </Layout>
  )
}
