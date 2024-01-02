import { Outlet } from "react-router-dom";
import Header from "./navbar/Navbar";
import { styled } from "@mui/material/styles";
import Footer from "./footer/Footer";
// ---------------------------------------------------------------------

const RootStyle = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
});

const MainStyle = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
}));

export default function WebsiteLayout() {
  return (
    <RootStyle>
      <MainStyle>
        <Header />
        <Outlet />
        <Footer />
      </MainStyle>
    </RootStyle>
  );
}
