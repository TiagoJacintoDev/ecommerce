const month = [
  'Jan',
  'Feb',
  'March',
  'April',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

const dayOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

function setDeliveryDate(offset) {
  const date = new Date();
  date.setDate(date.getDate() + offset);
  return `Delivered by ${dayOfWeek[date.getDay()]}, ${
    month[date.getMonth()]
  } ${date.getDate()}
  `;
}

export const shippingOptions = [
  {
    id: 1,
    title: 'Normal',
    deliveryDate: setDeliveryDate(4),
    price: '2.99',
  },
  {
    id: 2,
    title: 'Express',
    deliveryDate: setDeliveryDate(2),
    price: '4.99',
  },
  { id: 3, title: 'Next Day', deliveryDate: setDeliveryDate(1), price: '6.99' },
];
