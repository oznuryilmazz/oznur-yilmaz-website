import { Card, CardContent, CardOverflow } from "@mui/joy";
import { Stack, Typography, useMediaQuery } from "@mui/material";

const experienceList = [
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/200px-React-icon.svg.png",
    experienceYear: 3,
    experienceName: "REACT JS",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
    experienceYear: 3,
    experienceName: "JAVASCRIPT",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/2048px-.NET_Core_Logo.svg.png",
    experienceYear: 3,
    experienceName: ".NET",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/1200px-WordPress_blue_logo.svg.png",
    experienceYear: 5,
    experienceName: "WORDPRESS",
  },
];

export default function ExperienceCard() {
  const isMobile = useMediaQuery("(max-width: 1000px)");
  return (
    <Stack direction={(isMobile === true && "column") || "row"} spacing={3}>
      {experienceList.map((value) => (
        <Card
          orientation="horizontal"
          variant="outlined"
          sx={{
            maxWidth: (isMobile === true && "100%") || 295,
            minWidth: (isMobile === true && "100%") || 295,
            backgroundColor: "#0d0d0d67",
            border: "thin solid primary",
            display: "flex",
            alignItems: "center",
          }}
        >
          <CardOverflow
            sx={{
              pt: 2,
              pl: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={value.icon}
              loading="lazy"
              alt=""
              width={(isMobile === true && 51) || 71}
              height={(isMobile === true && 45) || 65}
            />
          </CardOverflow>
          <CardContent>
            <Typography fontSize="20px" fontWeight="bold" color="white">
              +{value.experienceYear}
            </Typography>
            <Typography level="body-sm" color="white">
              Years Experience
            </Typography>
          </CardContent>
          <CardOverflow
            variant="soft"
            sx={{
              px: 0.2,
              writingMode: "vertical-rl",
              textAlign: "center",
              fontSize: "xs",
              fontWeight: "xl",
              letterSpacing: "1px",
              textTransform: "uppercase",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {value.experienceName}
          </CardOverflow>
        </Card>
      ))}
    </Stack>
  );
}
