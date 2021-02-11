import cn from 'classnames'

type Props = {
  title: string
  button?: React.ReactNode
  border?: boolean
}

const SectionTitle = ({ title, button = null, border = false }: Props) => (
  <div className={cn('section-title', { ['with-button']: button || border })}>
    <h2 className="main-title">{title}</h2>

    {button}

    <style jsx>{`
      .section-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem 0;
      }
      .main-title {
        font-size: var(--font-xl);
        color: var(--primary);
        text-transform: capitalize;
        margin: auto 0;
        font-weight: bold;
      }
      .with-button {
        border-bottom: var(--default-border);
        padding: 0 0 1rem;
      }
      .with-button > .main-title {
        font-size: var(--font-md);
        color: var(--primary);
      }
    `}</style>
  </div>
)

export default SectionTitle
