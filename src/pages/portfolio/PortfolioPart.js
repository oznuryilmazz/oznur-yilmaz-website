import { Icon } from "@iconify/react";
import { AspectRatio, Box, Card, CardCover, Chip, IconButton } from "@mui/joy";
import {
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import portfolioList from "../../data/portfolioList";

export default function PortfolioPart() {
  const isMobile = useMediaQuery("(max-width: 1000px)");
  return (
    <Container
      maxWidth="fluid"
      sx={{
        backgroundImage: "url(./img/background-middle.jpg)",
        pt: 15,
        pb: 15,
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2} textAlign="center">
          <Typography variant="body1" fontWeight="bold" color="primary">
            RECENT WORKS
          </Typography>
          <Typography variant="h4" fontWeight="bold" color="white">
            Completed Works
            <br /> Of Mine
          </Typography>
        </Stack>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          spacing={3}
          mt={5}
        >
          {portfolioList.map((value, index) => (
            <Grid item xs={(isMobile === true && 12) || 6} key={index}>
              <Card
                variant="plain"
                sx={{ width: "100%", bgcolor: "initial", p: 0 }}
              >
                <Box sx={{ position: "relative" }}>
                  <AspectRatio ratio="4/3">
                    <figure>
                      <img
                        src={value.image}
                        loading="lazy"
                        alt={value.companyName}
                      />
                    </figure>
                  </AspectRatio>
                  <CardCover
                    className="gradient-cover"
                    sx={{
                      "&:hover, &:focus-within": {
                        opacity: 1,
                      },
                      opacity: 0,
                      transition: "0.1s ease-in",
                      background:
                        "linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)",
                    }}
                  >
                    {/* The first box acts as a container that inherits style from the CardCover */}
                    <div>
                      <Box
                        sx={{
                          p: 2,
                          display: "flex",
                          alignItems: "center",
                          gap: 1.5,
                          flexGrow: 1,
                          alignSelf: "flex-end",
                        }}
                      >
                        <Typography level="h2" noWrap sx={{ fontSize: "lg" }}>
                          <Link
                            target="_blank"
                            to={value.link}
                            style={{
                              color: "#fff",
                              textOverflow: "ellipsis",
                              overflow: "hidden",
                              display: "block",
                              textDecoration: "none",
                            }}
                          >
                            Go to {value.companyName} Website
                          </Link>
                        </Typography>
                        <IconButton
                          size="sm"
                          variant="solid"
                          color="neutral"
                          component={Link}
                          target="_blank"
                          to={value.link}
                          sx={{ ml: "auto", bgcolor: "rgba(0 0 0 / 0.2)" }}
                        >
                          <Icon icon="akar-icons:link-out" />
                        </IconButton>
                      </Box>
                    </div>
                  </CardCover>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    sx={{ fontSize: "sm", fontWeight: "md", color: "white" }}
                  >
                    Designed By {value.designedWith}
                  </Typography>
                  <Chip
                    variant="outlined"
                    color="neutral"
                    size="sm"
                    sx={{
                      borderRadius: "sm",
                      py: 0.25,
                      px: 0.5,
                    }}
                  >
                    {value.tag}
                  </Chip>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Stack justifyContent="center" alignItems="center" width="100%" mt={10}>
          <Button
            variant="contained"
            size="large"
            component={Link}
            to={"../portfolio"}
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
