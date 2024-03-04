import { Icon } from "@iconify/react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { TrackGoogleAnalyticsEvent } from "../services/useAnalyticsEventTracker";

export default function DownloadResume() {
  const sampleCategory = "resume";
  const sampleAction = "Downloaded_Resume";

  //and you can call them in your funtions like

  const handleSelect = (value) => {
    TrackGoogleAnalyticsEvent(sampleCategory, sampleAction);
  };

  return (
    <Button
      variant="text"
      sx={{ color: "white", textTransform: "capitalize" }}
      component={Link}
      onClick={handleSelect}
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
