import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";
import { getInvoices } from "../Data";

export default class Invoices extends Component {
  render() {
    let invoices = getInvoices();
    return (
      <div>
        <nav>
          {invoices.map((invoice) => (
            <Link to={`/invoices/${invoice.number}`} key={invoice.number}>
              {invoice.name}
            </Link>
          ))}
        </nav>
        <Outlet />
      </div>
    );
  }
}
