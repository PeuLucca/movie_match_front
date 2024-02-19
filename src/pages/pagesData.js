// Components
import NavBar from "../components/Navbar"
import Footer from "../components/Footer"

// Screens
import Home from "../screens/Home"
import NewMovie from "../screens/NewMovie"
import SignIn from "../screens/SignIn"
import SignUp from "../screens/SignUp"

const pagesData = [
  {
    path: "signup",
    element: <SignUp />,
    title: "signup"
  },
  {
    path: "signin",
    element: <SignIn />,
    title: "signin"
  },
  {
    path: "",
    element: (
        <>
            <NavBar />
            <Home />
            <Footer />
        </>
    ),
    title: "home"
  },
  {
    path: "newmovie",
    element: (
        <>
            <NavBar />
            <NewMovie />
            <Footer />
        </>
    ),
    title: "newmovie"
  }
];

export default pagesData;