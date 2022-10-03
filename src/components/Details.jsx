import styled from "styled-components";

export default function Details(props) {
  return (
    <Container>
      <Background>
        <img src="/images/no-time-to-die-poster.jsg" alt />
      </Background>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  min-height: calc(100vh -250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw +25px);
`;

const Background = styled.div`
  left: 0;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;
  img {
    width: 100vw;
    height: 100vh;

    @media (max-width: 768px) {
      width: initial;
    }
  }
`;
