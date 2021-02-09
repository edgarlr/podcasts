import Github from '@components/icons/Github'
import ExternalLink from '@components/ui/ExternalLink'
import { SOURCE_URL } from '@lib/constants'
import { usePlayer } from '@lib/hooks/use-player'

const Footer = () => {
  const { current } = usePlayer()
  return (
    <footer className={current ? 'playing' : ''}>
      <ExternalLink
        to={SOURCE_URL}
        ariaLabel="Link to source code"
        className="source-link"
      >
        <Github width={18} height={18} style={{ marginRight: '.5rem' }} />
        Source
      </ExternalLink>

      <style jsx>{`
        footer {
          padding: 2rem 0;
          display: flex;
          justify-content: center;
          gap: 1rem;
        }
        footer > :global(.source-link) {
          display: flex;
          align-items: center;
        }
        @media screen and (min-width: 766px) {
          footer.playing > :global(.back-btn) {
            left: 1.5rem;
          }
        }
        @media screen and (min-width: 1024px) {
          footer.playing {
            padding: 2rem 21rem 2rem 1.5rem;
          }
        }
        @media screen and (min-width: 1440px) {
          footer.playing {
            padding: 2rem 23rem 2rem 1.5rem;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer
