import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';


const ContactUsPage = () => {

    return (
      <div className="contact-us">
        {/* HEADER / BANNER ROOM SECTION */}
        <section>
          <header className="header-banner">
            <img
              src="./assets/images/contact-us.jpg"
              alt="contact us"
              className="header-image"
            />
            <div className="overlay"></div>
            <div className="animated-texts overlay-content">
              <h1 className="h1">
                <span className="phegon-color">&nbsp;Contact Us </span> <br />
                Grand Mount Hotel
              </h1>
              <br />
              <br />
              <h3>
                <span className="phegon-color">Stay connected with us</span>
              </h3>
            </div>
          </header>
        </section>

        <section className="contact-us">
          <div className="contact-content">
            <h2>
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ marginRight: "10px", color: "#e74c3c" }}
              />
              Contact Us
            </h2>
            <p className="contact-description">
              We’re here to assist you 24/7. Whether you have questions about
              our rooms, need help with your booking, or want to provide
              feedback, our team is ready to help!
            </p>
            <div className="contact-info">
              <div className="info-item">
                <FontAwesomeIcon icon={faPhone} style={{ color: "#3498db" }} />
                <span>+94 (71) 124-6786</span>
              </div>
              <div className="info-item">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  style={{ color: "#2ecc71" }}
                />
                <span>23/1 Kandy Road, Matale, Sri Lanka</span>
              </div>
              <div className="info-item">
                <FontAwesomeIcon icon={faClock} style={{ color: "#f39c12" }} />
                <span>24/7 Customer Support</span>
              </div>
            </div>
            <a href="mailto:info@grandmounthotel.com" className="contact-email">
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ marginRight: "10px", color: "#e74c3c" }}
              />
              Email Us
            </a>
          </div>
        </section>
      </div>
    );
}

export default ContactUsPage;