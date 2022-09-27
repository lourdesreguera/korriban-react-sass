import "./App.scss";
import MediaQuery from "react-responsive";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ShopPage from "./pages/ShopPage";
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
        <Routes>
          <Route
            index
            element={
              <>
                <Hero />
                <MediaQuery minWidth={576}>
                  <Gallery />
                </MediaQuery>
                <Music />
                <Shop />
                <Contact />
              </>
            }
          />
          <Route
            path="/home"
            element={
              <>
                <Hero />
                <MediaQuery minWidth={576}>
                  <Gallery />
                </MediaQuery>
                <Music />
                <Shop />
                <Contact />
              </>
            }
          />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
