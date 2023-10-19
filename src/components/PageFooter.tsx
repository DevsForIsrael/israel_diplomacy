import React from "react";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
import il from "../assets/il.svg";
import { FooterObject } from "../types";

type Props = {
  footer: FooterObject;
};

const PageFooter = ({ footer }: Props) => {
  let sentence1: any = footer.content?.[0]?.content?.[0]?.value;
  const sentence1Url: any = footer.content?.[0]?.content?.[1]?.data?.uri;
  const sentence1UrlLink: any =
    footer.content?.[0]?.content?.[1]?.content?.[0]?.value;
  const sentence2: any = footer.content?.[0]?.content?.[2]?.value;

  const sentence1Html = sentence1 && sentence1.replace("\n", "<br />");

  return (
    <footer>
      <Stack pt={2} pb={4} justifyContent="center" alignItems="center" gap={2}>
        <Typography variant="body2">
          <span dangerouslySetInnerHTML={{ __html: sentence1Html }} />
          <a href={sentence1Url}>{sentence1UrlLink}</a>
          {sentence2}
        </Typography>
        <img alt="israel" src={il} style={{ width: 36, height: 36 }} />
      </Stack>
    </footer>
  );
};

export default PageFooter;
