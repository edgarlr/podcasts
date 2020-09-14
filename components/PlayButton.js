import React from 'react'
import { MdPlayArrow } from 'react-icons/md'
import { colors } from 'styles/theme'

const PlayButton = () => {
  return (
    <button>  
      <MdPlayArrow color='white' size='2rem' />

      <style jsx>{`
        button {
          outline: none;
          background: ${colors.black};
          border-radius: 50%;
          border: none;
          height: 3rem;
          width: 3rem;
          display: flex;
          justify-content: center;
          align-items: center;
          
          position: absolute;
          right: 1.5rem;
          transform: translateY(-60%);
        }  
      `}</style>
    </button>
  )
}

export default PlayButton
