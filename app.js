console.log('connected');
// =============== disable future date ==========//
let inputDate = document.getElementById('date');
inputDate.max = new Date().toISOString().split('T')[0];


// ========= get button id ===========//
const button =  document.getElementById('cal-btn');
button.disabled = !inputDate.value;


// ========== check input value -======//

inputDate.addEventListener('input',function () {
    button.disabled = !inputDate.value;
})

// ======== Calculate Birthdate ==========//

const calculateBirthdate =()=>{

// =======> birthDate - currentDate <==========//
    // ========== Get Birthday Date ==========//
const birthDate = new Date(inputDate.value);
console.log(birthDate);
let d1 = birthDate.getDate();
let m1 = birthDate.getMonth()+1;
let y1 = birthDate.getFullYear();
console.log(d1,m1,y1);

// ============ Get Current Date -========//
const currentDate = new Date();
let d2 = currentDate.getDate();
let m2 = currentDate.getMonth() +1;
let y2 = currentDate.getFullYear();

// ========= get year =========//
y3 = y2-y1

// ======== get month ==========//
if (m2>=m1) {
    m3= m2-m1
}
else{
    y3--;
    m3= 12+(m2-m1)
}

// ========= get days ========//

if (d2>=d1) {
    d3 = d2-d1;
}
else{
  m3--;
    d3 = getMonthDay(y1,m1) + (d2-d1)
}

if (m3<0) {
    m3 = 12 + m3;
  y3--;
}

// ================== result text =============//
const resultText = document.getElementById('result');
resultText.innerHTML=`You are <span>${y3}</span> years, <span>${m3}</span> months, and <span>${d3}</span> days old.`;
}

// ============= get last date of the month ==========//

const getMonthDay =(year,month)=>{
    return new Date(year,month,0).getDate();
}
