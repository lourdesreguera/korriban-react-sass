import "./App.scss";
import HeaderMobile from "./components/HeaderMobile";
import MediaQuery from "react-responsive";
import HeaderDesk from "./components/HeaderDesk";
import Hero from "./components/Hero";
import Music from "./components/Music";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";

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
      <Gallery />
      <Shop />
      <Contact />
    </div>
  );
}

export default App;
