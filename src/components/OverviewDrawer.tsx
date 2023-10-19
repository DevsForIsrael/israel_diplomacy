import { useState, useEffect, useRef } from "react";
import { Stack, Drawer, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import { defaultFacts, Content, Facts, ContentEntryTypeEnum } from "../types";

import { getContent } from "../content/content_providers";

const OverviewDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [facts, setFacts] = useState<Facts>(defaultFacts as Facts);
  let rendered = useRef(false);

  useEffect(() => {
    const fetchContent = async () => {
      rendered.current = true;
      const facts: Content = (await getContent(
        ContentEntryTypeEnum.FACTS
      )) as Facts;
      setFacts(facts);
    };

    !rendered.current && fetchContent();
  }, []);

  return (
    <>
      <Drawer
        anchor={"top"}
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Stack
          onClick={() => setIsDrawerOpen(false)}
          position="absolute"
          right={0}
          p={2}
        >
          <CloseIcon />
        </Stack>
        <Stack p={4} alignItems="center" gap={2} pb={6}>
          <Typography
            variant="h5"
            fontFamily="'Century Gothic', Arial, sans-serif"
          >
            {facts.title}
          </Typography>
          <Stack>
            <Typography
              variant="subtitle1"
              fontFamily="'Century Gothic', Arial, sans-serif"
            >
              {facts.bulletsTitle}
            </Typography>
            <ul style={{ padding: "1em" }}>
              {facts.bullets.map((bullet) => (
                <li style={{ marginBottom: "1.5em" }}>{bullet}</li>
              ))}
            </ul>
            <Stack
              mt={4}
              onClick={() => setIsDrawerOpen(false)}
              justifyContent="center"
              alignItems="center"
            >
              <Button
                onClick={() => setIsDrawerOpen(false)}
                variant="outlined"
                sx={{
                  width: "100%",
                  maxWidth: 300,
                }}
              >
                Close
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Drawer>
      <Stack
        p={1}
        style={{ background: "whitesmoke", cursor: "pointer" }}
        direction="row"
        alignItems="center"
        justifyContent="center"
        onClick={() => setIsDrawerOpen(true)}
      >
        <Typography
          variant="body1"
          fontFamily="'Century Gothic', Arial, sans-serif"
        >
          {facts.title}
        </Typography>
        <ArrowDropDownIcon />
      </Stack>
    </>
  );
};

export default OverviewDrawer;
