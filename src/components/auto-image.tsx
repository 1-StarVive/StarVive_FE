"use client";

import { memo } from "react";

type AutoImageProps = { src: string; alt: string } & React.ImgHTMLAttributes<HTMLImageElement>;

const AutoImage = memo(function AutoImage({ src, alt, ...rest }: AutoImageProps) {
  return <img src={src} alt={alt} {...rest} />;
});

export default AutoImage;
