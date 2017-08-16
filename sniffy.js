// global variables
var rt;
var lever;
var starTime;
var time1 = 12779;
var time2 = 17050;
var time3 = 19686;
var time4 = 22288;
var time5 = 24924;
var time6 = 27560;
var time7 = 33133;
var time8 = 35769;
var time9 = 38371;
var time10 = 41074;
var keyTime;

function startOver() {
  $('#video').get(0).play();
  startTest();
  $('#video').on('ended', function() {
    $('#clear').css('visibility', 'visible');
  });
}

function startTest() {
  starTime = new Date().getTime();
  eventCapture();
}

function eventCapture() {
  document.onkeydown = checkKey;
}

function checkKey(e) {
  e = e || window.event;
  if (e.keyCode == '32') {
    if (e.stopPropagation) {
      e.stopPropagation();
      e.preventDefault();
    }
    buttClicked();
  } else {
    eventCapture();
  }
}

function buttClicked() {
  keyTime = new Date().getTime() - starTime;
  recordTime();
}

function recordTime() {
  if (keyTime > time1 - 1000 && keyTime < time1 + 1000) {
    rt = (keyTime - time1)/1000;
    lever = '1';
    updateTable();
  } else if (keyTime > time2 - 1000 && keyTime < time2 + 1000) {
    rt = (keyTime - time2)/1000;
    lever = '2';
    updateTable();
  } else if (keyTime > time3 - 1000 && keyTime < time3 + 1000) {
    rt = (keyTime - time3)/1000;
    lever = '3';
    updateTable();
  } else if (keyTime > time4 - 1000 && keyTime < time4 + 1000) {
    rt = (keyTime - time4)/1000;
    lever = '4';
    updateTable();
  } else if (keyTime > time5 - 1000 && keyTime < time5 + 1000) {
    rt = (keyTime - time5)/1000;
    lever = '5';
    updateTable();
  } else if (keyTime > time6 - 1000 && keyTime < time6 + 1000) {
    rt = (keyTime - time6)/1000;
    lever = '6';
    updateTable();
  } else if (keyTime > time7 - 1000 && keyTime < time7 + 1000) {
    rt = (keyTime - time7)/1000;
    lever = '7';
    updateTable();
  } else if (keyTime > time8 - 1000 && keyTime < time8 + 1000) {
    rt = (keyTime - time8)/1000;
    lever = '8';
    updateTable();
  } else if (keyTime > time9 - 1000 && keyTime < time9 + 1000) {
    rt = (keyTime - time9)/1000;
    lever = '9';
    updateTable();
  } else if (keyTime > (time10 - 1000) && keyTime < time10 + 1000) {
    rt = (keyTime - time10)/1000;
    lever = '10';
    updateTable();
  } else if (keyTime > 43000) {
    // do nothing
  } else {
    lever = "n/a";
    rt = "incorrect";
    updateTable();
  }
}

function updateTable() {
  $('#table').append(
    '<tr><td>'+lever+'</td><td>'+rt+'</td></tr>'
  );
  eventCapture();
}
