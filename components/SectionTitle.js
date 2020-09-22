import { colors, fontWeight } from "styles/theme"

export const SectionTitle = ({title, button = null}) => {
  return (
    <div>
      <h3>{ title }</h3>

      { button }

      <style jsx>{`
        div {
          border-bottom: 1px solid ${colors.lightGray};
        }
        h3 {
          font-weight: ${fontWeight.bold};
          color: ${colors.gray};
        } 
      `}</style>
      
      <style jsx>{`
        div {
          display: flex;
          justify-content: space-between;
          align-content: center;
          padding: 1rem 0;
        }
        h3 {
          font-size: .7rem;
          text-transform: uppercase;
          margin: auto 0;
        }  
      `}</style>
    </div>
  )
}

// export default SectionTitle
