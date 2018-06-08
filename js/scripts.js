//business logic

function range(start, end) {
    var start = 0
    var end = $('#numberInput').val();
    var result = [];
    for (var x = 1; x <= end ; x++) {
        result.push(x);
    }
    return result;
} console.log(range);






















//user interface logic
$(document).ready(function() {
  $("form#range").submit(function(event) {
    event.preventDefault();
    var input = $('#numberInput').val();
    $('#result').text(range);
  });
});
