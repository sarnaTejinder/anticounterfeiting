import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import { WalletProvider } from "./contexts/WalletContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import { ContractProvider } from "./contexts/ContractContext";

function App() {
  return (
    <div className="App">
      <WalletProvider>
        <ContractProvider>
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
        </ContractProvider>
      </WalletProvider>
    </div>
  );
}

export default App;
