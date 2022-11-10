let myfun = () => {
const ph = document.getElementById("phy").value;
const bi = document.getElementById("bio").value;
const en = document.getElementById("eng").value;
const co = document.getElementById("comp").value;
let grades = "";

let totalGrades =
  parseFloat(ph) + parseFloat(bi) + parseFloat(en) + parseFloat(co);



let perc = (totalGrades / 400) * 100;


if(perc <= 100 && perc >= 80){
    grades = 'A';
}
else if(perc <= 79 && perc >= 60){
    grades = 'B';
}
else if(perc <= 59 && perc >= 40){
    grades = 'C';
}
else{
    grades = 'F';
   
}
document.getElementById('show-numbers').innerHTML = `Your Total number
is ${totalGrades} Your Percentage is ${perc} Your Grade is ${grades}.`
}


