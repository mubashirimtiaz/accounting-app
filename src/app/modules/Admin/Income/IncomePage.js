import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import Invoice from "./Invoice";
import Revenue from "./Revenue";
import CreditNote from "./CreditNote";
import { LayoutSplashScreen, ContentRoute } from "../../../../_metronic/layout";

export default function BankingPage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from Banking root URL to /account */
          <Redirect exact={true} from="/income" to="/income/invoice" />
        }
        <ContentRoute path="/income/invoice" component={Invoice} />
        <ContentRoute path="/income/revenue" component={Revenue} />
        <ContentRoute path="/income/creditnote" component={CreditNote} />
      </Switch>
    </Suspense>
  );
}
