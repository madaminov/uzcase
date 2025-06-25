import React, { useEffect, useRef, useState } from 'react';

const WebpImage = ({
  src,
  alt = '',
  className = '',
  style = {},
  loadingLazy = true,
}) => {
  const [webpUrl, setWebpUrl] = useState(null);
  const blobUrlRef = useRef(null);

  useEffect(() => {
    if (!src) return;

    let isMounted = true;

    const img = new Image();
    img.crossOrigin = 'anonymous'; // если CORS требуется
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);

      canvas.toBlob(
        (blob) => {
          if (blob && isMounted) {
            const url = URL.createObjectURL(blob);
            blobUrlRef.current = url;
            setWebpUrl(url);
          }
        },
        'image/webp',
        0.8
      );
    };

    img.onerror = () => {
      if (isMounted) console.error('Error loading image:', src);
    };

    img.src = src;

    return () => {
      isMounted = false;
      if (blobUrlRef.current) {
        URL.revokeObjectURL(blobUrlRef.current);
        blobUrlRef.current = null;
      }
    };
  }, [src]);

  if (!src) return null;

  return webpUrl ? (
    <img
      src={webpUrl}
      alt={alt}
      className={className}
      style={style}
      loading={loadingLazy ? 'lazy' : undefined}
    />
  ) : null;
};

export default WebpImage;
