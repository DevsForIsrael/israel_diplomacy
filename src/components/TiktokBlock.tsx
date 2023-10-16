import React from "react";
import { useInView } from "react-intersection-observer";
import { Stack } from "@mui/material";
import ShareButtons from "../ShareButtons";

type Props = {
  url: string;
};

const TiktokBlock = ({ url }: Props) => {
  const { ref } = useInView({
    threshold: 0.4,
  });

  const getTiktokVideoId = (url: string) => {
    const regex = /\/video\/(\d+)/;
    const match = url.match(regex);
    return match?.[1] || null;
  };

  return (
    <Stack>
      <blockquote
        className="tiktok-embed"
        cite={url}
        data-video-id={getTiktokVideoId(url)}
        ref={ref}
      >
        <section>Loading</section>
      </blockquote>
      <ShareButtons url={url} />
    </Stack>
  );
};

export default TiktokBlock;
