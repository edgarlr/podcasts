import React from 'react'

export default function FiltersIcon() {
  return (
    <div>
      <span className='material-icons'>sort</span>

      <style jsx>{`
        span{
          transform: rotate(180deg);
        }
      `}</style>
    </div>
  );
}
