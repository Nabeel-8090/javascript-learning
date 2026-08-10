import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import isSatSun from './isWeekend.js';

const today = dayjs();

const afterFiveDays = today.add(5, 'days');
console.log(afterFiveDays.format('MMMM D'));

const afterOneMonth = today.add(1, 'month');
console.log(afterOneMonth.format('MMMM D'));

const beforeOneMonth = today.subtract(1, 'month');
console.log(beforeOneMonth.format('MMMM D'));
console.log(beforeOneMonth.format('dddd'));

const weekend = isSatSun(today.add(6, 'days'));

if (weekend !== -1) {
    console.log(weekend)
} else {
    console.log("Not Weekend");
}