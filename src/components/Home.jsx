import styled from "styled-components";
import DisneyChannel from "./DisneyChannel";
import DisneyOriginals from "./DisneyOriginals";
import ImageCarousel from "./ImageCarousel";
import Recommends from "./Recommends";
import TrendingNow from "./Trending";
import Viewers from "./Viewers";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import db from "../DB/firebase";
import { setMovies } from "../features/User/movie/MovieSlice";
import { SelectUsername } from "../features/User/UserSlice";

export default function Home(props) {
  const dispatch = useDispatch();
  const userName = useSelector(SelectUsername);
  let recommends = [];
  let disneyChannel = [];
  let disneyOriginals = [];
  let trendingNow = [];

  useEffect(() => {
    console.log(db);
    db.collections("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        console.log(recommends);
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;
          case "new":
            disneyChannel = [...disneyChannel, { id: doc.id, ...doc.data() }];
            break;
          case "original":
            disneyOriginals = [
              ...disneyOriginals,
              { id: doc.id, ...doc.data() },
            ];
            break;
          case "trending":
            trendingNow = [...trendingNow, { id: doc.id, ...doc.data() }];
            break;
        }
      });
    });
    dispatch(
      setMovies({
        recommend: recommends,
        newDisney: disneyChannel,
        original: disneyChannel,
        trending: trendingNow,
      })
    );
  }, [userName]);
  return (
    <Container>
      <ImageCarousel />
      <Viewers />
      <Recommends />
      <DisneyChannel />
      <DisneyOriginals />
      <TrendingNow />
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
