import { useReducer, useState } from "react";
import { fetchAPI, submitAPI } from "../api";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";

const initializeTimes = () => {
  return fetchAPI(new Date());
};

const updateTimes = (state, action) => {
  if (action.type === "UPDATE") {
    return fetchAPI(new Date(action.date));
  }
  return state;
};

const Main = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const [availableTimes, dispatchTimes] = useReducer(updateTimes, [], initializeTimes);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [submittedData, setSubmittedData] = useState(null); 
  const handleDateChange = (newDate) => {
    setDate(newDate);
    dispatchTimes({ type: "UPDATE", date: newDate });
  };

  const closeCustomAlert = () => {
    setIsConfirmed(false);
  };

  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      setSubmittedData(formData);
      setIsConfirmed(true);
    }
  };

  return (
    <>
      <BookingPage
        date={date}
        setDate={handleDateChange}
        time={time}
        setTime={setTime}
        guests={guests}
        setGuests={setGuests}
        occasion={occasion}
        setOccasion={setOccasion}
        availableTimes={availableTimes}
        submitForm={submitForm}
      />

      <ConfirmedBooking isOpen={isConfirmed} CloseCustomAlert={closeCustomAlert}>
        <h2>Booking Confirmed!</h2>
        {submittedData && (
          <div>
          <h1>Little Lemon</h1>
          <ul>
            <li><strong>Date:</strong> {submittedData.date}</li>
            <li><strong>Time:</strong> {submittedData.time}</li>
            <li><strong>Guests:</strong> {submittedData.guests}</li>
            <li><strong>Occasion:</strong> {submittedData.occasion}</li>
          </ul>
          <h2>Thank you, we are excited to see you!</h2>
          </div>
        )}
      </ConfirmedBooking>
    </>
  );
};

export default Main;
