import WithAuthentication from './WithAuthentication';

// Components
import NavBar from "../components/Navbar"
import Footer from "../components/Footer"

// Screens
import Home from "../screens/Home"
import NewMovie from "../screens/NewMovie"
import SignIn from "../screens/SignIn"
import SignUp from "../screens/SignUp"

const isLoggedIn = !!localStorage.getItem("token");

const pagesData = [
  {
    path: "signup",
    element: (
      <WithAuthentication
        isLoggedIn={!isLoggedIn}
        Component={() => (
          <SignUp />
        )}
        redirectPath="/home"
      />
    ),
    title: "signup"
  },
  {
    path: "signin",
    element: (
      <WithAuthentication
        isLoggedIn={!isLoggedIn}
        Component={() => (
          <SignIn />
        )}
        redirectPath="/home"
      />
    ),
    title: "signin"
  },
  {
    path: "home",
    element: (
      <WithAuthentication
        isLoggedIn={isLoggedIn}
        Component={() => (
          <>
            <NavBar />
            <Home />
            <Footer />
          </>
        )}
        redirectPath="/signin"
      />
    ),
    title: "home"
  },
  {
    path: "/",
    element: (
      <WithAuthentication
        isLoggedIn={isLoggedIn}
        Component={() => (
          <>
            <NavBar />
            <Home />
            <Footer />
          </>
        )}
        redirectPath="/signin"
      />
    ),
    title: "home"
  },
  {
    path: "newmovie",
    element: (
      <WithAuthentication
        isLoggedIn={isLoggedIn}
        Component={() => (
          <>
            <NavBar />
            <NewMovie />
            <Footer />
          </>
        )}
        redirectPath="/signin"
      />
    ),
    title: "newmovie"
  }
];

export default pagesData;