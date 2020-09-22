export default function ImgTranslucent({url, alt, fullBlur = null, borderRadius = null}) {
  return (
    <div className='image-container'>
      <div
        className={`image-shadow ${fullBlur && 'ultra'}`}
        style={{backgroundImage: `url(${url})`}}
      />

      <img src={url}  alt={alt}  srcSet='' />

      <style jsx>{`
        .image-container {
          position: relative;
        }
        img { 
          width: 100%;
          border-radius: ${borderRadius || '25%'};
        }
        .image-shadow {
          filter: blur(10px);
          width: 70%;
          height: 70%;
          position: absolute;
          top: 22%;
          left: 50%;
          transform: translate(-50%);
          margin: 0;
          border-radius: 20%;
          opacity: .5;
          z-index: -1;
        }
        .image-shadow.ultra {
          filter: blur(40px);
          width: 100%;
          height: 100%;
          top: 0;
        }
      `}</style>
    </div>
  );
}
