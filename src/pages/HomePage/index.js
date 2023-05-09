import { useContext, useEffect } from "react";
import WalletContext from "../../contexts/WalletContext";
import { useHistory } from "react-router-dom";
import { UserProvider } from "../../contexts/UserContext";
import { CompanyProvider } from "../../contexts/CompanyContext";
import { TeamMembersProvider } from "../../contexts/TeamMembersContext";
import { ProductCatalogueProvider } from "../../contexts/ProductCatalogueContext";
import { SellersProvider } from "../../contexts/SellersContext";
import { InventoryProvider } from "../../contexts/InventoryContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OnboardingPage from "../OnboardingPage";
import ConsolePage from "../ConsolePage";
import PageNotFound from "../PageNotFound";

const HomePage = () => {
  const { loading, currentAccount } = useContext(WalletContext);

  const history = useHistory();

  useEffect(() => {
    if (!currentAccount && loading === false) {
      history.replace("/");
    }
  }, [currentAccount, history, loading]);

  return (
    <UserProvider>
      <CompanyProvider>
        <TeamMembersProvider>
          <ProductCatalogueProvider>
            <SellersProvider>
              <InventoryProvider>
                <Router>
                  <Switch>
                    <Route path="/onboarding" exact>
                      <OnboardingPage />
                    </Route>
                    <Route path="/">
                      <ConsolePage />
                    </Route>
                  </Switch>
                </Router>
              </InventoryProvider>
            </SellersProvider>
          </ProductCatalogueProvider>
        </TeamMembersProvider>
      </CompanyProvider>
    </UserProvider>
  );
};

export default HomePage;
