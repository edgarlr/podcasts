import { AudioPlayerProvider } from '@components/audioplayer/AudioPlayerProvider'
import ToastProvider from '@components/ui/Toast/ToastProvider'
import { render } from '@testing-library/react'

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <AudioPlayerProvider>
      <ToastProvider>{children}</ToastProvider>
    </AudioPlayerProvider>
  )
}

const customRender = (ui: any, options = {}) => {
  render(ui, {
    wrapper: Providers,
    ...options,
  })
}

export * from '@testing-library/react'
export { customRender as render }
