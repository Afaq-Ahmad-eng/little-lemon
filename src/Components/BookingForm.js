import styles from './BookingForm.module.css';

const BookingForm = ({
  date,
  setDate,
  time,
  setTime,
  guests,
  setGuests,
  occasion,
  setOccasion,
  availableTimes,
  submitForm,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  if (!date || !time || guests < 1 || !occasion) {
    return; 
  }
  submitForm({ date, time, guests, occasion});
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form} data-testid="form">
      <h2 className={styles.heading}>Make a Reservation</h2>

      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
        className={styles.input}
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className={styles.input}
        required
      >
        {availableTimes.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(parseInt(e.target.value))}
        required
        className={styles.input}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        className={styles.input}
        required
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input
        type="submit"
        value="Make Your Reservation"
        aria-label="On Click"
        className={styles.button}
      />
    </form>
  );
};

export default BookingForm;
