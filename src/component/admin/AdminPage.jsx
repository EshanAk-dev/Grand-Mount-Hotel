import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ApiService from '../../service/ApiService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield, faBuilding, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const AdminPage = () => {
    const [adminName, setAdminName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAdminName = async () => {
            try {
                const response = await ApiService.getUserProfile();
                setAdminName(response.user.name);
            } catch (error) {
                console.error('Error fetching admin details:', error.message);
            }
        };

        fetchAdminName();
    }, []);

    return (
      <div className="admin-page">
        <h1 className="welcome-message h2">
          <FontAwesomeIcon
            icon={faUserShield}
            style={{ marginRight: "10px" }}
          />
          Welcome, {adminName}
        </h1>

        <div className="admin-actions">
          <button
            className="admin-button"
            onClick={() => navigate("/admin/manage-rooms")}
          >
            <FontAwesomeIcon icon={faBuilding} style={{ marginRight: "8px" }} />
            Manage Rooms
          </button>

          <button
            className="admin-button"
            onClick={() => navigate("/admin/manage-bookings")}
          >
            <FontAwesomeIcon
              icon={faCalendarAlt}
              style={{ marginRight: "8px" }}
            />
            Manage Bookings
          </button>
        </div>
      </div>
    );
}

export default AdminPage;