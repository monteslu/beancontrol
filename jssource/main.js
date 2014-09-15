'use strict';

var _ = require('lodash');

var buttons = {
  btnA0 : {pin: 18, state: 0, label: 'A0'},
  btnA1 : {pin: 19, state: 0, label: 'A1'},
  btn2 : {pin: 10, state: 0, label: '2'},
  btn3 : {pin: 11, state: 0, label: '3'},
  btn4 : {pin: 12, state: 0, label: '4'},
  btn5 : {pin: 13, state: 0, label: '5'},
};

function launchBt(){
  var beanio = require('bean-io');

  var btstatus = document.getElementById('btstatus');

  btstatus.innerHTML = 'connecting...';

  var board = new beanio.Board({
    timeout: 60000 //optional - defaults to 30 seconds
    // uuid: 'myUuid' //optional - will use first bean found
  });

  board.on("ready", function() {
    console.log("CONNECTED");
    window.board = board;

    btstatus.innerHTML = 'Connected to: ' + board.beanPeripheral.uuid;

    var buttonPanel = document.getElementById('buttonPanel');

    _.forOwn(buttons, function(val, key){
      board.pinMode(val.pin, board.MODES.OUTPUT);
      var btn = document.createElement("button");
      btn.className = 'btn0';
      btn.innerHTML= val.label;
      btn.addEventListener('click', function() {
        console.log('clicked', key);
        val.state ^= 1;
        board.digitalWrite(val.pin, val.state);
        btn.className = 'btn' + val.state;
      }, false);
      buttonPanel.appendChild(btn);
    });
  });

}

window.launchBt = launchBt;
