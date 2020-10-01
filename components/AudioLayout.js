import React from 'react';
import PlayerModal from './screens/PlayerModal';
import PropTypes from 'prop-types';

const AudioLayout = ({ children }) => {
  return (
    <>
      {children}
      <PlayerModal />
    </>
  );
};

export default AudioLayout;

AudioLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
