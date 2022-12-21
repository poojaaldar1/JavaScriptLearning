
console.log(`-----------Switch Case Assignment 0A----------`);
function monthOfYear(monthNumber) {
  switch (monthNumber) {
    case 1:
      console.log(`This month is Jan`);

      break;
    case 2:
      console.log(`This month is Feb`);

      break;
    case 3:
      console.log(`This month is March`);

      break;
    case 4:
      console.log(`This month is April`);

      break;
    case 5:
      console.log(`This month is May`);

      break;
    case 6:
      console.log(`This month is Jun`);

      break;
    case 7:
      console.log(`This month is July`);

      break;
    case 8:
      console.log(`This month is Aug`);

    case 9:
      console.log(`This month is Sept`);

      break;
    case 10:
      console.log(`This month is Oct`);

      break;
    case 11:
      console.log(`This month is Nov`);

      break;
    case 12:
      console.log(`This month is Dec`);

      break;

    default:
      console.log(`Given Number is ${monthNumber}.Please enter valid number.`);
      break;
  }
}
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);