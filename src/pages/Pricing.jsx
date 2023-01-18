import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Pricing.css";

export default function Pricing() {
  return (
    <div className="pricing-container container">
      <h1>Dates & Pricing</h1>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Program</th>
            <th scope="col">Start/End Date</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>On Campus</td>
            <td>Feb 5 - May 5</td>
            <td>$3000</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Online</td>
            <td>Anytime</td>
            <td>$25/class</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Summer Classes</td>
            <td>May 31 - Sep 16</td>
            <td>$4500</td>
          </tr>
        </tbody>
      </table>
      <Link to="/register">Register Now!</Link>
    </div>
  );
}
