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
        align-items: center;
        padding: 0 0 1rem;
        border-bottom: var(--default-border);
      }
      .main-title {
        font-size: var(--font-lg);
        color: var(--primary-90);
        text-transform: capitalize;
        margin: auto 0;
        font-weight: bold;
      }
    `}</style>
  </div>
)

export default SectionTitle
