import React, { Suspense, lazy } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import { BuilderPage } from "./pages/BuilderPage";
// import { MyPage } from "./pages/MyPage";
import { DashboardPage } from "./pages/DashboardPage";
import Product_and_Service from "./pages/Admin_Pages/Product_and_Service";
import Customer from "./pages/Admin_Pages/Customer";
import Vendor from "./pages/Admin_Pages/Vendor";
import Proposal from "./pages/Admin_Pages/Proposal";
import Goal from "./pages/Admin_Pages/Goal";
import Assets from "./pages/Admin_Pages/Assets";
import CompanySetting from "./pages/Admin_Pages/CompanySetting";

const GoogleMaterialPage = lazy(() =>
  import("./modules/GoogleMaterialExamples/GoogleMaterialPage")
);
const ReactBootstrapPage = lazy(() =>
  import("./modules/ReactBootstrapExamples/ReactBootstrapPage")
);
const ECommercePage = lazy(() =>
  import("./modules/ECommerce/pages/eCommercePage")
);
const StaffPage = lazy(() => import("./modules/Admin/Staff/StaffPage"));

const BankingPage = lazy(() => import("./modules/Admin/Banking/BankingPage"));

const IncomePage = lazy(() => import("./modules/Admin/Income/IncomePage"));

const ExpensePage = lazy(() => import("./modules/Admin/Expense/ExpensePage"));

const ReportPage = lazy(() => import("./modules/Admin/Report/ReportPage"));

const ConstantPage = lazy(() =>
  import("./modules/Admin/Constant/ConstantPage")
);

export default function BasePage() {
  // useEffect(() => {
  //   console.log('Base page');
  // }, []) // [] - is required if you need only one call
  // https://reactjs.org/docs/hooks-reference.html#useeffect

  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from root URL to /dashboard. */
          <Redirect exact from="/" to="/dashboard" />
        }
        <ContentRoute path="/dashboard" component={DashboardPage} />
        <ContentRoute path="/builder" component={BuilderPage} />
        <ContentRoute path="/productservice" component={Product_and_Service} />
        <ContentRoute path="/customer" component={Customer} />
        <ContentRoute path="/vendor" component={Vendor} />
        <ContentRoute path="/proposal" component={Proposal} />
        <ContentRoute path="/goal" component={Goal} />
        <ContentRoute path="/assets" component={Assets} />
        <ContentRoute path="/companysetting" component={CompanySetting} />
        <Route path="/google-material" component={GoogleMaterialPage} />
        <Route path="/react-bootstrap" component={ReactBootstrapPage} />
        <Route path="/e-commerce" component={ECommercePage} />
        <Route path="/staff" component={StaffPage} />
        <Route path="/banking" component={BankingPage} />
        <Route path="/income" component={IncomePage} />
        <Route path="/expense" component={ExpensePage} />
        <Route path="/report" component={ReportPage} />
        <Route path="/constant" component={ConstantPage} />
        <Redirect to="/error/error-v1" />
      </Switch>
    </Suspense>
  );
}
