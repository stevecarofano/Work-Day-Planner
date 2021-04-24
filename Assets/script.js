var currentDay = document.getElementById('currentDay');
var m = moment();
    // Checking if current moment works
    console.log(m.toString());

    // Getting data for today's date
function getHeaderDate() {
    var currentHeaderDate = moment().format('dddd, MMMM Do');
    // Logging currentHeaderDate to verify
    console.log(currentHeaderDate);
    currentDay.textContent = "Today is " + currentHeaderDate;
}

var saveBtn = document.querySelector('.saveBtn');
saveBtn.onclick = saveData;

function saveData(){
  var input = document.querySelector(".form-control");
  localStorage.setItem("text", input.value);
  // Checking input value
  console.log(input.value);
  localStorage.getItem("text");
}

window.onload = getHeaderDate();