$(document).ready(function() {

    $("#twitter").hide();
    $("#refresh").click(function() {
        getQuote();
    });// Close refresh function

}); //Close document ready

var quote;

var getQuote = function(){
    animateImage();
    randomBg();
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
    });  
};

$("#twitter").click(function(){
    //Code to tweet goes here
    $("#twitter").attr("href","https://twitter.com/intent/tweet?hashtags=fortunecookie&text=" + quote);
});

var animation = "animated swing";
var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

var animateImage = function (){
    $("#cookie").addClass(animation).one(animationEnd, function(){
        $("#cookie").removeClass(animation)
    });
};

// Create a function that will change the background colour randomly
var randomBg = function(){
// Create an array of background colours
var background =["#CC0099", "#FB0064", "#FF00FF", "#3300FF", "#99CC00", "#009966", "#FFCC00", "#0099FF"];
// Picks a random value in array
var i = Math.floor((Math.random() * background.length) + 1);
// jQuery that changes background
$("body").css("background",background[i]);
};
