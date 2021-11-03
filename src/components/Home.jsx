import styled from "styled-components";
import ImageCarousel from "./ImageCarousel";
import Recommends from "./Recommends";
import Viewers from "./Viewers";

export default function Home(props) {
  return (
    <Container>
      <ImageCarousel />
      <Viewers />
      <Recommends />
    </Container>
  );
}

const Container = styled.main`
  position: relative;
  min-height: calc(100vh -250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center no-repeat fixed;
    position: absolute;
    inset: 0px;
    content: "";
    opacity: 1;
    z-index: -1;
  }
`;
