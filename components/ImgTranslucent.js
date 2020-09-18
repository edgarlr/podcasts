export default function ImgTranslucent({url, alt}) {
  return (
    <div className='image-container'>
      <img
        src={url}
        alt={alt}
        srcSet=''
      />
      <div
        className='image-shadow'
        style={{
          backgroundImage: `url(${url})`,
        }}
      ></div>

      <style jsx>{`
        .image-container {
          position: relative;
        }
        img {
          width: 100%;
          border-radius: 25%;
        }
        .image-shadow {
          filter: blur(10px);
          position: absolute;
          top: 30%;
          left: 5%;
          margin: 0;
          width: 70%;
          height: 70%;
          border-radius: 20px;
          opacity: .5;
          z-index: -1;
        }
      `}</style>
    </div>
  );
}
