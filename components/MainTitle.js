import React from 'react'
import { colors, fontWeight } from 'styles/theme';

export default function MainTitle({ children, title, subtitle = null }) {
  return (
    <div>
      {children}

      {subtitle && <p>{subtitle}</p>}
      
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
        p {
          margin: 0;
          font-size: .7rem;
          text-transform: uppercase;
        }
      `}</style>
    </div>
  );
}
