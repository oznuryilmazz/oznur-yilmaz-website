import { Icon } from "@iconify/react";
import { Box, IconButton } from "@mui/joy";
import { Link } from "react-router-dom";

export default function SocialMediaButtons({ color }) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        "& > button": { borderRadius: "2rem" },
      }}
    >
      <IconButton
        size="sm"
        variant="plain"
        component={Link}
        target="_blank"
        to="https://www.linkedin.com/in/oznuryilmazz/"
      >
        <Icon icon="mdi:linkedin" color={color} width="24" height="24" />
      </IconButton>
      <IconButton
        size="sm"
        variant="plain"
        component={Link}
        target="_blank"
        to={"https://github.com/oznuryilmazz"}
      >
        <Icon icon="mdi:github" color={color} width="24" height="24" />
      </IconButton>
      <IconButton
        size="sm"
        variant="plain"
        component={Link}
        target="_blank"
        to="https://www.instagram.com/ozywebdesigner/"
      >
        <Icon icon="mdi:instagram" color={color} width="24" height="24" />
      </IconButton>
    </Box>
  );
}
