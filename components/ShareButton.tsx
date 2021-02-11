import Share from '@components/icons/Share'
import Twitter from '@components/icons/Twitter'
import Facebook from '@components/icons/Facebook'
import { MouseEvent } from 'react'
import { SITE_URL } from '@lib/constants'
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

  const onFacebookShare = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${fullURL}`,
      'facebook-share-dialog',
      'width=800,height=600'
    )
  }

  return (
    <>
      <MenuWrapper>
        <MenuButton onClick={onShareClick} ariaLabel="Share">
          <Share />
        </MenuButton>
        <Menu title="Share" position="left">
          <MenuItem
            subfix={<Facebook width={20} height={20} />}
            onClick={onFacebookShare}
          >
            Share on Facebook
          </MenuItem>
          <MenuItem
            subfix={<Twitter width={20} height={20} />}
            href={`https://twitter.com/intent/tweet?url=${fullURL}&text=${title}`}
            external
          >
            Share on Twitter
          </MenuItem>
          <MenuItem unstyled>
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
          width: calc(100% - 2rem);
          margin: 0 auto;
          border: var(--default-border);
          border-radius: 10px;
          transition: border 0.15s;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          padding: 0.75rem 2.75rem 0.75rem 0.5rem;
          font-size: var(--font-sm);
          color: var(--primary-80);
          position: relative;
        }
        .clipboard-icon {
          color: var(--primary);
          position: absolute;
          right: 0.75rem;
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
