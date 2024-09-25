document.addEventListener("DOMContentLoaded", function () {
  let isClockRunning = false;
  let timerID;

  // niit clock run hiij baigaa hugatsaa
  let totalMilliseconds = 0;

  const startButton = document.getElementById("start");
  const stopButton = document.getElementById("stop");
  const resetButton = document.getElementById("reset");

  function formatTime(time) {
    if (time < 10) {
      return `0${time}`;
    } else {
      return time;
    }
  }

  function stopTimer() {
    isClockRunning = false;
    clearInterval(timerID);
  }

  startButton.addEventListener("click", function () {
    // if clock is not running --> isClockRunning = false
    if (!isClockRunning) {
      isClockRunning = true;

      timerID = setInterval(function () {
        // timer ni 10 milliseconds tutams negeer nemj bgaa -->
        totalMilliseconds++;
        const timerInSeconds = totalMilliseconds / 100;

        const hours = Math.floor(timerInSeconds / 3600);
        const minutes = Math.floor((timerInSeconds % 3600) / 60);
        const seconds = Math.floor(timerInSeconds % 60);
        const milliseconds = totalMilliseconds % 100;

        document.getElementById("hours").innerText = formatTime(hours);
        document.getElementById("minutes").innerText = formatTime(minutes);
        document.getElementById("seconds").innerText = formatTime(seconds);
        document.getElementById("milliseconds").innerText =
          formatTime(milliseconds);
      }, 10);
    }
  });

  stopButton.addEventListener("click", function () {
    if (isClockRunning) {
      stopTimer();
    }
  });

  resetButton.addEventListener("click", function () {
    if (isClockRunning) {
      stopTimer();
    }

    totalMilliseconds = 0;
    document.getElementById("hours").innerText = "00";
    document.getElementById("minutes").innerText = "00";
    document.getElementById("seconds").innerText = "00";
    document.getElementById("milliseconds").innerText = "00";
  });
});
