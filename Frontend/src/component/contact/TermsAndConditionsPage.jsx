import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGavel, faFileContract, faHandshake } from '@fortawesome/free-solid-svg-icons';

const TermsAndConditionsPage = () => {

    return (
      <div className="terms-and-conditions">
        {/* HEADER / BANNER SECTION */}
        <section>
          <header className="header-banner">
            <img
              src="./assets/images/terms-and-conditions.jpg"
              alt="terms and conditions"
              className="header-image"
            />
            <div className="overlay"></div>
            <div className="animated-texts overlay-content">
              <h1 className="h1">
                <span className="phegon-color">&nbsp;Terms & Conditions </span> <br />
                Grand Mount Hotel
              </h1>
              <br />
              <br />
              <h3>
                <span className="phegon-color">Know the rules before you book</span>
              </h3>
            </div>
          </header>
        </section>

        <section className="terms-and-conditions">
          <div className="terms-content">
            <h2>
              <FontAwesomeIcon
                icon={faGavel}
                style={{ marginRight: "10px", color: "#e74c3c" }}
              />
              Terms & Conditions
            </h2>
            <p className="terms-description">
              Please carefully read through our terms and conditions before making a booking with Grand Mount Hotel. By using our services, you agree to these terms.
            </p>

            <div className="terms-info">
              <div className="info-item">
                <FontAwesomeIcon icon={faFileContract} style={{ color: "#3498db" }} />
                <span>Booking Policy</span>
                <p>All bookings must be made using valid credit/debit cards. Full payment is required before confirmation.</p>
              </div>

              <div className="info-item">
                <FontAwesomeIcon
                  icon={faHandshake}
                  style={{ color: "#2ecc71" }}
                />
                <span>Cancellation Policy</span>
                <p>Cancellations must be made at least 48 hours in advance to receive a full refund. Late cancellations may incur a fee.</p>
              </div>

              <div className="info-item">
                <FontAwesomeIcon
                  icon={faGavel}
                  style={{ color: "#f39c12" }}
                />
                <span>Liability</span>
                <p>The hotel is not liable for personal belongings lost or stolen on the premises. We recommend using in-room safes for valuables.</p>
              </div>
            </div>

            <div className="contact-terms">
              <p>
                If you have any questions or need clarification about our terms and conditions, please contact us at
                <a href="mailto:legal@grandmounthotel.com" className="contact-email">
                  legal@grandmounthotel.com
                </a>.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
}

export default TermsAndConditionsPage;
