import React, { Component } from "react";
import { useParams } from "react-router-dom";
import { getInvoice } from "../Data";

export default class Invoice extends Component {
  render() {
    let params = useParams();
    let invoice = getInvoice(parseInt(params.invoiceId, 10));
    return <main>Invoice {params.invoiceId}</main>;
  }
}
