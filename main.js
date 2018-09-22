let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegister = true;
let runnersAge = 18;

if(runnersAge > 18 && earlyRegister)
{ 
 raceNumber += 1000;
} 

if(earlyRegister && runnersAge > 18 ){
  console.log( `Your Race Number is ${raceNumber}  and you will be running at 9:30 AM`);
} else if (runnersAge > 18 && !earlyRegister ){
  console.log(`Your race number is  ${raceNumber}.  Late Adults run at 11:00 am`)
}else if(earlyRegister && runnersAge<18){
  console.log(`Youth registrants run at 12:30pm (regardless of registration). Your race number is ${raceNumber}`)
}else {
  console.log("Please see the registration desk");
}
