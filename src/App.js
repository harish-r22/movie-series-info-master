import React from "react";
import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import NavBar from "./component/layout/NavBar";
import Fotter from "./component/layout/fotter";
import Landing from "./component/Home/Landing";
import store from "./store";
import { Provider } from "react-redux";
import Movie from "./component/Home/movie";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div style={{overflowX:"hidden",height:"100vh",display:"flex",flexDirection:"column"}}>
          <NavBar></NavBar>
          <Route exact path="/" component={Landing} />
          <Route exact path="/movie/:id" component={Movie} />
          <Route exact path="/series/:id" component={Movie} />
          <Fotter></Fotter>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
