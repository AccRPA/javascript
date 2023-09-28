/**
 * Crea un objeto Date para la fecha: Feb 20, 2012, 3:12am. La zona horaria es local.
 * Muéstralo en pantalla utilizando console.log.
 */
const date1 = new Date('2012-02-20T03:12');
console.log(`date1: ${date1}`);

/**
 * Escribe una función getWeekDay(date) para mostrar el día de la semana en formato corto: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.
 */
function getWeekDay(date){
    const daysArray = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];    
    return daysArray[date.getDay()];
}

let date2 = new Date(2012, 0, 3);  // 3 Jan 2012
console.log(`getWeekDay: ${getWeekDay(date2)}`); // TU

/**
 * En los países europeos se cuentan los días de la semana a partir del lunes (número 1), seguido del martes (número 2), hasta el domingo (número 7). 
 * Escribe una función getLocalDay(date) que devuelva el día de la semana “europeo” para la variable date.
 */
function getLocalDay(date){
    const day = date.getDay();
    return day == 0 ? 7 : day; //7 - (7 - date.getDay())
}

let date3 = new Date(2012, 0, 3);  // 3 Jan 2012
console.log(`getLocalDay: ${getLocalDay(date3)}`);  // 2

/**
 * Crea una función getDateAgo(date, days) que devuelva el día del mes que corresponde, contando la cantidad de días days respecto de la fecha date.
 * Por ejemplo, si hoy es 20, entonces getDateAgo(new Date(), 1) debería ser 19 y getDateAgo(new Date(), 2) debería ser 18.
 * Debe poder funcionar para days=365 o más.
 * La función no debería modificar la fecha date pasada como argumento.
 */
function getDateAgo(date, days){
    const tempDate = new Date(date);
    tempDate.setDate(tempDate.getDate() - days);
    return tempDate.getDate();
}

let date4 = new Date(2015, 0, 2);
console.log(`getDateAgo: ${getDateAgo(date4, 1)}`); // 1, (1 Jan 2015)
console.log(`getDateAgo: ${getDateAgo(date4, 2)}`); // 31, (31 Dec 2014)
console.log(`getDateAgo: ${getDateAgo(date4, 365)}`); // 2, (2 Jan 2014)

/**
 * Escribe una función getLastDayOfMonth(year, month) que devuelva el último día del mes dado. 
 * A veces es 30, 31 o incluso 28/29 para febrero.
 * Parámetros:
 * year – el año en formato de cuatro dígitos, por ejemplo 2012.
 * month – el mes, de 0 a 11.
 * Por ejemplo, getLastDayOfMonth(2012, 1) = 29 (febrero, año bisiesto).
 */
function getLastDayOfMonth(year, month){
    const tempDate = new Date(year, month + 1, 0);
    return tempDate.getDate();
}
console.log(`getLastDayOfMonth: ${getLastDayOfMonth(2012, 1)}`); // 29

/**
 * Escribe una función getSecondsToday() que devuelva la cantidad de segundos transcurridos desde el comienzo del día.
 * Por ejemplo, si en este momento fueran las 10:00 am, sin horario de verano, entonces:
 * getSecondsToday() == 36000 // (3600 * 10)
 * La función debe poder funcionar correctamente cualquier día. Es decir, no debe poseer valores fijos en el código, como por ej. “today”.
 */
function getSecondsToday(){
    const date = new Date();
    const hourSeconds = 3600 * date.getHours();
    const minutesSeconds = 60 * date.getMinutes();    
    return hourSeconds + minutesSeconds + date.getSeconds();
}
console.log(`getSecondsToday: ${getSecondsToday()}`);

/**
 * Crea una función getSecondsToTomorrow() que devuelva la cantidad de segundos que faltan para el día de mañana.
 * Por ejemplo, si ahora son las 23:00, entonces: getSecondsToTomorrow() == 3600
 * La función debe poder funcionar para cualquier día, sin valores fijos en el código como “today”.
 */
function getSecondsToTomorrow(){
    const now = new Date();
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const differ = tomorrow - now; // ms
    return Math.round(differ / 1000); // convert to sec and round it
}
console.log(`getSecondsToTomorrow: ${getSecondsToTomorrow()}`);

/**
 * Escribe una función formatDate(date) que muestre la fecha en el siguiente formato:
 * Si a partir de la fecha date pasó menos de 1 segundo, debe devolver "ahora mismo".
 * De no ser así, si a partir de la fecha date pasó menos de 1 minuto, debe retornar "hace n seg,".
 * De no ser así, si pasó menos de una hora, debe retornar "hace n min.".
 * De no ser así, debe retornar la fecha completa en el formato "DD.MM.AA HH:mm". Es decir: "día.mes.año horas:minutos", cada uno de ellos en formato de 2 dígitos, por ej. 31.12.16 10:00.
 */
function formatDate(date){
    const now = Date.now();
    const differ = Math.round((now - date)/1000); // in seconds
    if (differ < 1){
        return 'ahora mismo';
    }else if (differ < 60){
        return `hace ${differ} seg.`;
    }else if (differ < 3600){
        const minutes = Math.round(differ / 60);
        return `have ${minutes} min.`
    }else{
        return '' + 
            date.getDate().toString().padStart(2, '0') + '.' +
            (date.getMonth() + 1).toString().padStart(2, '0') + '.' +
            date.getFullYear().toString().slice(2) + ' ' +
            date.getHours().toString().padStart(2, '0') + ':' + 
            date.getMinutes().toString().padStart(2, '0');
    }
}
console.log(`formatDate: ${formatDate(new Date(new Date - 1))}`);// "ahora mismo"
console.log(`formatDate: ${formatDate(new Date(new Date - 30 * 1000))}`); // "hace 30 seg."
console.log(`formatDate: ${formatDate(new Date(new Date - 5 * 60 * 1000))}`); // "hace 5 min."
// la fecha de ayer en formato 31.12.16 20:00
console.log(`formatDate: ${formatDate(new Date(new Date - 86400 * 1000))}`);