import { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const PlayerPortal = ({ children, selector }) => {
  const ref = useRef();
  const [monted, setMonted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector);
    setMonted(true);
  }, [selector]);
  return monted ? createPortal(children, ref.current) : null;
};

export default PlayerPortal;

PlayerPortal.propTypes = {
  children: PropTypes.node.isRequired,
  selector: PropTypes.string.isRequired,
};
