console.log('connected');
// =============== disable future date ==========//
let inputDate = document.getElementById('date');
inputDate.max = new Date().toISOString().split('T')[0];
