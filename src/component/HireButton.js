import { Button } from "@mui/material";

export default function HireButton() {
  return (
    <Button
      variant="contained"
      size="large"
      onClick={() => window.location.replace("/#contact")}
      sx={{
        backgroundColor: "primary",
        color: "black",
        textTransform: "capitalize",
        borderRadius: 2,
      }}
    >
      Hire Me!
    </Button>
  );
}
