import ArrowLeft from '@components/icons/ArrowLeft'
import Layout from 'components/common/Layout'
import ErrorMessage from 'components/ui/ErrorMessage'
import Link from 'next/link'

export default function OfflinePage() {
  return (
    <Layout navigation={false} pageTitle="Offline" headerText="You are offline">
      <div className="container">
        <ErrorMessage
          title="You are offline."
          subtitle="This page can't be displayed because you are not connected to the
          internet"
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
