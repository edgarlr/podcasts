export default function TranslucentImage({clipUrls, channelUrls}) {
  return (
    <div className='image-container'>
      <img
        src={clipUrls.image || channelUrls.logo_image.original}
        alt=''
        srcSet=''
      />
      <div
        className='image-shadow'
        style={{
          backgroundImage: `url(${
            clipUrls.image || channelUrls.logo_image.original
          })`,
        }}
      ></div>

      <style jsx>{`
        .image-container {
          position: relative;
        }
        img {
          width: 100%;
          border-radius: 20px;
        }
        .image-shadow {
          filter: blur(40px);
          position: absolute;
          top: 0;
          margin: 0;
          width: 100%;
          max-height: 100%;
          border-radius: 20%;
          opacity: .5;
          z-index: -1;
        }
      `}</style>
    </div>
  );
}
