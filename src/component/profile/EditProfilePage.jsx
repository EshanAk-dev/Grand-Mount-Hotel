import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiService from '../../service/ApiService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';


const EditProfilePage = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await ApiService.getUserProfile();
                setUser(response.user);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchUserProfile();
    }, []);

    const handleDeleteProfile = async () => {
        if (!window.confirm('Are you sure you want to delete your account?')) {
            return;
        }
        try {
            await ApiService.deleteUser(user.id);
            navigate('/signup');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
      <div className="edit-profile-page">
        <h2 className='h2'>
          <FontAwesomeIcon icon={faEdit} style={{ marginRight: "8px" }} />
          Edit Profile
        </h2>
        {error && <p className="error-message">{error}</p>}
        {user && (
          <div className="profile-details">
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Phone Number:</strong> {user.phoneNumber}
            </p>
            <button
              className="delete-profile-button"
              onClick={handleDeleteProfile}
            >
              <FontAwesomeIcon icon={faTrash} style={{ marginRight: "10px" }} />
              Delete Profile
            </button>
          </div>
        )}
      </div>
    );
};

export default EditProfilePage;