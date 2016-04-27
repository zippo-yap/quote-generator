$(document).ready(function() {

    $('button').click(function() {
        $.ajax({
            url: 'http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?',
            dataType: 'jsonp',
    // If the request is successful
    success: function (data){
      console.log(data.quoteText)
      console.log(data.quoteAuthor);
  },
  error: function (xhr, status, error){
      console.log('xhr: ' + xhr + '\nStatus: ' + status + '\nError: ' + error);
  }
});

    });// Close button
}); //Close document ready

//http://api.forismatic.com/api/1.0/?callback=parseQuote&method=getQuote&format=jsonp&lang=en&jsonp=parseQuote
