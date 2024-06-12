const getloginbtn=document.querySelector(".login");
const getsignupbtn=document.querySelector(".signup");
const userlogin=document.querySelector(".userlogin");
const usersignup=document.querySelector(".usersignup");
const bookflight=document.querySelector("#book-flight");
const flightstatus=document.querySelector("#flight-status");
const locationdata=document.querySelector("#location");
var statesdata=document.querySelector(".statesdata");
function validateForm() {
    var tripType = document.getElementById('trip-type').value;
    var location = document.getElementById('location').value;
    var destination = document.getElementById('destination').value;
    var startDate = document.getElementById('start-date').value;
    var endDate = document.getElementById('end-date').value;

    console.log(tripType,location,destination,startDate,endDate);

    if (location && destination && startDate && (tripType === 'one-way' || (tripType === 'round-trip' && endDate))) {
        window.location.href = 'flights.html';
    } else {
        alert('Please fill in all the required fields.');
    }



}

var resultdata;
var flag=false;
var flag2=false;
var flag3=false;
function showloginpage(){
    if(!flag){
        flag=true; 
        flag2=false; 
        userlogin.classList.add("active");
        usersignup.classList.remove("active");
    }
    else{
        flag=false;
        userlogin.classList.remove("active");
    }
}

function showusersignup(){
    if(!flag2){
        flag=false;
        flag2=true;
        userlogin.classList.remove("active");  
        usersignup.classList.add("active");
    }
    else{
        flag2=false;
        usersignup.classList.remove("active");
    }
}
bookflight.addEventListener("click",function(){
    bookflight.classList.add("active1");
    flightstatus.classList.remove("active1");
})

flightstatus.addEventListener("click",function(){
    flightstatus.classList.add("active1");
    bookflight.classList.remove("active1");
})

async function getrecommendations(searchdata){
    const data=await fetch(`https://api.locationiq.com/v1/autocomplete?key=pk.7fec7807f027c8246233c0a2256227e8&q=${searchdata}&limit=5&dedupe=1&`);
    const realtimedata=await data.json();
    statesdata.innerHTML="";

    realtimedata.map((data)=>{
        const newdiv=document.createElement("div");
        newdiv.textContent=data?.display_address;
        statesdata.appendChild(newdiv);
        console.log(data?.display_address)
    })
}

function getrecommentdata(){
    getrecommendations(locationdata.value);
}

function togglePassengerClass() {
    const menu = document.getElementById('passenger-class-menu');
    menu.classList.toggle('active');
}

function increment(type) {
    const countElement = document.getElementById(`${type}-count`);
    let count = parseInt(countElement.textContent);
    count++;
    countElement.textContent = count;
    updatePassengerClassText();
}

function decrement(type) {
    const countElement = document.getElementById(`${type}-count`);
    let count = parseInt(countElement.textContent);
    if (count > 0) {
        count--;
        countElement.textContent = count;
        updatePassengerClassText();
    }
}

function selectClass(travelClass) {
    const buttons = document.querySelectorAll('.travel-class button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    const selectedButton = buttons.namedItem(travelClass);
    selectedButton.classList.add('active');
    updatePassengerClassText();
}

function updatePassengerClassText() {
    const adults = document.getElementById('adults-count').textContent;
    const children = document.getElementById('children-count').textContent;
    const infants = document.getElementById('infants-count').textContent;
    const travelClass = document.querySelector('.travel-class button.active').textContent;

    let text = `${adults} Guest`;
    if (parseInt(children) > 0) text += `, ${children} Child`;
    if (parseInt(infants) > 0) text += `, ${infants} Infant`;
    text += ` ${travelClass}`;

    const button = document.querySelector('#passenger-class-dropdown button');
    button.textContent = text;
}
