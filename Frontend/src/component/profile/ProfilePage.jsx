import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiService from '../../service/ApiService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEdit, faSignOutAlt, faTimes } from '@fortawesome/free-solid-svg-icons';

const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await ApiService.getUserProfile();
                // Fetch user bookings using the fetched user ID
                const userPlusBookings = await ApiService.getUserBookings(response.user.id);
                setUser(userPlusBookings.user);
            } catch (error) {
                setError(error.response?.data?.message || error.message);
            }
        };

        fetchUserProfile();
    }, []);

    const handleLogout = () => {
        ApiService.logout();
        navigate('/home');
    };

    const handleEditProfile = () => {
        navigate('/edit-profile');
    };

    const handleCancelBooking = async (bookingId) => {
        if (!window.confirm('Are you sure you want to cancel this booking?')) {
            return; // Do nothing if the user cancels
        }

        try {
            // Call the cancel booking API
            const response = await ApiService.cancelBooking(bookingId);
            if (response.statusCode === 200) {
                setSuccessMessage('Booking canceled successfully');
                // Filter out the canceled booking from the user's bookings
                setUser((prevUser) => ({
                    ...prevUser,
                    bookings: prevUser.bookings.filter((booking) => booking.id !== bookingId),
                }));
                setTimeout(() => setSuccessMessage(''), 5000);
            }
        } catch (error) {
            setError(error.response?.data?.message || error.message);
            setTimeout(() => setError(''), 5000);
        }
    };

    return (
      <div className="profile-page">
        {user && (
          <h2 className="h2">
            <FontAwesomeIcon icon={faUser} style={{ marginRight: "10px" }} />
            Welcome, {user.name}
          </h2>
        )}

        <div className="profile-actions">
          <button className="edit-profile-button" onClick={handleEditProfile}>
            <FontAwesomeIcon icon={faEdit} style={{ marginRight: "8px" }} />
            Edit Profile
          </button>
          <button className="logout-button" onClick={handleLogout}>
            <FontAwesomeIcon
              icon={faSignOutAlt}
              style={{ marginRight: "8px" }}
            />
            Logout
          </button>
        </div>

        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        {user && (
          <div className="profile-details">
            <h3>My Profile Details</h3>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Phone Number:</strong> {user.phoneNumber}
            </p>
          </div>
        )}

        <div className="bookings-section">
          <h3>My Booking History</h3>
          <div className="booking-list">
            {user && user.bookings.length > 0 ? (
              user.bookings.map((booking) => (
                <div key={booking.id} className="booking-item">
                  <p>
                    <strong>Booking Code:</strong> {booking.bookingConfirmationCode}
                  </p>
                  <p>
                    <strong>Check-in Date:</strong> {booking.checkInDate}
                  </p>
                  <p>
                    <strong>Check-out Date:</strong> {booking.checkOutDate}
                  </p>
                  <p>
                    <strong>Total Guests:</strong> {booking.totalNumOfGuest}
                  </p>
                  <p>
                    <strong>Room Type:</strong> {booking.room.roomType}
                  </p>
                  <img src={booking.room.roomPhotoUrl} alt="Room" className="room-photo" />

                  {/* Add Cancel Booking Button */}
                  <button
                    className="acheive-booking"
                    onClick={() => handleCancelBooking(booking.id)}
                  >
                    <FontAwesomeIcon icon={faTimes} style={{ marginRight: "8px" }} />
                    Cancel Booking
                  </button>
                </div>
              ))
            ) : (
              <p>No bookings found.</p>
            )}
          </div>
        </div>
      </div>
    );
};

export default ProfilePage;
