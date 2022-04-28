import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { ParallaxProvider } from "react-scroll-parallax";

import App from "../App";
import MintConnect from "../sections/MintConnect";
import store from "../redux/store";

const Routing = () => {
  return (
    <Router>
      <Provider store={store}>
        <ParallaxProvider>
          <Routes>
            <Route exact path="/" element={<App />} />
            <Route exact path="/mint" element={<MintConnect />} />
          </Routes>
        </ParallaxProvider>
      </Provider>
    </Router>
  );
};

export default Routing;
