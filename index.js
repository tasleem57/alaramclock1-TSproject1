//  Day date Alarm Setting js
var alarmSound = new Audio();
alarmSound.src = "https://assets.codepen.io/78749/fantasy_alarm_clock.mp3";

var alarmTimer;
function setAlarm(button) {
  var ms = document.getElementById("alarmTime").valueAsNumber;
  if (isNaN(ms)) {
    alert("Invalid Date");
    return;
  }
  var alarm = new Date(ms);
  var alarmTime = new Date(
    alarm.getUTCFullYear(),
    alarm.getUTCMonth(),
    alarm.getUTCDate(),
    alarm.getUTCHours(),
    alarm.getUTCMinutes(),
    alarm.getUTCSeconds()
  );
  var differenceInMs = alarmTime.getTime() - new Date().getTime();
  if (differenceInMs < 0) {
    alert("Specified time is already passed");
    return;
  }
  alarmTimer = setTimeout(initAlarm, differenceInMs);
  button.innerText = "Cancel Alarm";
  button.setAttribute("onclick", "cancelAlarm(this);");
}

function cancelAlarm(button) {
  clearTimeout(alarmTimer);
  button.innerText = "Set Alarm";
  button.setAttribute("onclick", "setAlarm(this);");
}

function initAlarm() {
  alarmSound.play();
  document.getElementById("alarmOptions").style.display = "";
}

function stopAlarm() {
  alarmSound.pause();
  alarmSound.currentTime = 0;
  document.getElementById("alarmOptions").style.display = "none";
  cancelAlarm(document.getElementById("alarmButton"));
}

function snooze() {
  stopAlarm();
  alarmTimer = setTimeout(initAlarm, 300000); // 5 * 60 * 1000 = 5 Minutes
}
setInterval(() => {
  d = new Date(); //object of date()
  hr = d.getHours();
  min = d.getMinutes();
  sec = d.getSeconds();
  hr_rotation = 30 * hr + min / 2; //converting current time
  min_rotation = 6 * min;
  sec_rotation = 6 * sec;

  hour.style.transform = `rotate(${hr_rotation}deg)`;
  minute.style.transform = `rotate(${min_rotation}deg)`;
  second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);
