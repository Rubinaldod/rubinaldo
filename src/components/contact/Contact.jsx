import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="constact section">
      <h2 className="section_title">contact</h2>
      <span className="section_subtitle">- Let's talk -</span>

      <div className="contact_container container grid">
        <div className="contact_content">
          <h3 className="contact_title">Talk to me</h3>
          <div className="contact_info">

            <div className="contact_card">
              <i className="bx bx-mail-send contact_card-icon"></i>
              <h3 className="contact_card-title">Email</h3>
              <span className="contact_card-data">rubinaldomingos@gmail.com</span>
              <a href="mailto:rubinaldomingos@gmail.com" className="contact_button">
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact_button-icon"></i>{" "}
              </a>
            </div>

            <div className="contact_card">
              <i className="bx bxl-whatsapp contact_card-icon"></i>
              <h3 className="contact_card-title">Whatsapp</h3>
              <span className="contact_card-data"> +244 921418615</span>
              <a href="https://wa.me/qr/O6AUNV7HH44HL1" className="contact_button">
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact_button-icon"></i>{" "}
              </a>
            </div>

            <div className="contact_card">
              <i className="bx bx contact_card-icon"></i>
              <h3 className="contact_card-title"></h3>
              <span className="contact_card-data"> </span>
              <a href="#" className="contact_button">
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact_button-icon"></i>{" "}
              </a>
            </div>
          </div>
        </div>

        <div className="contact_content">
          <h3 className="contact_title">How can I help you?</h3>
          <form  className="contact_form">
            <div className="contact_form-div">
                <label  className="contact_form-tag">Name</label>
                <input type="text" name="name" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
