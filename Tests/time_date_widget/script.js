let clockContainer = document.querySelector('.clock-container');
let dateContainer = document.querySelector('.date-container');

const locale = 'en';
const dateClock = setInterval(function(){
    const today = new Date();
    const dayOfMonth = today.getDate();
    
    const weekday = today.toLocaleString(locale, options = { weekday: "long" });
    const month = today.toLocaleString(locale, options = { month: "long" });
    const hours = today.toLocaleTimeString(locale, options = { hour: '2-digit', hour12: false, hourCycle: 'h23' });
    let minutes = today.getMinutes();
    minutes = minutes < 10 ? `0${minutes}` : minutes;

    dateContainer.innerHTML = `<p>${weekday}</p><p><span>${dayOfMonth}</span></p><p>${month}</p>`;
    clockContainer.innerHTML = `${hours}:${minutes}`;
}, 1000);

/* const weekDays = [
    'Sunday', 
    'Monday', 
    'Tuesday', 
    'Wednesday', 
    'Thursday', 
    'Friday', 
    'Saturday'
];
const months =  [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]; */