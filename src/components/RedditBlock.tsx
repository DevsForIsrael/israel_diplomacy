import React from "react";
import { Stack } from "@mui/material";
import ShareButtons from "../ShareButtons";

type Props = {
  url: string;
};

const RedditBlock = ({ url }: Props) => {
  return (
    <Stack sx={{ width: "50vw", maxWidth: "600px" }}>
      <blockquote
        className="reddit-embed-bq"
        style={{ height: 500 }}
        data-embed-height="240"
      >
        <a href={url}>Loading</a>
      </blockquote>
      <ShareButtons url={url} />
    </Stack>
  );
};

export default RedditBlock;
