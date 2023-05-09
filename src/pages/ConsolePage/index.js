import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import { useHistory } from "react-router-dom";
import ConsoleView from "../../components/ConsoleView";

export default function ConsolePage() {
  const { onboardingStep, loading, user } = useContext(UserContext);
  const [initialLoading, setInitialLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    if (!loading) setInitialLoading(false);
  }, [loading]);

  useEffect(() => {
    if (onboardingStep !== null && !initialLoading && user)
      history.replace("/onboarding");
  }, [onboardingStep, initialLoading, user]);

  if (initialLoading) return null;

  return <ConsoleView />;
}
