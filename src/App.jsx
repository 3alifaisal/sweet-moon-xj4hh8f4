import Home from "./components/Home";
import Stocks from "./components/Stocks";
import Movies from "./components/Movies";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="main">
        <h1>App Component</h1>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/stocks">
            <Stocks />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route>
            <h1>No page found</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
