import Image from "next/image";
import React from "react";
import ReactPlayer from "react-player";
import { shimmer, toBase64 } from "./Shimmer";

type Props = {
  file: string;
  extension: string;
};

const PreviewImage = ({ file, extension }: Props) => {
  if (extension === "png")
    return (
      <Image
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
        unoptimized={true}
        placeholder="blur"
        width={100}
        height={100}
        alt="brand"
        src={file}
        className=" z-[-1] h-64 w-64"
      />
    );
  if (extension === "jpg")
    return (
      <Image
        unoptimized={true}
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
        placeholder="blur"
        width={100}
        height={100}
        alt="brand"
        src={file}
        className=" z-[-1] h-64 w-64"
      />
    );
  if (extension === "jpeg")
    return (
      <Image
        unoptimized={true}
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
        placeholder="blur"
        width={100}
        height={100}
        alt="brand"
        src={file}
        className=" z-[-1] h-64 w-64"
      />
    );
  if (extension === "gif")
    return (
      <Image
        unoptimized={true}
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
        placeholder="blur"
        width={100}
        height={100}
        alt="brand"
        src={file}
        className=" z-[-1] h-64 w-64"
      />
    );
  if (extension === "mp4")
    return <ReactPlayer class="video" url={file} playing controls />;
  if (extension === "webm")
    return <ReactPlayer class="video" url={file} playing controls />;
  if (extension === "mkv")
    return <ReactPlayer class="video" url={file} playing controls />;
};

export default PreviewImage;
