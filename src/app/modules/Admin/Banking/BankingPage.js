import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import Account from "./Account";
import Transfer from "./Transfer";
import { LayoutSplashScreen, ContentRoute } from "../../../../_metronic/layout";

export default function BankingPage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from Banking root URL to /account */
          <Redirect exact={true} from="/banking" to="/banking/account" />
        }
        <ContentRoute path="/banking/account" component={Account} />
        <ContentRoute path="/banking/transfer" component={Transfer} />
      </Switch>
    </Suspense>
  );
}
