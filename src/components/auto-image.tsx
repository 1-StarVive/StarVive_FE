"use client";

import Image, { ImageProps } from "next/image";
import { memo, useState } from "react";

type AutoImageProps = Omit<ImageProps, "width" | "height">;

const AutoImage = memo(function AutoImage({ src, alt, ...rest }: AutoImageProps) {
  const [size, setSize] = useState<{ width: number; height: number }>();

  const handleLoad: ImageProps["onLoad"] = (event) => {
    const { naturalWidth, naturalHeight } = event.currentTarget;
    setSize({ width: naturalWidth, height: naturalHeight });
  };

  return (
    <div className="relative" style={{ ...(size && { aspectRatio: size.width / size.height }) }}>
      <Image src={src} alt={alt} fill onLoad={handleLoad} {...rest} />
    </div>
  );
});

export default AutoImage;
