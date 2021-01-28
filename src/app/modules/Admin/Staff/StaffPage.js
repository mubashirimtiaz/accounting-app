import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import Role from "./Role";
import User from "./User";
import { LayoutSplashScreen, ContentRoute } from "../../../../_metronic/layout";

export default function StaffPage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from Staff root URL to /user */
          <Redirect exact={true} from="/staff" to="/staff/user" />
        }
        <ContentRoute path="/staff/user" component={User} />
        <ContentRoute path="/staff/role" component={Role} />
      </Switch>
    </Suspense>
  );
}
