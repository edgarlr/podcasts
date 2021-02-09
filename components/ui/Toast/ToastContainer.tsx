import { usePlayer } from '@lib/hooks/use-player'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Toast from './Toast'

const ToastContainer = ({ toasts }: { toasts: TToast[] }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const { current } = usePlayer()

  if (!mounted) return null
  return createPortal(
    <div className="toast-container">
      {toasts.map((item: TToast) => (
        <Toast key={item.id} id={item.id}>
          {item.content}
        </Toast>
      ))}
      <style jsx>{`
        .toast-container {
          position: fixed;
          right: 0;
          bottom: ${current ? '5rem' : 0};
          width: 100vw;
          z-index: 10000;
        }
        @media screen and (min-width: 1024px) {
          .toast-container {
            width: 25rem;
            bottom: 0;
          }
        }
      `}</style>
    </div>,
    document.body
  )
}

export default ToastContainer
