import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Recommends(props) {
  return (
    <Container>
      <h3>Recommended</h3>
      <Content>
        <Wrapper>
          <Link to="/">
            <img src="/images/no-time-to-die-poster.jpg" alt="007 poster" />
          </Link>
        </Wrapper>
        <Wrapper>
          <Link to="/">
            <img src="/images/no-time-to-die-poster.jpg" alt="007 poster" />
          </Link>
        </Wrapper>
        <Wrapper>
          <Link to="/">
            <img src="/images/no-time-to-die-poster.jpg" alt="007 poster" />
          </Link>
        </Wrapper>
        <Wrapper>
          <Link to="/">
            <img src="/images/no-time-to-die-poster.jpg" alt="007 poster" />
          </Link>
        </Wrapper>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 0 26px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(2, 1fr));
  }
`;

const Wrapper = styled.div`
  border-radius: 10px;
  box-shadow: #f9f9f9;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: 3px solid #545454;

  img {
    inset: 0px;
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
    opacity: 1;
    transition: opacity 500ms ease-in-out 0s;
    z-index: 1;
  }

  &:hover {
    box-shadow: #545454;
    transform: scale(1.03);
    border-color: #f9f9f9;
  }
`;
