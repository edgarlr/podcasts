import { useRouter } from 'next/router';
import React from 'react'
import { MdClose } from 'react-icons/md';
import { colors } from 'styles/theme';

const ClearSearchButton = () => {
  const router = useRouter()

  const onCloseClick = () => {
    router.push('/?search=', undefined, { shallow: true })
  }

  return (
    <button onClick={onCloseClick}>
      <MdClose size='2rem' color={colors.black} />
    </button>
  )
}

export default ClearSearchButton
