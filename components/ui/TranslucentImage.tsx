import Image from 'next/image'
import { CSSProperties } from 'react'
import cn from 'classnames'

type Props = {
  url: string
  alt: string
  width: number
  height: number
  shape?: 'square' | 'circle'
  blur?: 'normal' | 'large'
  style?: CSSProperties
}

export default function TranslucentImage({
  url,
  alt,
  width,
  height,
  shape = 'square',
  blur = 'normal',
  style = {},
}: Props) {
  // Clases declared on main.css
  const imageShape = cn({
    ['square-image']: shape === 'square',
    ['circle-image']: shape === 'circle',
  })

  return (
    <div className="image-container" style={style}>
      <Image
        src={url}
        alt={alt}
        width={width}
        height={height}
        objectFit="cover"
        className={imageShape}
      />

      <div
        className={cn('bg-image', {
          ['normal-blur']: blur === 'normal',
          ['large-blur']: blur === 'large',
        })}
      >
        <Image
          src={url}
          alt={alt}
          width={width}
          height={height}
          className={imageShape}
        />
      </div>

      <style jsx>{`
        .image-container {
          position: relative;
          width: max-content;
          margin: 0;
          z-index: 1;
        }
        .bg-image {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          opacity: 0.8;
          z-index: -1;
        }
        .normal-blur {
          transform: translate(0, 12.5%) scale(0.8);
          filter: blur(15px);
        }
        .large-blur {
          filter: blur(40px);
          transform: translate(0, 0) scale(1);
        }
      `}</style>
    </div>
  )
}
