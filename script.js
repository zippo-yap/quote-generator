
var quote;

$(document).ready(function() {

    $("#twitter").hide();
    $("#refresh").click(function() {
        $.ajax({
            url: "https://fortunecookieapi.herokuapp.com/v1/cookie",
            success: function (result) {
                result = result[0];
                 quote = result.fortune.message;
                var lesson = "Lesson: " + result.lesson.english + ", " + result.lesson.chinese +
                ", " + result.lesson.pronunciation;
                var lotto = "Lucky numbers: " + result.lotto.numbers.join(" ");
                $("blockquote").html("<h1>" + quote + "</h1>")
                $("blockquote").append("<p>" + lesson + "</p>")
                $("blockquote").append("<p>" + lotto + "</p>")
                $("#twitter").show();
            },
            error: function (xhr, status, error){
                console.log("xhr: " + xhr + "\nStatus: " + status + "\nError: " + error);
            }
        }); //End ajax
    });// Close refresh function

    $("#twitter").click(function(){
       //Code to tweet goes here
        $("#twitter").attr("href","https://twitter.com/intent/tweet?hashtags=fortunecookie&text=" + quote);
   });

}); //Close document ready
