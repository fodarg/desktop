setInterval(function recalcodds() {

var odds1 ;
var odds2 ;
var odds3, odds4, odds5, odds6, odds7, odds8, odds9, odds10 ;

odds1 = parseFloat(document.form1.textfield1.value);
odds2 = parseFloat(document.form1.textfield2.value);
odds3 = parseFloat(document.form1.textfield3.value);
odds4 = parseFloat(document.form1.textfield4.value);


if (odds1 - odds1 != 0) {odds1 = 0;}
if (odds2 - odds2 != 0) {odds2 = 0;}
if (odds3 - odds3 != 0) {odds3 = 0;}
if (odds4 - odds4 != 0) {odds4 = 0;}
if (odds5 - odds5 != 0) {odds5 = 0;}
if (odds6 - odds6 != 0) {odds6 = 0;}
if (odds7 - odds7 != 0) {odds7 = 0;}
if (odds8 - odds8 != 0) {odds8 = 0;}
if (odds9 - odds9 != 0) {odds9 = 0;}
if (odds10 - odds10 != 0) {odds10 = 0;}

document.form1.returncash.value = odds10 / odds9 ;

// Calculate probabilities

var prob1, prob2, prob3, prob4, prob5, prob6, prob7, prob8, prob9, prob10 , totprob;
prob1 = 1/odds1 ;
if (prob1 > 20) {prob1 = 0};
prob2 = 1/odds2 ;
if (prob2 > 20) {prob2 = 0};
prob3 = 1/odds3 ;
if (prob3 > 20) {prob3 = 0};
prob4 = 1/odds4 ;
if (prob4 > 20) {prob4 = 0};
prob5 = 1/odds5 ;
if (prob5 > 20) {prob5 = 0};
prob6 = 1/odds6 ;
if (prob6 > 20) {prob6 = 0};
prob7 = 1/odds7 ;
if (prob7 > 20) {prob7 = 0};
prob8 = 1/odds8 ;
if (prob8 > 20) {prob8 = 0};
prob9 = 1/odds9 ;
if (prob9 > 20) {prob9 = 0};
prob10 = 1/odds10 ;
if (prob10 > 20) {prob10 = 0};

totprob = prob1 + prob2 + prob3 + prob4 + prob5 + prob6 + prob7 + prob8 + prob9 + prob10;

document.form1.prob1.value = Math.round( (100*(prob1))*100)/100;
document.form1.prob2.value = Math.round( (100*(prob2))*100)/100;
document.form1.prob3.value = Math.round( (100*(prob3))*100)/100;
document.form1.prob4.value = Math.round( (100*(prob4))*100)/100;


// Calculate the overallodds column
var sumChoices ;
sumChoices = Math.round( (1/(totprob))*100)/100;
document.form1.overallodds.value = sumChoices;
// *******************************

// Calculate returnCash
var returncashval;
returncashval = (parseFloat(document.form1.totalstake.value) * (sumChoices - 1)) + parseFloat(document.form1.totalstake.value);
document.form1.returncash.value =Math.round( ( parseFloat(document.form1.totalstake.value) * (sumChoices - 1) + parseFloat(document.form1.totalstake.value))*100)/100;
// *******************************

//Calculate Stakes
document.form1.stake1.value =  Math.round((returncashval / odds1)*100)/100 ;
document.form1.stake2.value =  Math.round((returncashval / odds2)*100)/100 ;
document.form1.stake3.value =  Math.round((returncashval / odds3)*100)/100 ;
document.form1.stake4.value =  Math.round((returncashval / odds4)*100)/100 ;



document.form1.profit.value = Math.round((returncashval - document.form1.totalstake.value)*100)/100 ;

// *******************************

}, 100);