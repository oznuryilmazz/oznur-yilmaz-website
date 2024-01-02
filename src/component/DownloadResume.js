import { Icon } from "@iconify/react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function DownloadResume() {
  return (
    <Button
      variant="text"
      sx={{ color: "white", textTransform: "capitalize" }}
      component={Link}
      to="https://drive.google.com/file/d/1XWMSW79J0kvMctgx7EeEC_oqRd-K6U1U/view?usp=sharing"
      target="_blank"
      endIcon={
        <Icon
          icon="material-symbols-light:keyboard-arrow-right"
          color="#f7bac5"
        />
      }
    >
      Download Resume
    </Button>
  );
}
