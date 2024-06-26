import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./layouts/Layout";

import Page404 from "./pages/Page404";

import ContextProvider from "./context/Context";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import MoreInfo from "./pages/MoreInfo";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/employee" element={<MoreInfo />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/favorites/employee" element={<MoreInfo />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
