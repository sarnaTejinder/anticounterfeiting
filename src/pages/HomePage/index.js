import { useContext, useEffect, useState } from "react";
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
import ProductPage from "../ProductPage";

const HomePage = () => {
  const { loading, currentAccount } = useContext(WalletContext);
  const [initialLoading, setInitialLoading] = useState(true);

  const history = useHistory();

  useEffect(() => {
    if (!loading) setInitialLoading(loading);
  }, [loading]);

  useEffect(() => {
    if (!currentAccount && initialLoading === false) {
      history.replace("/");
    }
  }, [currentAccount, history, initialLoading]);

  if (initialLoading) return null;

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
                    <Route path="/product/:id" component={ProductPage}></Route>
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
