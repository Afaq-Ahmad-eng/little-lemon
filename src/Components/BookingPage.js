import BookingForm from "./BookingForm";
import Header from "./Header";
import Footer from "./Footer";
import styles from './BookingPage.module.css';
const BookingPage = (props) => {
  return (
    <>
    <div className={styles.container}>
      <Header />
      <BookingForm {...props} />
      <Footer />
    </div>
    </>
  );
};

export default BookingPage;
