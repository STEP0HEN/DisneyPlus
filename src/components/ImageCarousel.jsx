import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export default function ImageSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrapper>
        <a>
          <img src="/images/carousel-badging.jpg" alt="carousel images" />
        </a>
      </Wrapper>
      <Wrapper>
        <a>
          <img src="/images/carousel-badag.jpg" alt="carousel images" />
        </a>
      </Wrapper>
      <Wrapper>
        <a>
          <img src="/images/carousel-scale.jpg" alt="carousel images" />
        </a>
      </Wrapper>
      <Wrapper>
        <a>
          <img src="/images/carousel-scales.jpg" alt="carousel images" />
        </a>
      </Wrapper>
    </Carousel>
  );
}

const Carousel = styled(Slider)`
  margin-top: 20px;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0;
    }
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: #969eab;
    }
  }

  li.slick-active button:before {
    color: #ffffff;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -75px;
  }

  .slick-next {
    left: -75px;
  }
`;

const Wrapper = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;
