import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import { WalletProvider } from "./contexts/WalletContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <WalletProvider>
        <Router>
          <Switch>
            <Route path="/" exact>
              <LandingPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </WalletProvider>
    </div>
  );
}

export default App;
