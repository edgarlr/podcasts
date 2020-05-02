import Layout from "../components/Layout";
import Link from "next/link";

function Error({ statusCode }) {
  return (
    <Layout title='Oh no... :C'>
      { statusCode === 404 ?
      <div className="message">
        <h1>Esta página no existe! :c</h1>
        <p><Link href='/'><a>Volver al Home</a></Link></p>
      </div> :
      <div className="message">
        <h1>Hubo un problema</h1>
        <p>Intenta nuevamente en algunos segundos</p>
      </div>
      }
      
      <style jsx>{`
      .message {
          padding: 100px;
          text-align: center;
        }
      h1 {
        margin-bottom: 2em;
      }
      a {
        color: #8756ca
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
