 $(document).ready(function() {

     $('#refresh').click(function() {
        $.ajax({
            url: "https://fortunecookieapi.herokuapp.com/v1/cookie",
            success: function (result) {
                result = result[0];
                var quote = result.fortune.message;
            // fortune = quote;
            var lesson = "Lesson: " +result.lesson.english + ", " + result.lesson.chinese +
            ", " + result.lesson.pronunciation;
            var lotto ="Lucky numbers: " + result.lotto.numbers.join(" ");
            $("blockquote").html("<h1>" +quote + "</h1>")
            $("blockquote").append("<p>" +lesson + "</p>")
            $("blockquote").append("<p>" +lotto + "</p>")

        },
        error: function (xhr, status, error){
            console.log('xhr: ' + xhr + '\nStatus: ' + status + '\nError: ' + error);
        }
        }); //End ajax
    });// Close button
     $('#twitter').click(function(){
        ('#twitter').at = 'https://twitter.com/intent/tweet';
   });




}); //Close document ready

  