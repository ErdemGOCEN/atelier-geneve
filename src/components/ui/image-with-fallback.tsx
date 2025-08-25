import { useEffect, useState } from "react";

import fallbackImage from "@/assets/fallback.jpg";

interface ImageWithFallbackProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: HTMLImageElement["src"];
}

const Image = ({
  fallback = fallbackImage,
  alt = "image fallback",
  src,
  sizes = "(max-width: 768px) 25vw, (max-width: 1200px) 50vw, 100vw",
  ...props
}: ImageWithFallbackProps) => {
  const [error, setError] = useState<React.SyntheticEvent<
    HTMLImageElement,
    Event
  > | null>(null);

  useEffect(() => {
    setError(null);
  }, [src]);

  return (
    <img
      alt={alt}
      onError={setError}
      src={error ? fallbackImage : src}
      sizes={sizes}
      loading="eager"
      {...props}
    />
  );
};

export default Image;
