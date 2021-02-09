import Close from '@components/icons/Close'
import Share from '@components/icons/Share'
import Twitter from '@components/icons/Twitter'
import Facebook from '@components/icons/Facebook'
import { useState, useEffect, useRef, MouseEvent } from 'react'
import IconButton from './ui/IconButton'
import { SITE_URL } from '@lib/constants'
import ExternalLink from './ui/ExternalLink'

type Props = {
  title: string
  path: string
  message?: string
}

const ShareButton = ({ title, path, message = 'Chech this link' }: Props) => {
  const [showShare, setShowShare] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const shareMenuRef = useRef<HTMLDivElement>(null)

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
    } else {
      setShowShare(!showShare)
    }
  }

  const onCopyToClipboard = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(fullURL)
        .then(() => setIsCopied(true))
        .catch(console.error)
    }
  }

  // useEffect(() => {
  //   const onOutsideClick = (e: any) => {
  //     console.log('hola')
  //     if (
  //       showShare &&
  //       shareMenuRef.current &&
  //       !shareMenuRef.current.contains(e.target)
  //     ) {
  //       setShowShare(false)
  //     }
  //   }

  //   document.addEventListener('click', onOutsideClick)
  //   return () => document.removeEventListener('click', onOutsideClick)
  // }, [])

  useEffect(() => {
    // Early return when isCopied is false.
    if (!isCopied) return

    const timer = setTimeout(() => {
      setIsCopied(!isCopied)
    }, 3000)

    return () => clearTimeout(timer)
  }, [isCopied])

  return (
    <div className="container" ref={shareMenuRef}>
      <IconButton onClick={onShareClick} ariaLabel="Share" variant="tertiary">
        {showShare ? <Close /> : <Share />}
      </IconButton>

      {showShare && (
        <div className="menu">
          <p className="title">Share</p>
          <ul className="list">
            <li>
              <button
                aria-label="Share on facebook"
                className="link-element"
                onClick={() =>
                  window.open(
                    `https://www.facebook.com/sharer/sharer.php?u=${fullURL}`,
                    'facebook-share-dialog',
                    'width=800,height=600'
                  )
                }
              >
                Share on Facebook
                <Facebook
                  width={20}
                  height={20}
                  style={{ marginLeft: 'auto' }}
                />
              </button>
            </li>
            <li>
              <ExternalLink
                ariaLabel="Share on twitter"
                to={`https://twitter.com/intent/tweet?url=${fullURL}&text=${title}`}
                className="link-element"
              >
                Share on Twitter
                <Twitter
                  width={20}
                  height={20}
                  style={{ marginLeft: 'auto' }}
                />
              </ExternalLink>
            </li>
            <li>
              <div className="copy-clipboard">
                <p className="clipboard-text" title={fullURL}>
                  {fullURL}
                </p>
                <button
                  className="clipboard-btn"
                  onClick={onCopyToClipboard}
                  aria-label="Copy to clipboard"
                >
                  {isCopied ? 'Copied' : 'Copy'}
                </button>
              </div>
            </li>
          </ul>
        </div>
      )}

      <style jsx>{`
        .container {
          position: relative;
        }
        .menu {
          position: absolute;
          z-index: 20;
          left: 0;
          margin-top: 0.5rem;
          padding: 1rem 0;
          display: flex;
          flex-direction: column;
          border-radius: 15px;
          background: var(--secondary);
          box-shadow: var(--default-shadow);
          border: var(--default-border);
        }
        .title {
          padding: 0 1.5rem;
          margin: 0.25rem 0 0.5rem 0;
          font-weight: bold;
          font-size: var(--font-sm);
        }
        .list {
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          border-radius: 15px;
        }
        .list li {
          list-style: none;
          padding: 0.75rem 1.5rem;
          cursor: pointer;
        }
        .list li:hover {
          background: var(--primary-05);
        }
        .list > li :global(.link-element) {
          font-size: var(--font-sm);
          color: var(--primary);
          padding: 0;
          display: flex;
          align-items: center;
          width: 100%;
          height: 100%;
        }
        .copy-clipboard {
          display: flex;
          max-width: 14rem;
          border: var(--default-border);
          border-radius: 10px;
          transition: border 0.15s;
          margin: -0.5rem;
        }
        .clipboard-text {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          transition: border 0.15s;
          border-right: var(--default-border);
          padding: 0.625rem 0.5rem;
          font-size: var(--font-sm);
          margin: 0;
        }
        .clipboard-btn {
          background: var(--primary-05);
          font-size: var(--font-sm);
          padding: 0 0.75rem;
          border: none;
          border-radius: 0 10px 10px 0;
        }
        .copy-clipboard:hover {
          border: 1px solid var(--primary-50);
          background: var(--secondary);
        }
        .copy-clipboard:hover .clipboard-text {
          border-right: 1px solid var(--primary-50);
        }
        .copy-clipboard:hover .clipboard-btn {
          background: var(--primary-10);
        }
      `}</style>
    </div>
  )
}

export default ShareButton
