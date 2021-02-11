import Share from '@components/icons/Share'
import Twitter from '@components/icons/Twitter'
import Facebook from '@components/icons/Facebook'
import { MouseEvent } from 'react'
import { SITE_URL } from '@lib/constants'
import ExternalLink from './ui/ExternalLink'
import { useToast } from '@lib/hooks/use-toast'
import Copy from './icons/Copy'
import { Menu, MenuButton, MenuItem, MenuWrapper } from './ui/Menu'

type Props = {
  title: string
  path: string
  message?: string
}

const ShareButton = ({ title, path, message = 'Chech this link' }: Props) => {
  const { addToast } = useToast()

  const fullURL = `${SITE_URL}${path}`

  const onShareClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (navigator.share) {
      navigator
        .share({
          title: title,
          text: message,
          url: fullURL,
        })
        .catch(console.error)
    }
  }

  const onCopyToClipboard = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(fullURL)
        .then(() => addToast('Copied to the clipboard'))
        .catch(console.error)
    }
  }

  return (
    <>
      <MenuWrapper>
        <MenuButton onClick={onShareClick} ariaLabel="Share">
          <Share />
        </MenuButton>
        <Menu title="Share" position="left">
          <MenuItem>
            <button
              className="menu-item"
              onClick={() =>
                window.open(
                  `https://www.facebook.com/sharer/sharer.php?u=${fullURL}`,
                  'facebook-share-dialog',
                  'width=800,height=600'
                )
              }
            >
              Share on Facebook
              <Facebook width={20} height={20} style={{ marginLeft: 'auto' }} />
            </button>
          </MenuItem>
          <MenuItem>
            <ExternalLink
              ariaLabel="Share on twitter"
              to={`https://twitter.com/intent/tweet?url=${fullURL}&text=${title}`}
              className="menu-item"
            >
              Share on Twitter
              <Twitter width={20} height={20} style={{ marginLeft: 'auto' }} />
            </ExternalLink>
          </MenuItem>
          <MenuItem>
            <button
              className="copy-clipboard"
              onClick={onCopyToClipboard}
              aria-label="Copy to clipboard"
              title={fullURL}
            >
              {fullURL}
              <span className="clipboard-icon">
                <Copy width={16} height={16} />
              </span>
            </button>
          </MenuItem>
        </Menu>
      </MenuWrapper>

      <style jsx>{`
        .copy-clipboard {
          width: 100%;
          border: var(--default-border);
          border-radius: 10px;
          transition: border 0.15s;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          padding: 0.75rem 2.25rem 0.75rem 0.5rem;
          font-size: var(--font-sm);
          color: var(--primary-80);
          transform: scale(1.05);
        }
        .clipboard-icon {
          color: var(--primary);
          position: absolute;
          right: 0;
          padding: 0 0.75rem;
          line-height: 0.5;
        }
        .copy-clipboard:hover {
          border: 1px solid var(--primary-50);
          background: var(--secondary);
          color: var(--primary);
        }
      `}</style>
    </>
  )
}

export default ShareButton
