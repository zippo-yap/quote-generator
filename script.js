 $(document).ready(function() {

     $('#quote').click(function() {
        $.ajax({
            url: "https://fortunecookieapi.herokuapp.com/v1/cookie",
            success: function (result) {
                result = result[0];
                console.log(result);
                console.log(result.fortune.message);
                console.log(result.lesson.english + ", " + result.lesson.chinese +
                  ", " + result.lesson.pronunciation);
                console.log("Lucky numbers: " + result.lotto.numbers.join(" "));

            },
            error: function (xhr, status, error){
                console.log('xhr: ' + xhr + '\nStatus: ' + status + '\nError: ' + error);
            }
        }); //End ajax
    });// Close button
}); //Close document ready
