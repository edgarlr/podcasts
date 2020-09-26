import Layout from 'components/Layout';
import Link from 'next/link';
import PropTypes from 'prop-types';

function Error({ statusCode }) {
  return (
    <Layout headerText="Oh no... :C">
      {statusCode === 404 ? (
        <div className="message">
          <h1>We couldn&apos;t find this page</h1>
          <p>
            <Link href="/">
              <a>Go back to home</a>
            </Link>
          </p>
        </div>
      ) : (
        <div className="message">
          <h1>We got a problem</h1>
          <p>Try again in a few moments</p>
        </div>
      )}

      <style jsx>{`
        .message {
          padding: 100px;
          text-align: center;
        }
        h1 {
          margin-bottom: 2em;
        }
        a {
          color: #8756ca;
        }
      `}</style>
    </Layout>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;

Error.propTypes = {
  statusCode: PropTypes.number.isRequired,
};
