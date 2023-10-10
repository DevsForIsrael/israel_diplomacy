import { useState } from "react";
import { Stack, Drawer, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Typography } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const OverviewDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
            Tips for explaining Israels situation in the world
          </Typography>
          <Stack>
            <Typography
              variant="subtitle1"
              fontFamily="'Century Gothic', Arial, sans-serif"
            >
              Use these facts:
            </Typography>
            <ul style={{ padding: "1em" }}>
              <li style={{ marginBottom: "1.5em" }}>
                The death toll from a major Hamas attack had risen above 900,
                with the number expected to increase. Over 100 people were
                reportedly kidnapped and taken to the Gaza Strip.
              </li>
              <li style={{ marginBottom: "1.5em" }}>
                Battles were ongoing in several communities near the Gaza border
                that had been overrun by Hamas gunmen. Rocket fire from Gaza
                continued to target Israeli communities.
              </li>
              <li style={{ marginBottom: "1.5em" }}>
                The assault by Hamas gunmen had taken place in as many as 22
                locations in southern Israel, resulting in the deaths of
                civilians and soldiers.
              </li>
              <li style={{ marginBottom: "1.5em" }}>
                Reports suggested that over 700 people were killed in the
                assault, making it the bloodiest day in Israel's history.
              </li>
              <li style={{ marginBottom: "1.5em" }}>
                The Health Ministry reported over 2,200 wounded, with some in
                critical condition.
              </li>
              <li style={{ marginBottom: "1.5em" }}>
                Hamas gunmen had taken civilians and soldiers captive into Gaza,
                and there were reports of abuse and parading of dead Israelis in
                the streets.
              </li>
              <li style={{ marginBottom: "1.5em" }}>
                Israel was working to locate and rescue the captives, with a
                special situation room established for this purpose.
              </li>
              <li style={{ marginBottom: "1.5em" }}>
                Many families were desperately seeking information about missing
                loved ones and criticized the government for not providing
                enough assistance.
              </li>
              <li style={{ marginBottom: "1.5em" }}>
                There were concerns about a potential second front opening in
                the north, as Hezbollah shelled Israeli positions on the
                northern border.
              </li>
              <li style={{ marginBottom: "1.5em" }}>
                The international community condemned the Hamas assault and the
                abduction of civilians, and Israel received support from Western
                governments.
              </li>
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
          Tips for explaining Israels situation in the world
        </Typography>
        <ArrowDropDownIcon />
      </Stack>
    </>
  );
};

export default OverviewDrawer;
