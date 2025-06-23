import React, { useEffect, useState } from 'react';

const WebpImage = ({
  src,
  alt = '',
  className = '',
  style = {},
  loadingLazy = true,
}) => {
  const [webpUrl, setWebpUrl] = useState(null);

  useEffect(() => {
    if (!src) return;

    const img = new Image();
    img.crossOrigin = 'Anonymous'; // важно для CORS (если нужно)
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);

      canvas.toBlob(
        (blob) => {
          const blobUrl = URL.createObjectURL(blob);
          setWebpUrl(blobUrl);
        },
        'image/webp',
        0.8 // quality
      );
    };

    img.onerror = () => {
      console.error('Error loading image:', src);
    };

    img.src = src;

    // очистка blob при размонтировании
    return () => {
      if (webpUrl) {
        URL.revokeObjectURL(webpUrl);
      }
    };
  }, [webpUrl, src]);

  return (
    <>
      {webpUrl ? (
        <img
          src={webpUrl}
          alt={alt}
          className={className}
          style={style}
          loading={loadingLazy ? 'lazy' : undefined}
        />
      ) : (
        <span>Loading image…</span>
      )}
    </>
  );
};

export default WebpImage;
