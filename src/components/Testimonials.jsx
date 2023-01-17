import React from "react";
import "../stylesheets/Testimonials.css";
import student1 from "../images/student1.jpg";
import student2 from "../images/student2.jpg";
import student3 from "../images/student3.jpg";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

export default function Testimonials() {
  return (
    <>
      <div className="test-container">
        <h1>WHAT OUR STUDENTS HAVE TO SAY</h1>
        <div className="card-container">
          <img src={student1} alt="student_1" />
          <div className="text-container">
            <h3>Clara Silva</h3>
            <span>
              <RiDoubleQuotesL />
              Turpis egestas pretium aenean pharetra magna ac placerat. Donec
              adipiscing tristique risus nec. Faucibus a pellentesque sit amet
              porttitor eget dolor morbi.
              <RiDoubleQuotesR />
            </span>
          </div>
        </div>
        <div className="card-container">
          <img src={student2} alt="student_2" />
          <div className="text-container">
            <h3>Igor Shevchenko</h3>
            <span>
              <RiDoubleQuotesL />
              Amet consectetur adipiscing elit ut aliquam purus. Velit laoreet
              id donec ultrices tincidunt arcu non. Porta non pulvinar neque
              laoreet suspendisse.
              <RiDoubleQuotesR />
            </span>
          </div>
        </div>
        <div className="card-container">
          <img src={student3} alt="student_2" />
          <div className="text-container">
            <h3>Pierre Concordia</h3>
            <span>
              <RiDoubleQuotesL />
              Amet consectetur adipiscing elit ut aliquam purus. Velit laoreet
              id donec ultrices tincidunt arcu non. Porta non pulvinar neque
              laoreet suspendisse.
              <RiDoubleQuotesR />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
