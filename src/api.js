const seededRandom = function (seed) {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;

  return function () {
    return (s = (s * a) % m) / m;
  };
};

const fetchAPI = function (date) {
  let bookingData = [];
  const random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      bookingData.push(i + ":00");
    }
    if (random() < 0.5) {
      bookingData.push(i + ":30");
    }
  }

  return bookingData;
};

const submitAPI = function (formData) {
    console.log(formData);
    
  return true;
};


export { fetchAPI, submitAPI };
