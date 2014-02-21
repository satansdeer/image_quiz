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
   $('.imageWrapper').mouseenter(function() {
      $(this).animate({
          "background-size": 85
      });
   });
   $('.imageWrapper').mouseleave(function() {
       // $(this).animate({
       //     height: '-=10px',
       //     top: '+=5px'
       // }); 
   });
   $('.imageWrapper').click(function(e) {
       $('#topLeft').attr('src',Math.ceil(Math.random() * 4) + '.svg');
       $('#topRight').attr('src',Math.ceil(Math.random() * 4) + '.svg');
       $('#bottomLeft').attr('src',Math.ceil(Math.random() * 4) + '.svg');
       $('#bottomRight').attr('src',Math.ceil(Math.random() * 4) + '.svg');
   }); 
});