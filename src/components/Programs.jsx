import React from "react";
import "../stylesheets/Programs.css";
import onCampus from "../images/on-campus.jpg";
import onlineClasses from "../images/online-classes.jpg";
import summerClasses from "../images/summer-classes.jpg";
import { Link } from "react-router-dom";

export default function Programs() {
  return (
    <div className="container programs-container">
      <h1>PROGRAMS</h1>
      <div className="card-group my-cards">
        <div className="card my-card">
          <img src={onCampus} className="card-img-top" alt="on-campus" />
          <div className="card-body">
            <h5 className="card-title">ON CAMPUS</h5>
            <p className="card-text">
              Lectus vestibulum mattis ullamcorper velit sed. Leo urna molestie
              at elementum eu facilisis sed. Sollicitudin aliquam ultrices
              sagittis orci. Ante in nibh mauris cursus mattis molestie a.
              Viverra accumsan in nisl nisi scelerisque.
            </p>
            <Link to="/register">Register Now!</Link>
          </div>
        </div>
        <div className="card my-card">
          <img
            src={onlineClasses}
            className="card-img-top"
            alt="online-classes"
          />
          <div className="card-body">
            <h5 className="card-title">ONLINE</h5>
            <p className="card-text">
              Lectus vestibulum mattis ullamcorper velit sed. Leo urna molestie
              at elementum eu facilisis sed. Sollicitudin aliquam ultrices
              sagittis orci. Ante in nibh mauris cursus mattis molestie a.
              Viverra accumsan in nisl nisi scelerisque.
            </p>
            <Link to="/register">Register Now!</Link>
          </div>
        </div>
        <div className="card my-card">
          <img
            src={summerClasses}
            className="card-img-top"
            alt="summer-classes"
          />
          <div className="card-body">
            <h5 className="card-title">SUMMER CLASSES</h5>
            <p className="card-text">
              Lectus vestibulum mattis ullamcorper velit sed. Leo urna molestie
              at elementum eu facilisis sed. Sollicitudin aliquam ultrices
              sagittis orci. Ante in nibh mauris cursus mattis molestie a.
              Viverra accumsan in nisl nisi scelerisque.
            </p>
            <Link to="/register">Register Now!</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
