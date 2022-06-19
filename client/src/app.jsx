import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import Chat from "./pages/chat";
import Community from "./pages/community";
import Home from "./pages/home";
import Schedule from "./pages/schedule";
import Footer from "./components/footer";
import Landing from "./pages/landing";
import "./index.css";
import Dropdown from "./components/dropdown";
import axios from "axios";
import { connect } from "react-redux";
import action from "./redux/action";
import Mypage from "./pages/mypage";

const mapStateToProps = (state) => {
  return {
    isLogin: state.isLogin,
    isOAuthLogin: state.isOAuthLogin,
    userId: state.userId,
    token: state.accessToken,
    isMobile: state.isMobile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUserId: (id) => dispatch(action.setUserId(id)),
    setIsLogin: (boolean) => dispatch(action.setIsLogin(boolean)),
    setIsOAuthLogin: (boolean) => dispatch(action.setIsOAuthLogin(boolean)),
    setEmail: (email) => dispatch(action.setEmail(email)),
    setNickname: (nickname) => dispatch(action.setNickname(nickname)),
    setAccessToken: (accessToken) =>
      dispatch(action.setAccessToken(accessToken)),
    setIsLoading: (boolean) => dispatch(action.setIsLoading(boolean)),
    setGatherings: (gathering) => dispatch(action.setGatherings(gathering)),
    setProfileImg: (profileImg) => dispatch(action.setProfileImg(profileImg)),
    setMobile: (boolean) => dispatch(action.setIsMobile(true)),
    setDesktop: (boolean) => dispatch(action.setIsMobile(false)),
  };
};

function App({
  isLogin,
  setIsLogin,
  isOAuthLogin,
  setIsOAuthLogin,
  setEmail,
  setNickname,
  setUserId,
  setAccessToken,
  userId,
  token,
  setIsLoading,
  setGatherings,
  profileImg,
  setProfileImg,
  setMobile,
  setDesktop,
  isMobile,
}) {
  const onLogin = (email, password) => {
    const data = {
      email,
      password,
    };
    axios
      .post(
        (process.env.REACT_APP_DEPLOYSERVER_URL ||
          process.env.REACT_APP_LOCALSERVER_URL) + "/auth/login",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
          HttpOnly: true,
          samesite: "Secure",
        },
      )
      .then((res) => {
        console.log(res);
        window.location.reload();
        onLoginSuccess(res);
      })
      .catch((err) => console.log(err));
  };

  const onLoginSuccess = (res) => {
    let { accessToken, email, nickname, _id, profileImg } = res.data;
    if (profileImg[0] !== "/") {
      profileImg = "/" + profileImg;
    }
    getGatherings();
    setIsLogin(true);
    setEmail(email);
    setNickname(nickname);
    setUserId(_id);
    setAccessToken(accessToken);
    setProfileImg(
      process.env.REACT_APP_DEPLOYSERVER_URL ||
        process.env.REACT_APP_LOCALSERVER_URL + profileImg,
    );
  };

  const guestRegister = () => {
    const data = {
      email: Math.random().toString(36).substring(2, 12),
      nickname: Math.random().toString(36).substring(2, 12),
      password: Math.random().toString(36).substring(2, 12),
    };
    axios
      .post(
        (process.env.REACT_APP_DEPLOYSERVER_URL ||
          process.env.REACT_APP_LOCALSERVER_URL) + "/auth/guest-login",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
          HttpOnly: true,
          samesite: "Secure",
        },
      )
      .then((result) => {
        console.log(result);
        onLoginSuccess(result);
      })
      .catch((err) => err);
  };

  const onLogout = (e) => {
    axios
      .get(
        process.env.REACT_APP_DEPLOYSERVER_URL ||
          process.env.REACT_APP_LOCALSERVER_URL + "/auth/logout",
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
          HttpOnly: true,
          samesite: "Secure",
        },
      )
      .then((res) => {
        setIsLogin(false);
      })
      .catch((err) => err);
  };

  const onSilentRefresh = () => {
    axios
      .post(
        process.env.REACT_APP_DEPLOYSERVER_URL ||
          process.env.REACT_APP_LOCALSERVER_URL + "/auth/refresh",
        { data: "refresh" },
        {
          withCredentials: true,
        },
      )
      .then((res) => {
        onLoginSuccess(res);
        if (res.data.oAuthId) {
          setIsOAuthLogin(true);
        }
      })
      .catch((err) => {
        setIsLogin(false);
      });
  };

  const getGatherings = () => {
    axios
      .get(
        process.env.REACT_APP_DEPLOYSERVER_URL ||
          process.env.REACT_APP_LOCALSERVER_URL + "/gatherings",
        {
          withCredentials: true,
        },
      )
      .then((data) => {
        data.data
          .filter((gathering) => gathering.author !== null)
          .forEach((gathering) => {
            if (gathering.author.profileImg[0] !== "/") {
              gathering.author.profileImg = "/" + gathering.author.profileImg;
            }
            gathering.author.profileImg =
              process.env.REACT_APP_DEPLOYSERVER_URL ||
              process.env.REACT_APP_LOCALSERVER_URL +
                gathering.author.profileImg;
          });
        setGatherings([...data.data]);
      })
      .catch((err) => err);
  };

  useEffect(() => {
    setIsLogin(false);
    onSilentRefresh();
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    setMenuToggle(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <Dropdown isOpen={isOpen} toggle={toggle} logout={onLogout} />
        {isLogin ? (
          <Navbar
            toggle={toggle}
            logout={onLogout}
            menuToggle={menuToggle}
            setMenuToggle={setMenuToggle}
          />
        ) : null}
        {isLogin ? (
          menuToggle ? null : (
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/schedule" component={Schedule} />
              <Route path="/chat" component={Chat} />
              <Route path="/community" component={Community} />
              <Route path="/mypage" component={Mypage} />
            </Switch>
          )
        ) : (
          <Landing
            onLogin={onLogin}
            guestRegisterLogin={guestRegister}
            onSilentRefresh={onSilentRefresh}
          />
        )}
        {menuToggle ? null : <Footer></Footer>}
      </BrowserRouter>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
