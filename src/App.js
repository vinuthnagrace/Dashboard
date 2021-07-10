import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Topbar from "./components/Topbar/Topbar"
import SlideBar from "./components/Slidebar/SlideBar"
import Home from "./pages/home/Home.jsx"
import MaleInfo from "./pages/male/MaleInfo.jsx"
import Female from "./pages/female/Female";

import './App.css';

function App() {
  return (
    <Router>
    <div>
    <Topbar />
       <div className="container">
        <SlideBar />
    <Switch>
    <Route exact path="/">
            <Home />
          </Route>
          <Route path="/male">
          <MaleInfo />
                     </Route>
          <Route path="/female">
          <Female />
          </Route>
      </Switch>
      </div>
      </div>
      </Router>
  );
}

export default App;
