import Link from 'next/link';
import { colors, fontWeight } from 'styles/theme';
import PropTypes from 'prop-types';

export default function MainTitle({ title, subtitle, linkTo }) {
  return (
    <div>
      {linkTo && (
        <Link href={linkTo}>
          <a>{subtitle}</a>
        </Link>
      )}

      {subtitle && !linkTo && <p>{subtitle}</p>}

      <h1>{title}</h1>

      <style jsx>{`
        div {
          color: ${colors.black};
          background: ${colors.white};
          font-weight: ${fontWeight.bold};
        }
      `}</style>

      <style jsx>{`
        div {
          margin-top: 3em;
          height: auto;
          display: block;
        }
        h1 {
          margin: 8px 0;
        }
        p,
        a {
          margin: 0;
          font-size: 0.7rem;
          text-transform: uppercase;
        }
      `}</style>
    </div>
  );
}

MainTitle.defaultProps = {
  subtitle: null,
  linkTo: null,
};

MainTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  linkTo: PropTypes.string,
};
