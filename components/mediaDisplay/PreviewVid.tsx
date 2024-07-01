import React from "react";
import { Player } from "video-react";

type Props = {
  file: string;
};

const PreviewVideo = ({ file }: Props) => {
  return <Player>
  <source src={file} />
</Player>;
};

export default PreviewVideo;
