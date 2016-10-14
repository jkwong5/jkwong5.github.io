window.onload = function(){
  today = new Date();
  if(today.getHours() >= 0 && today.getHours() < 12){
    document.getElementById("greeting").innerHTML = 'Good Morning,';
  }
  else if(today.getHours() >= 12 && today.getHours() < 18){
    document.getElementById("greeting").innerHTML = 'Good Afternoon,';
  }
  else {
    document.getElementById("greeting").innerHTML = 'Good Morning,';
  }
};
