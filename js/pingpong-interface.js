var Calculator = require('./../js/pingpong.js').calculatorModule

$(document).ready(function() {
  $('#ping-pong-form').submit(function (e) {
    e.preventDefault();
    var goal = $('#goal').val();
    var myCalculator = new Calculator("hot pink")
    var output = myCalculator.pingPong(goal);
    output.forEach(function (item) {
      $('#solution').append("<li>" + item + "</li>");
    });
  });
});
