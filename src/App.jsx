import "./App.scss";
import MediaQuery from "react-responsive";
import React, { Suspense } from "react";
const Gallery = React.lazy(() => import("./components/Gallery"));
const Music = React.lazy(() => import("./components/Music"));
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
        <MediaQuery minWidth={576}>
          <Gallery />
        </MediaQuery>
        <Music />
        
        <Shop />
        <Contact />
      </Suspense>
    </div>
  );
}

export default App;
