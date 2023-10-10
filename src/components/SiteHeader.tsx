
import { Stack } from '@mui/material';
import { Typography } from '@mui/material';
import il from "../assets/il.svg";

const SiteHeader = () => {
  return (
    <Stack p={5} pt={3} justifyContent="center" alignItems="center">
        <Stack mb={1} justifyContent="center" alignItems="center" gap={1}>
          <img alt="israel" src={il} style={{ width: 36, height: 36 }} />
          <Typography
            variant="h1"
            fontFamily="'Century Gothic', Arial, sans-serif"
            fontSize={34}
            fontWeight={600}
          >
            Help with Israeli Diplomacy across the Web
          </Typography>
        </Stack>
        <Typography
          variant="h2"
          fontFamily="'Century Gothic', Arial, sans-serif"
          fontSize={25}
        >
          Participate in debates and help spread the truth
        </Typography>
      </Stack>
  )
}

export default SiteHeader