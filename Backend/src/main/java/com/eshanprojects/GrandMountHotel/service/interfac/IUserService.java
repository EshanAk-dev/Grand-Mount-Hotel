package com.eshanprojects.GrandMountHotel.service.interfac;

import com.eshanprojects.GrandMountHotel.dto.LoginRequest;
import com.eshanprojects.GrandMountHotel.dto.Response;
import com.eshanprojects.GrandMountHotel.entity.User;

public interface IUserService {

    Response register(User user);
    Response login(LoginRequest loginRequest);
    Response getAllUsers();
    Response getUserBookingHistory(String userId);
    Response deleteUser(String userId);
    Response getUserById(String userId);
    Response getMyInfo(String email);
}
