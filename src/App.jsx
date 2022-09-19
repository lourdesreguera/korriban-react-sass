import "./App.scss";
import HeaderMobile from "./components/HeaderMobile";
import MediaQuery from "react-responsive";
import HeaderDesk from "./components/HeaderDesk";
import Hero from "./components/Hero";
import Music from "./components/Music";
import Shop from "./components/Shop";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app">
      <MediaQuery maxWidth={576}>
        <HeaderMobile />
      </MediaQuery>
      <MediaQuery minWidth={576}>
        <HeaderDesk />
      </MediaQuery>
      <Hero />
      <Music />
      <Shop />
      <Contact />
    </div>
  );
}

export default App;
