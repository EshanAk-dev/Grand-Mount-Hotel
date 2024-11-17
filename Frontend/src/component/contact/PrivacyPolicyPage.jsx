import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faUserSecret, faLock } from '@fortawesome/free-solid-svg-icons';

const PrivacyPolicyPage = () => {

    return (
      <div className="privacy-policy">
        {/* HEADER / BANNER ROOM SECTION */}
        <section>
          <header className="header-banner">
            <img
              src="./assets/images/privacy-policy.jpg"
              alt="privacy policy"
              className="header-image"
            />
            <div className="overlay"></div>
            <div className="animated-texts overlay-content">
              <h1 className="h1">
                <span className="phegon-color">&nbsp;Privacy Policy </span> <br />
                Grand Mount Hotel
              </h1>
              <br />
              <br />
              <h3>
                <span className="phegon-color">Your privacy matters to us</span>
              </h3>
            </div>
          </header>
        </section>

        <section className="privacy-policy">
          <div className="policy-content">
            <h2>
              <FontAwesomeIcon
                icon={faShieldAlt}
                style={{ marginRight: "10px", color: "#2ecc71" }}
              />
              Privacy Policy
            </h2>
            <p className="policy-description">
              At Grand Mount Hotel, we prioritize your privacy. This policy
              outlines how we collect, use, and safeguard your personal
              information. Your data is handled with the highest level of
              security and transparency.
            </p>

            <div className="policy-info">
              <div className="info-item">
                <FontAwesomeIcon icon={faUserSecret} style={{ color: "#3498db" }} />
                <span>Personal Data Collection</span>
                <p>We collect information such as your name, contact details, and booking preferences when you use our services.</p>
              </div>

              <div className="info-item">
                <FontAwesomeIcon
                  icon={faLock}
                  style={{ color: "#e74c3c" }}
                />
                <span>Data Protection</span>
                <p>Your data is stored securely, and we employ the latest encryption technologies to prevent unauthorized access.</p>
              </div>

              <div className="info-item">
                <FontAwesomeIcon
                  icon={faShieldAlt}
                  style={{ color: "#f39c12" }}
                />
                <span>Third-Party Services</span>
                <p>We do not share your information with third parties except as required to complete your bookings and enhance our services.</p>
              </div>
            </div>

            <div className="contact-policy">
              <p>
                For further inquiries about our privacy practices, please reach
                out to us via email at
                <a href="mailto:privacy@grandmounthotel.com" className="contact-email">
                  privacy@grandmounthotel.com
                </a>.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
}

export default PrivacyPolicyPage;
