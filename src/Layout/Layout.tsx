import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Container } from "@mui/material";


type Props = {
  children: JSX.Element | JSX.Element[];
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Container maxWidth="sm">{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
