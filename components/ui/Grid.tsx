const Grid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid">
      {children}

      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          grid-gap: 2rem 0.8rem;
          padding: 1.5rem 0;
          justify-items: center;
        }
      `}</style>
    </div>
  )
}

export default Grid
