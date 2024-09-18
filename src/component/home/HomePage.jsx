import React, {useState} from "react";
import RoomSearch from "../common/RoomSearch";
import RoomResult from "../common/RoomResult";


const HomePage = () => {

    const [roomSearchResults, setRoomSearchResults] = useState([]);

    // Function to handle search results
    const handleSearchResult = (results) => {
        setRoomSearchResults(results);
    };

    return (
      <div className="home">
        {/* HEADER / BANNER ROOM SECTION */}
        <section>
          <header className="header-banner">
            <img
              src="./assets/images/hotel.jpg"
              alt="Grand Mount Hotel"
              className="header-image"
            />
            <div className="overlay"></div>
            <div className="animated-texts overlay-content">
              <h1 className="h1">
                <span className="phegon-color">Welcome to </span> Grand Mount
                Hotel
              </h1>
              <br />
              <h3>
                <span className="phegon-color">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Step into a
                  haven of comfort and care
                </span>
              </h3>
            </div>
          </header>
        </section>

        {/* SEARCH/FIND AVAILABLE ROOM SECTION */}
        <RoomSearch handleSearchResult={handleSearchResult} />
        <RoomResult roomSearchResults={roomSearchResults} />

        <h4>
          <a className="view-rooms-home" href="/rooms">
            All Rooms
          </a>
        </h4>
        <br />

        <section className="image-carousel">
          <div className="carousel">
            <div className="feature">
              <div className="feature-overlay">
                <h3 className="feature-title h2">Exclusive Pool</h3>
              </div>
              <img src="./assets/images/f1.jpg" alt="Exclusive Pool" />
            </div>
            <div className="feature">
              <div className="feature-overlay">
                <h3 className="feature-title h2">Fine Dining</h3>
              </div>
              <img src="./assets/images/f2.jpg" alt="Fine Dining" />
            </div>
            <div className="feature">
              <div className="feature-overlay">
                <h3 className="feature-title h2">Children Play Area</h3>
              </div>
              <img src="./assets/images/f3.jpg" alt="Children Play Area" />
            </div>
          </div>
        </section>
        <br />

        <section className="special-offers">
          <div className="special-offers-bg">
            <img
              src="./assets/images/special-offer-bg.jpg"
              alt="Special Offers Background"
            />
          </div>
          <div className="offer-content">
            <h2 className="h2 feature-title">Special Offers</h2>
            <div className="offer-card">
              <h3>Book Early and Save!</h3>
              <p>
                Book your stay 30 days in advance and get 20% off your total
                reservation.
              </p> <br />
              <a href="/contact-us" className="btn-primary">
                Contact Us
              </a>
            </div>
          </div>
        </section>

        <br />
        <br />
        <h2 className="h2">
          Services at <span color="black">Grand Mount Hotel</span>
        </h2>

        {/* SERVICES SECTION */}
        <section className="service-section">
          <div className="service-card">
            <img src="./assets/images/ac.png" alt="Air Conditioning" />
            <div className="service-details">
              <h3 className="service-title h2">Air Conditioning</h3>
              <p className="service-description">
                Stay cool and comfortable throughout your stay with our
                individually controlled in-room air conditioning.
              </p>
            </div>
          </div>
          <div className="service-card">
            <img src="./assets/images/mini-bar.png" alt="Mini Bar" />
            <div className="service-details">
              <h3 className="service-title h2">Mini Bar</h3>
              <p className="service-description">
                Enjoy a convenient selection of beverages and snacks stocked in
                your room's mini bar with no additional cost.
              </p>
            </div>
          </div>
          <div className="service-card">
            <img src="./assets/images/car-parking.png" alt="Parking" />
            <div className="service-details">
              <h3 className="service-title h2">Parking</h3>
              <p className="service-description">
                We offer on-site parking for your convenience. Please inquire
                about valet parking options if available.
              </p>
            </div>
          </div>
          <div className="service-card">
            <img src="./assets/images/wifi.png" alt="WiFi" />
            <div className="service-details">
              <h3 className="service-title h2">WiFi</h3>
              <p className="service-description">
                Stay connected throughout your stay with complimentary
                high-speed Wi-Fi access available in all guest rooms and public
                areas.
              </p>
            </div>
          </div>
        </section>
        {/* AVAILABLE ROOMS SECTION */}
        <section></section>
      </div>
    );
}

export default HomePage;