//business logic

function range(start, end) {
    var start = 0
    var boop = "Boop!"
    var end = $('#numberInput').val();
    var result = [];
    for (var x = 1; x <= end ; x++) {
      if (x === 0)  {
        result.push("Boop!")
      } else if (x === 10) {
        result.push("Boop!")
      } else if (x === 11) {
        result.push("Boop!")
      } else if (x%3 === 0) {
        result.push("I'm sorry, Dave. I'm afraid I can't do that.")
      } else if (x%10 === 0) {
        result.push("Beep!")
      } else if (x%10 === 1) {
        result.push("Boop!")
      } else {
        result.push(x);
      }

    }
    return result;
  };




//user interface logic
$(document).ready(function() {
  $("form#range").submit(function(event) {
    event.preventDefault();
    var input = $('#numberInput').val();
    $('#result').text(range);
  })
});
