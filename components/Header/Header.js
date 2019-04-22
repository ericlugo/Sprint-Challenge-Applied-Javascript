const currentDate = new Date();
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};
const dateString = new Intl.DateTimeFormat('en-US', options).format(currentDate);
const dateField = document.querySelector('.date');
dateField.innerHTML = dateString;
