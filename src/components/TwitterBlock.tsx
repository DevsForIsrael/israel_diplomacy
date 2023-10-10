import React from "react";
import { Stack } from "@mui/material";
import ShareButtons from "../ShareButtons";

const TwitterBlock = ({ url }: { url: string }) => {
  return (
    <Stack>
      <blockquote className="twitter-tweet" style={{ width: "350px" }}>
        <a href={url.toLowerCase().replace("x.com", "twitter.com")}>Loading</a>
      </blockquote>
      <ShareButtons url={url} />
    </Stack>
  );
};

export default TwitterBlock;
