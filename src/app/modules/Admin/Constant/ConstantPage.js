import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import Taxes from "./Taxes";
import Unit from "./Unit";
import Category from "./Category";
import CustomField from "./CustomField";
import { LayoutSplashScreen, ContentRoute } from "../../../../_metronic/layout";

export default function ConstantPage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from Banking root URL to /account */
          <Redirect exact={true} from="/constant" to="/constant/taxes" />
        }
        <ContentRoute path="/constant/Taxes" component={Taxes} />
        <ContentRoute path="/constant/unit" component={Unit} />
        <ContentRoute path="/constant/category" component={Category} />
        <ContentRoute path="/constant/customfield" component={CustomField} />
      </Switch>
    </Suspense>
  );
}
