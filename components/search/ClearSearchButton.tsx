import Close from 'components/icons/Close'
import IconButton from 'components/ui/IconButton'
import { useRouter } from 'next/router'

const ClearSearchButton = () => {
  const router = useRouter()
  return (
    <IconButton onClick={() => router.replace('/search?q=')} ariaLabel="Search">
      <Close />
    </IconButton>
  )
}

export default ClearSearchButton
