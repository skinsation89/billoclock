let wakeuptime = 7;
let noon = 12;
let lunchtime = 12;
let naptime = lunchtime + 2;
let partytime;
let evening = 18;

//Show current time on page
const showCurrentTime = () => {

  //display the string on the webpage
  const clock = document.getElementById('clock');

  let currentTime = new Date();

  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  let meridian = "AM";

  //Set hours
  if(hours >= noon) {
    meridian = "PM";
  }

  if(hours > noon) {
    hours = hours - 12
  }

  //Set minutes
  if(minutes < 10) {
    minutes = "0" + minutes;
  }

  //Set seconds
  if(seconds < 10) {
    seconds = "0" + seconds;
  }

  //put together the string that displays the time
  let clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian

  clock.innerText = clockTime;
};

//Getting clock to increment on it's own and change out messages and pictures
const updateClock = () => {
  let time = new Date().getHours();
  let messageText;
  let image = "https://tse1.mm.bing.net/th?id=OIP.Qk8zD_1n_R8rA-iOBflg4AHaFj&pid=Api&rs=1&c=1&qlt=95&w=160&h=120";

  const timeEventJS = document.getElementById('timeEvent');
  const billImageJs = document.getElementById('billImage');

  if(time === partytime) {
    image = "https://tse2.mm.bing.net/th?id=OIP.daiEEB8X3BmU0qWX_4L1mgHaE8&pid=Api&P=0&w=240&h=161";
    messageText = "Nobody's every gonna believe you."
  }
  else if(time === wakeuptime) {
    image = "https://tse2.mm.bing.net/th?id=OIP.XoizPMATBwo3wdhvFvD4_QHaE7&pid=Api&P=0&w=231&h=155";
    messageText = "Don't forget your booties because it's cold out there today."
  }
  else if(time === lunchtime) {
    image = "https://tse1.mm.bing.net/th?id=OIP.cNGADCLOPKlmWpJLsAKc1QHaD_&pid=Api&P=0&w=313&h=169";
    messageText = "Smissh isshhh ugghhh gooo saannwiiisssh";
  }
  else if(time === naptime) {
    image = "https://tse2.mm.bing.net/th?id=OIP.exSosOhpQDN9sa0Sgbib_wHaDZ&pid=Api&P=0&w=334&h=154";
    messageText = "zzzzzzzzz";
  }
  else {
    image = "https://tse1.mm.bing.net/th?id=OIP.SMN04_vlEA4k5lK5XHEeqAHaEo&pid=Api&P=0&w=261&h=164";
    messageText = "Happy Groundhog Day";
  }

  console.log(messageText);
  timeEventJS.innerText = messageText;
  billImage.src = image;

  showCurrentTime();
}

updateClock();

//Getting the clock to increment once a second
const oneSecond = 1000;
setInterval(updateClock, oneSecond);

//Getting the party time button to work
const partyButton = document.getElementById('partyTimeButton');

const partyEvent = () => {
  if(partytime < 0) {
    partytime = new Date().getHours();
    partyButton.innerText = "Party Over!";
    partyButton.style.backgroundColor = "dodgerblue";
  }
  else {
    partytime = -1;
    partyButton.innerText = "Party Time!";
    partyButton.style.backgroundColor = "crimson";
  }
};

partyButton.addEventListener('click', partyEvent);

//Activates Wake up selector
const wakeUpTimeSelector = document.getElementById('wakeUpTimeSelector');

const wakeUpEvent = () => {
  wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener('change', wakeUpEvent);

//Activates lunch time selector
const lunchTimeSelector = document.getElementById('lunchTimeSelector');

const lunchTimeEvent = () => {
  lunchtime = lunchTimeSelector.value;
}

lunchTimeSelector.addEventListener('change', lunchTimeEvent);

//Activates nap time selector
const napTimeSelector = document.getElementById('napTimeSelector');

const napTimeEvent = () => {
  naptime = napTimeSelector.value;
}

napTimeSelector.addEventListener('change', napTimeEvent);
