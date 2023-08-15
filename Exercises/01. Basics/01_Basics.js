/**
 * Write a JavaScript program to display the current day and time in the following format.  
Sample Output : 
Today is : Tuesday.
Current time is : 10 PM : 30 : 38
 */

const displayCurrentDate = () => { 
    const date = new Date();
    const weekday = date.toLocaleString("en", options={ weekday: "long" });
    const hours = date.toLocaleTimeString("en", options={ hour: '2-digit', hour12: true });
    const minutes = date.toLocaleTimeString("en", options={minute: '2-digit' });
    const seconds = date.toLocaleTimeString("en", options={ second: '2-digit' });
    return `Today is: ${weekday}\nCurrent time is: ${hours} : ${minutes} : ${seconds}`;
};
console.log(displayCurrentDate());