// global vars
var rt1 = 0;
var rt2 = 0;
var rt3 = 0;
var rt4 = 0;
var rt5 = 0;
var rt6 = 0;
var rt7 = 0;
var rt8 = 0;
var rt9 = 0;
var rt10 = 0;
var dir = "none";
var keyPress = "none";
var whichTest = "0";

//set up elements of the timer
var myTime = new Date();
var starTime = myTime.getTime();
var endTime = myTime.getTime();

//preload images
if (document.images){
  img = new Array();
  img[1]=new Image(); img[1].src="static/cross.jpg";
  img[2]=new Image(); img[2].src="static/leftarrow.jpg";
  img[3]=new Image(); img[3].src="static/rightarrow.jpg";
}

//start
function startOver(){
  whichTest = "0";
  rt1 = 0;
  rt2 = 0;
  rt3 = 0;
  rt4 = 0;
  rt5 = 0;
  rt6 = 0;
  rt7 = 0;
  rt8 = 0;
  rt9 = 0;
  rt10 = 0;

  $('#left').attr('src', "");
  $('#right').attr('src', "");
  setTimeout(function() {
    test1();
  }, 1000);
}

function test1(){
  setTimeout(function() {
    flashArrow();
    whichTest = "1";
  },(Math.random()*3000) + 3000);
}

function test1Recap(){
  whichTest = "0";
  myTime = new Date();
  endTime = myTime.getTime();
  $('#left').attr('src', "");
  $('#right').attr('src', "");
  rt1 = (endTime - starTime)/1000;
  if (keyPress == dir) {
    $('#accuracy1').html("correct");
  } else {
    $('#accuracy1').html("incorrect");
  }
  $('#value1').html(rt1.toString());
  setTimeout(function() {
    test2();
  } ,2000);
}

function test2(){
  setTimeout(function() {
    flashArrow();
    whichTest = "2";
  },(Math.random()*3000) + 3000);
}

function test2Recap(){
  whichTest = "0";
  myTime = new Date();
  endTime = myTime.getTime();
  $('#left').attr('src', "");
  $('#right').attr('src', "");
  rt2 = (endTime - starTime)/1000;
  if (keyPress == dir) {
    $('#accuracy2').html("correct");
  } else {
    $('#accuracy2').html("incorrect");
  }
  $('#value2').html(rt2.toString());
  setTimeout(function() {
    test3();
  } ,2000);
}

function test3(){
  setTimeout(function() {
    flashArrow();
    whichTest = "3";
  },(Math.random()*3000) + 3000);
}

function test3Recap(){
  whichTest = "0";
  myTime = new Date();
  endTime = myTime.getTime();
  $('#left').attr('src', "");
  $('#right').attr('src', "");
  rt3 = (endTime - starTime)/1000;
  if (keyPress == dir) {
    $('#accuracy3').html("correct");
  } else {
    $('#accuracy3').html("incorrect");
  }
  $('#value3').html(rt3.toString());
  setTimeout(function() {
    test4();
  } ,2000);
}

function test4(){
  setTimeout(function() {
    flashArrow();
    whichTest = "4";
  },(Math.random()*3000) + 3000);
}

function test4Recap(){
  whichTest = "0";
  myTime = new Date();
  endTime = myTime.getTime();
  $('#left').attr('src', "");
  $('#right').attr('src', "");
  rt4 = (endTime - starTime)/1000;
  if (keyPress == dir) {
    $('#accuracy4').html("correct");
  } else {
    $('#accuracy4').html("incorrect");
  }
  $('#value4').html(rt4.toString());
  setTimeout(function() {
    test5();
  } ,2000);
}

function test5(){
  setTimeout(function() {
    flashArrow();
    whichTest = "5";
  },(Math.random()*3000) + 3000);
}

function test5Recap(){
  whichTest = "0";
  myTime = new Date();
  endTime = myTime.getTime();
  $('#left').attr('src', "");
  $('#right').attr('src', "");
  rt5 = (endTime - starTime)/1000;
  if (keyPress == dir) {
    $('#accuracy5').html("correct");
  } else {
    $('#accuracy5').html("incorrect");
  }
  $('#value5').html(rt5.toString());
  setTimeout(function () {
    test6();
  }, 2000);
}

function test6() {
  setTimeout(function() {
    flashArrow();
    whichTest = "6";
  },(Math.random()*3000) + 3000);
}

function test6Recap(){
  whichTest = "0";
  myTime = new Date();
  endTime = myTime.getTime();
  $('#left').attr('src', "");
  $('#right').attr('src', "");
  rt6 = (endTime - starTime)/1000;
  if (keyPress == dir) {
    $('#accuracy6').html("correct");
  } else {
    $('#accuracy6').html("incorrect");
  }
  $('#value6').html(rt6.toString());
  setTimeout(function(){
    test7();
  }, 2000);
}

function test7() {
  setTimeout(function() {
    flashArrow();
    whichTest = "7";
  },(Math.random()*3000) + 3000);
}

function test7Recap(){
  whichTest = "0";
  myTime = new Date();
  endTime = myTime.getTime();
  $('#left').attr('src', "");
  $('#right').attr('src', "");
  rt7 = (endTime - starTime)/1000;
  if (keyPress == dir) {
    $('#accuracy7').html("correct");
  } else {
    $('#accuracy7').html("incorrect");
  }
  $('#value7').html(rt7.toString());
  setTimeout(function(){
    test8();
  }, 2000);
}

function test8() {
  setTimeout(function() {
    flashArrow();
    whichTest = "8";
  },(Math.random()*3000) + 3000);
}

function test8Recap(){
  whichTest = "0";
  myTime = new Date();
  endTime = myTime.getTime();
  $('#left').attr('src', "");
  $('#right').attr('src', "");
  rt8 = (endTime - starTime)/1000;
  if (keyPress == dir) {
    $('#accuracy8').html("correct");
  } else {
    $('#accuracy8').html("incorrect");
  }
  $('#value8').html(rt8.toString());
  setTimeout(function(){
    test9();
  }, 2000);
}

function test9() {
  setTimeout(function() {
    flashArrow();
    whichTest = "9";
  },(Math.random()*3000) + 3000);
}

function test9Recap(){
  whichTest = "0";
  myTime = new Date();
  endTime = myTime.getTime();
  $('#left').attr('src', "");
  $('#right').attr('src', "");
  rt9 = (endTime - starTime)/1000;
  if (keyPress == dir) {
    $('#accuracy9').html("correct");
  } else {
    $('#accuracy9').html("incorrect");
  }
  $('#value9').html(rt9.toString());
  setTimeout(function(){
    test10();
  }, 2000);
}

function test10() {
  setTimeout(function() {
    flashArrow();
    whichTest = "10";
  },(Math.random()*3000) + 3000);
}

function test10Recap(){
  whichTest = "0";
  myTime = new Date();
  endTime = myTime.getTime();
  $('#left').attr('src', "");
  $('#right').attr('src', "");
  rt10 = (endTime - starTime)/1000;
  if (keyPress == dir) {
    $('#accuracy10').html("correct");
  } else {
    $('#accuracy10').html("incorrect");
  }
  $('#value10').html(rt10.toString());
  setTimeout(function(){
    $('#clear').css('visibility', 'visible');
    $('#left').attr('src', img[2].src);
    $('#right').attr('src', img[3].src);
  }, 100);
}

//function triggered by arrow key press
function buttClicked(){
if (whichTest == "1"){
  test1Recap();
} else {}

if (whichTest == "2"){
  test2Recap();
} else {}

if (whichTest == "3"){
  test3Recap();
} else {}

if (whichTest == "4"){
  test4Recap();
} else {}

if (whichTest == "5"){
  test5Recap();
} else {}

if (whichTest == "6"){
  test6Recap();
} else {}

if (whichTest == "7"){
  test7Recap();
} else {}

if (whichTest == "8"){
  test8Recap();
} else {}

if (whichTest == "9"){
  test9Recap();
} else {}

if (whichTest == "10"){
  test10Recap();
} else {}

if (whichTest == "11"){
  startOver();
} else {}
}

//flashes arrow on screen
function flashArrow(){
  var randnumber = Math.floor(Math.random() * 2);
  if (randnumber === 0) {
    dir = "left";
    $('#left').attr('src', img[2].src);
  } else if (randnumber === 1) {
    dir = "right";
    $('#right').attr('src', img[3].src);
  }
  myTime = new Date();
  starTime = myTime.getTime();
  document.onkeydown = checkKey;
}

//keydown capture
function checkKey(e){
  e = e || window.event;
  if (e.keyCode == '37') {
    keyPress = "left";
  } else if (e.keyCode == '39') {
    keyPress = "right";
  }
  buttClicked();
}
//-->
