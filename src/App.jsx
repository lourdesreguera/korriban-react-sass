import "./App.scss";
// import HeaderMobile from "./components/HeaderMobile";
import MediaQuery from "react-responsive";
// import HeaderDesk from "./components/HeaderDesk";
// import Hero from "./components/Hero";
// import Music from "./components/Music";
// import Shop from "./components/Shop";
// import Contact from "./components/Contact";
import React, { Suspense } from "react";
// import Gallery from "./components/Gallery";
const Gallery = React.lazy(() => import("./components/Gallery"));
// const Music = React.lazy(() => import("./components/Music"));
const Contact = React.lazy(() => import("./components/Contact"));
const Shop = React.lazy(() => import("./components/Shop"));
const HeaderMobile = React.lazy(() => import("./components/HeaderMobile"));
const HeaderDesk = React.lazy(() => import("./components/HeaderDesk"));
const Hero = React.lazy(() => import("./components/Hero"));

function App() {
  return (
    <div className="app">
      <Suspense fallback={<div>Loading...</div>}>
        <MediaQuery maxWidth={576}>
          <HeaderMobile />
        </MediaQuery>
        <MediaQuery minWidth={576}>
          <HeaderDesk />
        </MediaQuery>
        <Hero />
        {/* <Music /> */}
        <MediaQuery minWidth={576}>
          <Gallery />
        </MediaQuery>
        <Shop />
        <Contact />
      </Suspense>
    </div>
  );
}

export default App;
