package com.eshanprojects.GrandMountHotel.service.interfac;

import com.eshanprojects.GrandMountHotel.dto.Response;
import com.eshanprojects.GrandMountHotel.entity.Booking;

public interface IBookingService {

    Response saveBooking(Long roomId, Long userId, Booking bookingRequest);
    Response findBookingByConfirmationCode(String confirmationCode);
    Response getAllBookings();
    Response cancelBooking(Long bookingId);
}
