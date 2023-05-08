import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { WalletProvider } from "./contexts/WalletContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import { UserProvider } from "./contexts/UserContext";
import { CompanyProvider } from "./contexts/CompanyContext";
import { TeamMembersProvider } from "./contexts/TeamMembersContext";

function App() {
  return (
    <div className="App">
      <WalletProvider>
        <UserProvider>
          <CompanyProvider>
            <TeamMembersProvider>
              <Router>
                <Switch>
                  <Route path="/home">
                    <LandingPage />
                  </Route>
                  <Route path="/">
                    <HomePage />
                  </Route>
                </Switch>
              </Router>
            </TeamMembersProvider>
          </CompanyProvider>
        </UserProvider>
      </WalletProvider>
    </div>
  );
}

export default App;
