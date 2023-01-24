import React from "react";
import register from "../images/register.jpg";

export default function Register() {
  return (
    <form className="container py-5 h-100" action="/english_school/">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col">
          <div className="card card-registration my-4">
            <div className="row g-0">
              <div className="col-xl-6 d-none d-xl-block">
                <img
                  src={register}
                  alt="Sample photo"
                  className="img-fluid"
                  style={{
                    borderTopLeftRadius: "0.25rem",
                    borderBottomLeftRadius: "0.25rem",
                  }}
                />
              </div>
              <div className="col-xl-6">
                <div className="card-body p-md-5 text-black">
                  <h3 className="mb-5 text-uppercase">
                    Student registration form
                  </h3>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form3Example1m"
                          className="form-control form-control-md"
                          required
                        />
                        <label className="form-label" for="form3Example1m">
                          First name
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form3Example1n"
                          className="form-control form-control-md"
                          required
                        />
                        <label className="form-label" for="form3Example1n">
                          Last name
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form3Example1m1"
                          className="form-control form-control-md"
                          required
                        />
                        <label className="form-label" for="form3Example1m1">
                          Mother's name
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="form3Example8"
                      className="form-control form-control-md"
                      required
                    />
                    <label className="form-label" for="form3Example8">
                      Address
                    </label>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <select className="select px-3 py-1" required>
                        <option selected disabled hidden>
                          Choose your program
                        </option>
                        <option value="2">On Campus</option>
                        <option value="3">Online</option>
                        <option value="4">Summer Classes</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example97"
                      className="form-control form-control-md"
                      required
                    />
                    <label className="form-label" for="form3Example97">
                      Email
                    </label>
                  </div>

                  <div className="d-flex justify-content-end pt-3">
                    <button
                      type="submit"
                      className="btn btn-warning btn-md ms-2"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
