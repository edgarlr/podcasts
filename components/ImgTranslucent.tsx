import Image from 'next/image'

type Props = {
  url: string
  alt: string
  fullBlur?: boolean
  borderRadius?: string
  width?: string
  height?: string
  margin?: string
}

export default function ImgTranslucent({
  url,
  alt,
  fullBlur = false,
  borderRadius = '20px',
  width = '100%',
  height = '100%',
  margin = '0',
}: Props) {
  return (
    <div className="image-container">
      <Image
        src={url}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className="image-main"
      />

      <div className={`background-container ${fullBlur ? 'ultra' : ''}`}>
        <Image src={url} layout="fill" objectFit="cover" quality={25} />
      </div>

      <style jsx global>{`
        .image-main {
          border-radius: ${borderRadius};
        }
      `}</style>

      <style jsx>{`
        .image-container {
          position: relative;
          width: ${width};
          padding-bottom: ${height};
          margin: ${margin};
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
