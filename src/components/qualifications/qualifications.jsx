import React, { useState } from "react";
import "./qualifications.css";

const Qualifications = () => {
  const [toggleState, setToggleState] = useState(5);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualifications">
      <h2 className="section_title"> Qualifications</h2>

      <span className="section_subtitle">- My personal jurney -</span>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div
            className={
              toggleState === 5
                ? "qualification_button qualification_active button--flex"
                : "qualification_button  button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification_icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 5
                ? "qualification_button qualification_active button--flex"
                : "qualification_button  button--flex"
            }
          >
            <i className="uil uil-briefcase-alt qualification_icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification_sections">
          <div className='"qualification_content qualification_content-active"'>
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Computer Science</h3>
                <span className="qualification_subtitle">
                  Africa University
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2019 - 2023
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>

                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>

                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">Computer Science</h3>
                <span className="qualification_subtitle">
                  Africa University
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2019 - 2023
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
