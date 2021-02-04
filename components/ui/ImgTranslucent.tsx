import Image from 'next/image'
import { CSSProperties } from 'react'
import cn from 'classnames'

type Props = {
  url: string
  alt: string
  fullBlur?: boolean
  style: CSSProperties
}

export default function ImgTranslucent({
  url,
  alt,
  style,
  fullBlur = false,
}: Props) {
  return (
    <div className="image-container" style={style}>
      <Image
        src={url}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className="image-main"
      />

      <div className={cn('background-container', { ['ultra']: fullBlur })}>
        <Image src={url} layout="fill" objectFit="cover" quality={25} />
      </div>

      <style jsx global>{`
        .image-main {
          border-radius: 15px;
        }
      `}</style>

      <style jsx>{`
        .image-container {
          position: relative;
          width: 100%;
          padding-bottom: 100%;
          margin: 0;
        }
        .background-container {
          position: absolute;
          width: 80%;
          height: 80%;
          filter: blur(15px);
          transform: translate(-50%, 30%);
          left: 50%;
          z-index: -1;
          opacity: 0.8;
        }
        .background-container.ultra {
          filter: blur(40px);
          width: 100%;
          height: 100%;
          transform: translate(-50%, 0);
        }
      `}</style>
    </div>
  )
}
