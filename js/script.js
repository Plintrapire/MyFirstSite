

$(document).ready(function(){

 $(".menu").click(function(){ 
    $(".podpunkt").slideToggle(1000);
  });

  $(".reg").click(function(){ 
    $(".sign-obc").css("display","none");
    $(".register").slideToggle(1000)
  });

  $(".sign").click(function(){ 
    $(".register").css("display","none");
    $(".sign-obc").slideToggle(1000)
  });

  $(".car1-obc").click(function(){
   $(".car1-obc-xar").slideToggle(1000);
  }); 


  $(".car2-obc").click(function(){ 
   $(".car2-obc-xar").slideToggle(1000);
  });
});

function melp2 () {
  alert("Спасибо");
}

