//business logic
function range(input) {
    var result = [];
    for (var x = 1; x <= input ; x++) {
      var stringx = String(x)
      if (x%3 == 0) {
        result.push("I'm sorry, Dave. I'm afraid I can't do that.")
      }else if (stringx.startsWith(1))  {
        result.push("Boop!")
      } else if (stringx.includes(0)) {
        result.push("Beep")
      }else{
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
    $('#result').text(range(input));
  })
});
