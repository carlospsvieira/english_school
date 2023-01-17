import React from "react";
import "../stylesheets/Register.css";
import registration from "../images/registration.jpg";

export default function Register() {
  return (
    <div className="register-container">
      <h1>Register</h1>
      <img src={registration} alt="register" />
      <form class="row row-cols-lg-auto g-3 align-items-center" action="/">
        <div class="col-12">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="Full Name"
              required
            />
          </div>
        </div>
        <div class="col-12">
          <div class="input-group">
            <input
              type="email"
              class="form-control"
              placeholder="Email"
              required
            />
          </div>
        </div>

        <div class="col-12">
          <label class="visually-hidden" for="inlineFormSelectPref">
            Preference
          </label>
          <select class="form-select" id="inlineFormSelectPref" required>
            <option selected>Choose your program</option>
            <option value="1">On Campus</option>
            <option value="2">Online</option>
            <option value="3">Summer Course</option>
          </select>
        </div>

        <div class="col-12">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineFormCheck"
              required
            />
            <label class="form-check-label" for="inlineFormCheck">
              Agree to send my information  
            </label>
          </div>
        </div>

        <div class="col-12">
          <button type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
