import { Icon } from "@iconify/react";
import {
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  Box,
  Card,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemDecorator,
} from "@mui/joy";
import experienceListPart from "../../data/experienceListPart";

export default function ExperienceTimelinePart() {
  const isMobile = useMediaQuery("(max-width: 1000px)");
  return (
    <Container
      maxWidth="fluid"
      sx={{ backgroundColor: "#0D0D0D", pt: 15, pb: 15 }}
    >
      <Container maxWidth="lg">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          mb={5}
        >
          <Typography
            variant="h4"
            gutterBottom
            color="white"
            textAlign="center"
            sx={{
              background:
                "linear-gradient(primary,primary) left 0 bottom 10% /100% 20% no-repeat",
            }}
          ></Typography>
          <Stack spacing={2}>
            <Typography variant="body1" fontWeight="bold" color="primary">
              EXPERIENCE
            </Typography>
            <Typography
              variant={(isMobile === true && "h5") || "h4"}
              fontWeight="bold"
              color="white"
            >
              Lets Explore My
              <br /> <b style={{ color: "primary" }}>Experience</b>
            </Typography>
          </Stack>
        </Stack>
        <Box
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(min(100%, 50%), 1fr))",
            gap: 2,
          }}
        >
          {experienceListPart.map((value, index) => {
            return (
              <Card
                size="lg"
                key={index}
                variant="outlined"
                sx={{ backgroundColor: "transparent" }}
              >
                <Chip size="sm" variant="outlined" color="neutral">
                  {value.location}
                </Chip>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography
                    level="h2"
                    fontWeight="bold"
                    sx={{ color: "white" }}
                  >
                    {value.position}
                    <Typography level="h3" sx={{ color: "white" }}>
                      {value.company}
                    </Typography>
                  </Typography>
                  {value.date}
                </Stack>
                <Divider inset="none" />
                <List
                  size="sm"
                  sx={{ mx: "calc(-1 * var(--ListItem-paddingX))" }}
                >
                  {value.workDetail.map((detail, index) => {
                    return (
                      <ListItem key={index} sx={{ color: "white" }}>
                        <ListItemDecorator>
                          <Icon icon="system-uicons:check" />
                        </ListItemDecorator>
                        {detail.description}
                      </ListItem>
                    );
                  })}
                </List>
              </Card>
            );
          })}
        </Box>
        <Stack justifyContent="center" alignItems="center" width="100%" mt={10}>
          <Button
            variant="contained"
            size="large"
            component={Link}
            to={"../experience"}
            sx={{
              backgroundColor: "primary",
              color: "black",
              textTransform: "capitalize",
              borderRadius: 2,
              width: 150,
            }}
          >
            See More
          </Button>
        </Stack>
      </Container>
    </Container>
  );
}
