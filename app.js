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

    // ========== Get Birthday Date ==========//
const birthDate = new Date(inputDate.value);
console.log(birthDate);
let d1 = birthDate.getDate();
let m1 = birthDate.getMonth()+1;
let y1 = birthDate.getFullYear();
console.log(d1,m1,y1);

// ============ Get Current Date -========//
const currentDate = new Date();
    



}
