import PropTypes from 'prop-types';

const ErrorMessage = ({ title, subtitle }) => {
  return (
    <div className="error-message">
      <h6>{title}</h6>
      <p>{subtitle}</p>

      <style jsx>{`
        .error-message {
          text-align: center;
          margin: 5rem auto;
        }
        h6 {
          font-size: 1.2rem;
          margin: 0.5rem 0;
        }
        p {
          font-size: 0.9rem;
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default ErrorMessage;

ErrorMessage.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};
