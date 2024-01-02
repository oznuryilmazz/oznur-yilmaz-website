import { Icon } from "@iconify/react";
import {
  Box,
  Card,
  CardCover,
  Chip,
  IconButton,
  Link,
  Typography,
} from "@mui/joy";
import { Container, Grid, Stack, useMediaQuery } from "@mui/material";

const blogList = [
  {
    image: "./img/blog/blog-1.jpg",
    companyName: "Mun Pilates",
    link: "https://munpilates.com",
    designedWith: "Wordpress",
    tag: "New",
  },
  {
    image: "./img/blog/blog-2.jpg",
    companyName: "Peoples Coffee",
    link: "https://peoplescoffee.shop/",
    designedWith: "PHP",
    tag: "New",
  },
  {
    image: "./img/blog/blog-3.jpg",
    companyName: "Val Holding",
    link: "https://oznuryilmaz.com/val-holding/",
    designedWith: "Wordpress , Elementor",
    tag: "New",
  },
];

export default function Blog() {
  const isMobile = useMediaQuery("(max-width: 1000px)");

  return (
    <Container
      maxWidth="fluid"
      sx={{
        backgroundColor: "#050505",
        height: (isMobile === true && "100%") || "110vh",
        display: "flex",
        alignItems: "center",
        pt: 15,
        pb: 15,
      }}
    >
      <Container maxWidth="lg">
        <Stack justifyContent="center" textAlign="center" spacing={1}>
          <Typography
            level="body-sm"
            sx={{ color: "#1976d2", fontWeight: "bold" }}
          >
            BLOGS & NEWS
          </Typography>
          <Typography level="h1" sx={{ color: "white", fontWeight: "bold" }}>
            Latest
            <br /> News & Blog
          </Typography>
        </Stack>
        <Grid
          container
          direction={(isMobile === true && "column") || "row"}
          justifyContent="space-between"
          alignItems="center"
          spacing={3}
          mt={5}
        >
          {blogList &&
            blogList.map((value, index) => (
              <Grid item xs={(isMobile === true && 12) || 4} key={index}>
                <Card
                  variant="plain"
                  sx={{ width: "100%", bgcolor: "initial", p: 0 }}
                >
                  <Box sx={{ position: "relative" }}>
                    <img
                      src={value.image}
                      loading="lazy"
                      alt="Yosemite by Casey Horner"
                      width="100%"
                    />
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
                              href="#dribbble-shot"
                              overlay
                              underline="none"
                              sx={{
                                color: "#fff",
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                                display: "block",
                              }}
                            >
                              Yosemite
                            </Link>
                          </Typography>
                          <IconButton
                            size="sm"
                            variant="solid"
                            color="neutral"
                            sx={{ bgcolor: "rgba(0 0 0 / 0.2)" }}
                          >
                            <Icon icon="mdi:heart" />
                          </IconButton>
                        </Box>
                      </div>
                    </CardCover>
                  </Box>
                  <Stack spacing={2}>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
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
                        Featured
                      </Chip>
                      <Typography
                        sx={{
                          fontSize: "sm",
                          fontWeight: "md",
                          color: "white",
                        }}
                      >
                        10/17/2023
                      </Typography>
                    </Stack>
                    <Typography level="h3" sx={{ color: "white" }}>
                      What is new about React?
                    </Typography>
                    <Typography
                      level="body-md"
                      sx={{
                        color: "#1976d2",
                        textTransform: "uppercase",
                        display: "flex",
                        alignItems: "center",
                        fontWeight: "bold",
                      }}
                    >
                      Read More
                      <Icon icon="mdi:plus" />
                    </Typography>
                  </Stack>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Container>
    </Container>
  );
}
