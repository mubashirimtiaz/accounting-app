import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import Transaction from "./Transaction";
import AccountStatement from "./AccountStatement";
import IncomeSummary from "./IncomeSummary";
import ExpenseSummary from "./ExpenseSummary";
import IncomeVsExpense from "./IncomeVsExpense";
import TaxSummary from "./TaxSummary";
import Profit_and_Loss from "./Profit_and_Loss";
import InvoiceSummary from "./InvoiceSummary";
import BillSummary from "./BillSummary";
import { LayoutSplashScreen, ContentRoute } from "../../../../_metronic/layout";

export default function ReportPage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from Banking root URL to /account */
          <Redirect exact={true} from="/report" to="/report/transaction" />
        }
        <ContentRoute path="/report/transaction" component={Transaction} />
        <ContentRoute
          path="/report/accountstatement"
          component={AccountStatement}
        />
        <ContentRoute path="/report/incomesummary" component={IncomeSummary} />
        <ContentRoute
          path="/report/expensesummary"
          component={ExpenseSummary}
        />
        <ContentRoute
          path="/report/incomevsexpense"
          component={IncomeVsExpense}
        />
        <ContentRoute path="/report/taxsummary" component={TaxSummary} />
        <ContentRoute
          path="/report/profitandloss"
          component={Profit_and_Loss}
        />
        <ContentRoute
          path="/report/invoicesummary"
          component={InvoiceSummary}
        />
        <ContentRoute path="/report/billsummary" component={BillSummary} />
      </Switch>
    </Suspense>
  );
}
