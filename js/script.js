$(document).ready(function(){
  let timershow = 2500;
  let rand = null;
  let timerhide = 1500;
  let score = 0;
  let gameOn = false;
  let path = "C:/Ohjelmointi/Javascript/nopeuspeli"
  const ylos = 0;
  const vasen = 1;
  const alas = 2;
  const oikea = 3;
  
  
  $("#start").click(function(){
    
      if(!gameOn){
        gameOn=true;
        setInterval(main, timershow);
      }
      else{
        return;//lopettaa pelin
      }
      
  });
  
    
  $("#stop").click(function(){
    location.reload();
    
  });
  
    
  


  $(document).keydown(function(e) {
    if(e.which == 37) {
      console.log("painoit vasen");
      left(vasen);
    }
    else if(e.which == 38){
      console.log("painoit ylös");
      up(ylos);
    }
    else if(e.which == 39){
      console.log("painoit oikea");
      rigth(oikea);
    }
    else if(e.which == 40){
      console.log("painoit alas");
      down(alas);
    }
    else if (e.which == 13){
      console.log("painoit enter");
    }
  });
  //-----ylös
  

  $("#key-up").click(function(){ 
    up(ylos);
  });

  $("#key-down").click(function(){ 
    down(alas);
  });

  $("#key-left").click(function(){ 
    left(vasen);
  });
  $("#key-rigth").click(function(){ 
    rigth(oikea);
  });


  function down(value){
    if(rand == value){
      addScore();
    }
    else{
      removeScore();
    }
  }
  function up(value){
    if(rand == value){
      addScore();
    }
    else{
      removeScore();
    }
  }
  function left(value){
    if(rand == value){
      addScore();
    }
    else{
      removeScore();
    }
  }
  function rigth(value){
    if(rand == value){
      addScore();
    }
    else{
      removeScore();
    }
  }
  
      
  function main(){
    console.log("main: gameon status " + gameOn );
    
    $("#pisteet").text(score);
    $("#score-board").css("background-color", "coral");
    
    if(score > 10){
      return gameOn = true;
    }
    rand = Math.floor(Math.random() * 3);
    timershow *= 0.90;//nopeutta lisätään kertomalla alle yhden
    timerhide *= 0.95; //nopeutta lisätään kertomalla alle yhden
    $(".nappi").eq(rand).addClass("active");
    setTimeout(clear, timerhide )
    
    
  }

  function clear(){
    rand = 0;
    $(".nappi").removeClass("active");
  }
  
  function addScore(){
    console.log("score");
    score+=1;
    rand = 0; //nollataan rand jottei pisteitä pysty spämmäämään ekan kerran jälkeen
    $(".nappi").removeClass("active");
    $("#score-board").css("background-color", "green");
    
    $("#pisteet").text(score);
  }
  function removeScore(){
    //gameOn = false;
    console.log("not score")
    score-=1;
    $("#pisteet").text(score);
    $("#score-board").css("background-color", "red");
  }




});