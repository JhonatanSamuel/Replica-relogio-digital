function upDateClock() {
    const hoursElement = document.querySelector(".hours")
    const minutesElement = document.querySelector(".minutes")
    const secondElement = document.querySelector(".seconds")
  

    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");


    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondElement.textContent = seconds;

}

upDateClock();
setInterval(upDateClock, 1000)