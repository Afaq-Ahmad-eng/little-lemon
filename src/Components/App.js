import {Routes, Route } from 'react-router-dom';
import Main from './Main';
import ConfirmedBooking from './ConfirmedBooking';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/confirmed" element={<ConfirmedBooking isOpen={true}>Booking Confirmed!</ConfirmedBooking>} />
    </Routes>
    </>
  );
}

export default App;
