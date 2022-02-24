window.addEventListener("load", () => {
  const secondHand = document.querySelector(".second-hand");
  const minuteHand = document.querySelector(".min-hand");
  const hourHand = document.querySelector(".hour-hand");

  const setDate = () => {
    const now = new Date();
    // now looks like Sun Feb 06 2022 18:26:52 GMT-0500 (Eastern Standard Time)
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    // seconds
    const secondsDegree = (seconds / 60) * 360 + 90 + 360;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;

    // minutes
    const minutesDegree = (minutes / 60) * 360 + 90;
    minuteHand.style.transform = `rotate(${minutesDegree}deg)`;

    // hours
    const hoursDegree = (hours / 12) * 360 + 90;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;

    // formatTime comes the date and the time
    const formatTime = `${now.toDateString()}`;

    // displays the date and time as a string
    document.getElementById("digital-date").innerHTML = formatTime;

    // time stringifies the hour/minute/second and add leading zero to make it 2 digits
    const time = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    document.getElementById("digital-time").innerHTML = time;
  };

  // calls the function every second
  setInterval(setDate, 1000);
});
