import { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { auth, provider } from "../DB/firebase";
import {
  SelectUsername,
  SelectUserEmail,
  SelectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../features/User/UserSlice";

export default function Header(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const userName = useSelector(SelectUsername);
  const userPhoto = useSelector(SelectUserPhoto);
  const userEmail = useSelector(SelectUserEmail);

  useEffect(
    () =>
      auth.onAuthStateChanged(async (user) => {
        user && setUser(user) && history.push("/home");
      }),
    [userName]
  );

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  const handleGoogleAuth = () => {
    !userName
      ? auth
          .signInWithPopup(provider)
          .then((result) => {
            console.log(result);
            setUser(result.user);
          })
          .catch((error) => console.log(error.message))
      : userName &&
        auth
          .signOut()
          .then(() => {
            dispatch(setSignOutState());
            history.push("/");
          })
          .catch((error) => error.message);
  };
  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="disney plus logo" />
      </Logo>
      {!userName ? (
        <Login onClick={handleGoogleAuth}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <a href="/home">
              <img src="/images/home-icon.svg" alt="home icon" />
              <span>HOME</span>
            </a>
            <a href="no-link">
              <img src="/images/search-icon.svg" alt="search icon" />
              <span>SEARCH</span>
            </a>
            <a href="no-link">
              <img src="/images/watchlist-icon.svg" alt="plus icon" />
              <span>WATCHLIST</span>
            </a>
            <a href="no-link">
              <img src="/images/original-icon.svg" alt="star icon" />
              <span>ORIGINALS</span>
            </a>
            <a href="no-link">
              <img src="/images/movie-icon.svg" alt="movie icon" />
              <span>MOVIES</span>
            </a>
            <a href="no-link">
              <img src="/images/series-icon.svg" alt="tv icon" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <SignOut>
            <UserImage src={userPhoto} alt={userName} />
            <DropDown>
              <span onClick={handleGoogleAuth}>Sign out </span>
            </DropDown>
          </SignOut>
        </>
      )}
    </Nav>
  );
}

const Nav = styled.nav`
  position: fixed;
  height: 70px;
  top: 0;
  left: 0;
  right: 0;
  right: 0;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  font-size: 0;
  min-height: 70px;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      min-height: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      color: rgba(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgba(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Login = styled.a`
  background-color: #000;
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: solid 1px #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const UserImage = styled.img`
  height: 100%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: #131313;
  border: 1px solid #979797;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  ${UserImage} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;
