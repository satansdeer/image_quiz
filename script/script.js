//$(".clickArea").click(function(e){console.log("click:", e)});
//$(".clickArea").background = red;

$(document).ready(function() {
    var json = (function() {
        var json = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': "lesson.json",
            'dataType': "json",
            'success': function (data) {
                json = data;
            }
        });
        return json;
    })();

  // $('#question').html(json.questions[0].question)

  $('.imageWrapper').click(function(e) {
      $('#topLeft').attr('src',Math.ceil(Math.random() * 4) + '.svg');
      $('#topRight').attr('src',Math.ceil(Math.random() * 4) + '.svg');
      $('#bottomLeft').attr('src',Math.ceil(Math.random() * 4) + '.svg');
      $('#bottomRight').attr('src',Math.ceil(Math.random() * 4) + '.svg');
  }); 
});