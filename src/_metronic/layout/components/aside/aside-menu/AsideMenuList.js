/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../_helpers";

export function AsideMenuList({ layoutProps }) {
  const location = useLocation();
  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
      ? ` ${!hasSubmenu && "menu-item-active"} menu-item-open `
      : "";
  };

  return (
    <>
      {/* begin::Menu Nav */}
      <ul className={`menu-nav  ${layoutProps.ulClasses}`}>
        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive("/dashboard", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/dashboard">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")} />
            </span>
            <span className="menu-text">Dashboard</span>
          </NavLink>
        </li>

        {/*end::1 Level*/}

        {/* begin staff */}
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            "/staff",
            true
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" to="/staff">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Code/Commit.svg")} />
            </span>
            <span className="menu-text">Staff</span>
            <i className="menu-arrow" />
          </NavLink>
          <div className="menu-submenu ">
            <i className="menu-arrow" />
            <ul className="menu-subnav">
              <li className="menu-item  menu-item-parent" aria-haspopup="true">
                <span className="menu-link">
                  <span className="menu-text">Staff</span>
                </span>
              </li>

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive("/staff/user")}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/staff/user">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">User</span>
                </NavLink>
              </li>
              <li
                className={`menu-item ${getMenuItemActive("/staff/role")}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/staff/role">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Role</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}
            </ul>
          </div>
        </li>
        {/* end staff */}

        {/*begin product and service*/}
        <li
          className={`menu-item ${getMenuItemActive("/productservice", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/productservice">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Library.svg")} />
            </span>
            <span className="menu-text">Product and Service</span>
          </NavLink>
        </li>
        {/*end product and service*/}

        {/*begin customer*/}
        <li
          className={`menu-item ${getMenuItemActive("/customer", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/customer">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Library.svg")} />
            </span>
            <span className="menu-text">Customer</span>
          </NavLink>
        </li>
        {/*end customer*/}

        {/*begin vendor*/}
        <li
          className={`menu-item ${getMenuItemActive("/vendor", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/vendor">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Library.svg")} />
            </span>
            <span className="menu-text">Vendor</span>
          </NavLink>
        </li>
        {/*end vendor*/}

        {/*begin proposal*/}
        <li
          className={`menu-item ${getMenuItemActive("/proposal", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/proposal">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Library.svg")} />
            </span>
            <span className="menu-text">Proposal</span>
          </NavLink>
        </li>
        {/*end proposal*/}

        {/* begin banking */}
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            "/banking",
            true
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" to="/banking">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Code/Commit.svg")} />
            </span>
            <span className="menu-text">Banking</span>
            <i className="menu-arrow" />
          </NavLink>
          <div className="menu-submenu ">
            <i className="menu-arrow" />
            <ul className="menu-subnav">
              <li className="menu-item  menu-item-parent" aria-haspopup="true">
                <span className="menu-link">
                  <span className="menu-text">Banking</span>
                </span>
              </li>

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive("/banking/account")}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/banking/account">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Account</span>
                </NavLink>
              </li>
              <li
                className={`menu-item ${getMenuItemActive(
                  "/banking/transfer"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/banking/transfer">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Transfer</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}
            </ul>
          </div>
        </li>
        {/* end banking */}

        {/* begin income */}
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            "/income",
            true
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" to="/income">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Code/Commit.svg")} />
            </span>
            <span className="menu-text">Income</span>
            <i className="menu-arrow" />
          </NavLink>
          <div className="menu-submenu ">
            <i className="menu-arrow" />
            <ul className="menu-subnav">
              <li className="menu-item  menu-item-parent" aria-haspopup="true">
                <span className="menu-link">
                  <span className="menu-text">Income</span>
                </span>
              </li>

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive("/income/invoice")}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/income/invoice">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Invoice</span>
                </NavLink>
              </li>
              <li
                className={`menu-item ${getMenuItemActive("/income/revenue")}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/income/revenue">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Revenue</span>
                </NavLink>
              </li>
              <li
                className={`menu-item ${getMenuItemActive(
                  "/income/creditnote"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/income/creditnote">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Credit Note</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}
            </ul>
          </div>
        </li>
        {/* end income */}

        {/* begin expense */}
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            "/expense",
            true
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" to="/expense">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Code/Commit.svg")} />
            </span>
            <span className="menu-text">Expense</span>
            <i className="menu-arrow" />
          </NavLink>
          <div className="menu-submenu">
            <i className="menu-arrow" />
            <ul className="menu-subnav">
              <li className="menu-item  menu-item-parent" aria-haspopup="true">
                <span className="menu-link">
                  <span className="menu-text">Expense</span>
                </span>
              </li>

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive("/expense/bill")}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/expense/bill">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Bill</span>
                </NavLink>
              </li>
              <li
                className={`menu-item ${getMenuItemActive("/expense/payment")}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/expense/payment">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Payment</span>
                </NavLink>
              </li>
              <li
                className={`menu-item ${getMenuItemActive(
                  "/expense/debitnote"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/expense/debitnote">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Dedit Note</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}
            </ul>
          </div>
        </li>
        {/* end expense */}

        {/*begin goal*/}
        <li
          className={`menu-item ${getMenuItemActive("/goal", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/goal">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Library.svg")} />
            </span>
            <span className="menu-text">Goal</span>
          </NavLink>
        </li>
        {/*end goal*/}

        {/*begin assets*/}
        <li
          className={`menu-item ${getMenuItemActive("/assets", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/assets">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Library.svg")} />
            </span>
            <span className="menu-text">Assets</span>
          </NavLink>
        </li>
        {/*end assets*/}

        {/* begin report */}
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            "/report",
            true
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" to="/report">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Code/Commit.svg")} />
            </span>
            <span className="menu-text">Report</span>
            <i className="menu-arrow" />
          </NavLink>
          <div className="menu-submenu">
            <i className="menu-arrow" />
            <ul className="menu-subnav">
              <li className="menu-item  menu-item-parent" aria-haspopup="true">
                <span className="menu-link">
                  <span className="menu-text">Report</span>
                </span>
              </li>

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/report/transaction"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/report/transaction">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Transaction</span>
                </NavLink>
              </li>
              <li
                className={`menu-item ${getMenuItemActive(
                  "/report/accountstatement"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/report/accountstatement">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Account Statement</span>
                </NavLink>
              </li>
              <li
                className={`menu-item ${getMenuItemActive(
                  "/report/incomesummary"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/report/incomesummary">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Income Summary</span>
                </NavLink>
              </li>
              <li
                className={`menu-item ${getMenuItemActive(
                  "/report/expensesummary"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/report/expensesummary">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Expense Summary</span>
                </NavLink>
              </li>
              <li
                className={`menu-item ${getMenuItemActive(
                  "/report/incomevsexpense"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/report/incomevsexpense">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Income VS Expense</span>
                </NavLink>
              </li>
              <li
                className={`menu-item ${getMenuItemActive(
                  "/report/taxsummary"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/report/taxsummary">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Tax Summary</span>
                </NavLink>
              </li>
              <li
                className={`menu-item ${getMenuItemActive(
                  "/report/profitandloss"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/report/profitandloss">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Profit and Loss</span>
                </NavLink>
              </li>
              <li
                className={`menu-item ${getMenuItemActive(
                  "/report/invoicesummary"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/report/invoicesummary">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Invoice Summary</span>
                </NavLink>
              </li>
              <li
                className={`menu-item ${getMenuItemActive(
                  "/report/billsummary"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/report/billsummary">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Bill Summary</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}
            </ul>
          </div>
        </li>
        {/* end report */}

        {/* begin constant */}
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            "/constant",
            true
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" to="/constant">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Code/Commit.svg")} />
            </span>
            <span className="menu-text">Constant</span>
            <i className="menu-arrow" />
          </NavLink>
          <div className="menu-submenu">
            <i className="menu-arrow" />
            <ul className="menu-subnav">
              <li className="menu-item  menu-item-parent" aria-haspopup="true">
                <span className="menu-link">
                  <span className="menu-text">Constant</span>
                </span>
              </li>

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive("/constant/taxes")}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/constant/taxes">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Taxes</span>
                </NavLink>
              </li>
              <li
                className={`menu-item ${getMenuItemActive(
                  "/constant/category"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/constant/category">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Category</span>
                </NavLink>
              </li>
              <li
                className={`menu-item ${getMenuItemActive("/constant/unit")}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/constant/unit">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Unit</span>
                </NavLink>
              </li>
              <li
                className={`menu-item ${getMenuItemActive(
                  "/constant/customfield"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/constant/customfield">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Custom Field</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}
            </ul>
          </div>
        </li>
        {/* end constant */}

        {/*begin company setting*/}
        <li
          className={`menu-item ${getMenuItemActive("/companysetting", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/companysetting">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Library.svg")} />
            </span>
            <span className="menu-text">Company Setting</span>
          </NavLink>
        </li>
        {/*end company setting*/}
      </ul>

      {/* end::Menu Nav */}
    </>
  );
}
