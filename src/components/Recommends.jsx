import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRecommend } from "../features/User/movie/MovieSlice";

export default function Recommends(props) {
  const movies = useSelector(selectRecommend);
  return (
    <Container>
      <h2>Recommended for you</h2>
      <Content>
        {movies &&
          movies.map((movie, key) => (
            <Wrapper key={key}>
              {movie.id}
              <Link to={`/detial/${movie.id}`}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </Wrapper>
          ))}
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
