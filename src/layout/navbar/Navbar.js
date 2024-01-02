import { Container } from "@mui/material";
import { Navbar } from "react-bootstrap";
import SocialMediaButtons from "../../component/SocialMediaButtons";

export default function Header() {
  return (
    <Navbar
      expand={false}
      fixed="top"
      style={{
        backgroundColor: "transparent",
        height: "10vh",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Navbar.Brand
          href="../"
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: "x-large",
          }}
        >
          ÖZNUR YILMAZ
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="offcanvasNavbar-expand-sm"
          style={{ backgroundColor: "transparent", border: 0 }}
        >
          <SocialMediaButtons color="white" />
        </Navbar.Toggle>
      </Container>
    </Navbar>
  );
}
