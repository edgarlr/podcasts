import Close from '@components/icons/Close'
import { useToast } from '@lib/hooks/use-toast'
import { useEffect } from 'react'
import IconButton from '../IconButton'

type Props = {
  children: React.ReactNode
  id: number
}

const Toast = ({ children, id }: Props) => {
  const { removeToast } = useToast()

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id)
    }, 3000)
    return () => {
      clearTimeout(timer)
    }
  })

  return (
    <div className="toast">
      {children}
      <IconButton onClick={() => removeToast(id)} ariaLabel="Close Toast">
        <Close />
      </IconButton>
      {/*  md:w-full */}
      <style jsx>{`
        .toast {
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 90%;
          margin: 1rem auto;
          padding: 0.5rem 0.5rem 0.5rem 1rem;
          border-radius: 5px;
          background: var(--secondary);
          font-size: var(--font-sm);
          border: var(--default-border);
          box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </div>
  )
}

export default Toast
