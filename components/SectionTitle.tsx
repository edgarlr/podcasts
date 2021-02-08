type Props = {
  title: string
  button?: React.ReactNode
}

const SectionTitle = ({ title, button = null }: Props) => (
  <div className="section-title">
    <h2 className="main-title">{title}</h2>

    {button}

    <style jsx>{`
      .section-title {
        display: flex;
        justify-content: space-between;
        align-content: center;
        padding: 0 0 1rem;
        border-bottom: 1px solid var(--gray-20);
      }
      .main-title {
        font-size: 0.7rem;
        text-transform: uppercase;
        margin: auto 0;
        font-weight: bold;
        color: var(--gray-50);
      }
    `}</style>
  </div>
)

export default SectionTitle
