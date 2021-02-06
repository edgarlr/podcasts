import Github from '@components/icons/Github'
import Twitter from '@components/icons/Twitter'
import ExternalLink from '@components/ui/ExternalLink'
import { GITHUB_URL, TWITTER_URL } from '@lib/constants'

const Footer = () => {
  return (
    <footer>
      <ExternalLink to={TWITTER_URL} ariaLabel="Link to twitter">
        <Twitter />
      </ExternalLink>
      <ExternalLink to={GITHUB_URL} ariaLabel="Link to source code">
        <Github />
      </ExternalLink>

      <style jsx>{`
        footer {
          padding: 2rem 0;
          display: flex;
          justify-content: center;
          gap: 1rem;
        }
      `}</style>
    </footer>
  )
}

export default Footer
