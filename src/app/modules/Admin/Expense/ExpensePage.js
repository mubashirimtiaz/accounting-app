import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import Bill from "./Bill";
import Payment from "./Payment";
import DebitNote from "./DebitNote";
import { LayoutSplashScreen, ContentRoute } from "../../../../_metronic/layout";

export default function ExpensePage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from Banking root URL to /account */
          <Redirect exact={true} from="/income" to="/expense/invoice" />
        }
        <ContentRoute path="/expense/bill" component={Bill} />
        <ContentRoute path="/expense/payment" component={Payment} />
        <ContentRoute path="/expense/debitnote" component={DebitNote} />
      </Switch>
    </Suspense>
  );
}
