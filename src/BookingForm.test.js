import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./Components/BookingForm";

// Mock the API
jest.mock("./api", () => ({
  fetchAPI: jest.fn((date) => {
    return ["17:00", "17:30", "19:30", "20:00", "21:30", "22:30", "23:00", "23:30"];
  }),
  submitAPI: jest.fn(() => true),
}));

describe("BookingForm - Dynamic Behavior", () => {
  const baseProps = {
    date: "2025-06-16",
    setDate: jest.fn(),
    time: "17:00",
    setTime: jest.fn(),
    guests: 2,
    setGuests: jest.fn(),
    occasion: "Birthday",
    setOccasion: jest.fn(),
    submitForm: jest.fn(),
  };

  it("renders initial availableTimes and updates when props change", () => {
    const initialTimes = ["17:00", "18:00"];
    const updatedTimes = ["19:00", "20:00"];

    const { rerender } = render(
      <BookingForm {...baseProps} availableTimes={initialTimes} />
    );

    expect(screen.getByRole("option", { name: "17:00" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "18:00" })).toBeInTheDocument();
    expect(screen.queryByRole("option", { name: "19:00" })).not.toBeInTheDocument();

    rerender(<BookingForm {...baseProps} availableTimes={updatedTimes} />);

    expect(screen.getByRole("option", { name: "19:00" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "20:00" })).toBeInTheDocument();
    expect(screen.queryByRole("option", { name: "17:00" })).not.toBeInTheDocument();
  });

  it("calls setDate when user changes date", () => {
    render(<BookingForm {...baseProps} availableTimes={["17:00"]} />);

    const dateInput = screen.getByLabelText(/choose date/i);
    fireEvent.change(dateInput, { target: { value: "2025-06-20" } });

    expect(baseProps.setDate).toHaveBeenCalledWith("2025-06-20");
  });

  it("calls setTime when time is selected", () => {
    render(<BookingForm {...baseProps} availableTimes={["17:00", "18:00"]} />);

    const timeSelect = screen.getByLabelText(/choose time/i);
    fireEvent.change(timeSelect, { target: { value: "18:00" } });

    expect(baseProps.setTime).toHaveBeenCalledWith("18:00");
  });

  it("calls submitForm when form is submitted", () => {
    render(<BookingForm {...baseProps} availableTimes={["17:00"]} />);

    const form = screen.getByTestId("form");
    fireEvent.submit(form);

    expect(baseProps.submitForm).toHaveBeenCalledWith({
      date: baseProps.date,
      time: baseProps.time,
      guests: baseProps.guests,
      occasion: baseProps.occasion,
    });
  });
});
