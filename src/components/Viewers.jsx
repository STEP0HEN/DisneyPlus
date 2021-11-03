import styled from "styled-components";

export default function Viewers(props) {
  return (
    <Container>
      <Wrapper>
        <img src="/images/viewers-disney.png" alt="disney icon" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/disney.mp4" type="video/mp4" />
        </video>
      </Wrapper>
      <Wrapper>
        <img src="/images/viewers-pixar.png" alt="disney icon" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/marvel.mp4" type="video/mp4" />
        </video>
      </Wrapper>
      <Wrapper>
        <img src="/images/viewers-marvel.png" alt="disney icon" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/national-geographic.mp4" type="video/mp4" />
        </video>
      </Wrapper>
      <Wrapper>
        <img src="/images/viewers-starwars.png" alt="disney icon" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/pixar.mp4" type="video/mp4" />
        </video>
      </Wrapper>
      <Wrapper>
        <img src="/images/viewers-national.png" alt="disney icon" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/star-wars.mp4" type="video/mp4" />
        </video>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrapper = styled.div`
  padding-top: 56%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: 3px solid #f9f9f9;

  img {
    inset: 0px;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    z-index: 1;
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    opacity: 0;
    z-index: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: #f9f9f9;

    video {
      opacity: 1;
    }
  }
`;
