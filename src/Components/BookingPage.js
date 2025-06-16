import { useState } from "react";
import Footer from "./Footer";
import BookingForm from "./BookingForm";
import styles from "./BookingPage.module.css";
import Header from "./Header";
import CustomAlert from "./CustomAlert";

const BookingPage = () => {
    const [customAlert, setCustomAlert] = useState(false);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("17:00");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");

    const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

    const handleSubmit = (e) => {
        e.preventDefault();
        setCustomAlert(true);
    };
    const CloseCustomALert = () => {
        setCustomAlert(false);
    };
    return (
        <div className={styles.container}>
            <Header />

            <section className={styles.intro}>
                <h1 className={styles.title}>Reserve Your Table</h1>
                <p className={styles.description}>
                    Welcome to Little Lemon! Fill out the form below to make a reservation
                    at our Peshawar location.
                </p>
            </section>

            <BookingForm
                date={date}
                setDate={setDate}
                time={time}
                setTime={setTime}
                guests={guests}
                setGuests={setGuests}
                occasion={occasion}
                setOccasion={setOccasion}
                availableTimes={availableTimes}
                onSubmit={handleSubmit}
            />

            <Footer />

            <CustomAlert isOpen={customAlert} CloseCustomAlert={CloseCustomALert}>
                <h1>Little Lemon Restaurant</h1>
                <h2>Reservation Confirmed</h2>
                <h4>
                    <strong>Date:</strong> {date}
                </h4>
                <h4>
                    <strong>Time:</strong> {time}
                </h4>
                <h4>
                    <strong>Guests:</strong> {guests}
                </h4>
                <h4>
                    <strong>Occasion:</strong> {occasion}
                </h4>
                <h2>Thank you, we're excited to see you!</h2>
            </CustomAlert>
        </div>
    );
};

export default BookingPage;
